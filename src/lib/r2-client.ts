import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Public constants
const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";
let cachedClient: S3Client | null | undefined;
let hasWarnedMissingCredentials = false;
const CACHE_TTL_MS = 5 * 60 * 1000;

type ProjectMedia = {
  url: string;
  description: string;
  isVideo: boolean;
};

type CacheEntry = {
  expiresAt: number;
  data: ProjectMedia[];
};

const imagesCache = new Map<string, CacheEntry>();
const inflightCache = new Map<string, Promise<ProjectMedia[]>>();

/**
 * Helper to initialize the S3 client lazily.
 */
function createS3Client() {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  if (!accessKeyId || !secretAccessKey) {
    if (!hasWarnedMissingCredentials) {
      console.warn("[R2 CLIENT] MISSING CREDENTIALS in environment variables.");
      hasWarnedMissingCredentials = true;
    }
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    // Required for Cloudflare R2 to avoid virtual-hosted style issues
    forcePathStyle: true,
  });

  return cachedClient;
}

export async function getProjectImages(folder: string, options?: { maxItems?: number }) {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  const maxItems = options?.maxItems;
  const cacheKey = `${cleanFolder}::${maxItems ?? "all"}`;
  const s3Client = createS3Client();

  if (!s3Client) return [];

  const now = Date.now();
  const cached = imagesCache.get(cacheKey);
  if (cached && cached.expiresAt > now) {
    return cached.data;
  }

  const inflight = inflightCache.get(cacheKey);
  if (inflight) {
    return inflight;
  }

  const requestPromise = (async () => {
    try {
      const withoutProjectsPrefix = cleanFolder.replace(/^projects\//i, "");
      const withProjectsPrefix = cleanFolder.startsWith("projects/")
        ? cleanFolder
        : `projects/${cleanFolder}`;

      // Try both naming conventions because some folders exist under "projects/..."
      // while others are stored at the bucket root.
      const candidatePrefixes = Array.from(
        new Set(
          [cleanFolder, withProjectsPrefix, withoutProjectsPrefix]
            .map((value) => value.replace(/^\/+|\/+$/g, ""))
            .filter(Boolean)
        )
      );

      let Contents: Awaited<ReturnType<S3Client["send"]>>["Contents"];
      for (const prefix of candidatePrefixes) {
        const withSlash = await s3Client.send(
          new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            Prefix: `${prefix}/`,
            MaxKeys: maxItems,
          })
        );

        if (withSlash.Contents && withSlash.Contents.length > 0) {
          Contents = withSlash.Contents;
          break;
        }

        const withoutSlash = await s3Client.send(
          new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            Prefix: prefix,
            MaxKeys: maxItems,
          })
        );

        if (withoutSlash.Contents && withoutSlash.Contents.length > 0) {
          Contents = withoutSlash.Contents;
          break;
        }
      }

      if (!Contents) return [];

      const mapped = Contents
        .filter((item) => item.Key && !item.Key.endsWith("/"))
        .map((item) => ({
          url: `${PUBLIC_URL}/${item.Key}`,
          description: item.Key?.split("/").pop() || "",
          isVideo: (item.Key?.toLowerCase().endsWith(".mp4") || item.Key?.toLowerCase().endsWith(".webm")),
        }));

      const result = typeof maxItems === "number" ? mapped.slice(0, maxItems) : mapped;
      imagesCache.set(cacheKey, {
        expiresAt: Date.now() + CACHE_TTL_MS,
        data: result,
      });

      return result;
    } catch (error: any) {
      console.error(`[R2 ERROR] Signature or Connection error for "${folder}":`, error.message);
      // Log the specific error code to help identify if it's still SignatureDoesNotMatch
      if (error.Code) console.error(`[R2 ERROR CODE] ${error.Code}`);
      return [];
    } finally {
      inflightCache.delete(cacheKey);
    }
  })();

  inflightCache.set(cacheKey, requestPromise);
  return requestPromise;
}

export async function getProjectCoverImage(folder: string) {
  const images = await getProjectImages(folder, { maxItems: 1 });
  return images[0]?.url || "";
}

type HasR2Folder = {
  r2Folder?: string | null;
};

// Fetch cover images in pages to avoid a large burst of R2 requests at once.
export async function attachProjectCoversPaged<T extends HasR2Folder>(
  items: T[],
  pageSize = 6
): Promise<Array<T & { coverImage: string }>> {
  const safePageSize = Math.max(1, Math.floor(pageSize));
  const output: Array<T & { coverImage: string }> = [];

  for (let i = 0; i < items.length; i += safePageSize) {
    const chunk = items.slice(i, i + safePageSize);
    const mapped = await Promise.all(
      chunk.map(async (item) => {
        if (!item.r2Folder) {
          return { ...item, coverImage: "" };
        }

        const coverImage = await getProjectCoverImage(item.r2Folder);
        return { ...item, coverImage };
      })
    );

    output.push(...mapped);
  }

  return output;
}
