import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Public constants
const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";
let cachedClient: S3Client | null | undefined;
let hasWarnedMissingCredentials = false;

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

export async function getProjectImages(folder: string) {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  const s3Client = createS3Client();

  if (!s3Client) return [];

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
        })
      );

      if (withoutSlash.Contents && withoutSlash.Contents.length > 0) {
        Contents = withoutSlash.Contents;
        break;
      }
    }

    if (!Contents) return [];

    return Contents
      .filter((item) => item.Key && !item.Key.endsWith("/"))
      .map((item) => ({
        url: `${PUBLIC_URL}/${item.Key}`,
        description: item.Key?.split("/").pop() || "",
        isVideo: (item.Key?.toLowerCase().endsWith(".mp4") || item.Key?.toLowerCase().endsWith(".webm")),
      }));
  } catch (error: any) {
    console.error(`[R2 ERROR] Signature or Connection error for "${folder}":`, error.message);
    // Log the specific error code to help identify if it's still SignatureDoesNotMatch
    if (error.Code) console.error(`[R2 ERROR CODE] ${error.Code}`);
    return [];
  }
}
