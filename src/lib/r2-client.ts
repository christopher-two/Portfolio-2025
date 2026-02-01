import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Public constants
const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";

/**
 * Helper to initialize the S3 client lazily.
 */
function createS3Client() {
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  if (!accessKeyId || !secretAccessKey) {
    console.error("[R2 CLIENT] MISSING CREDENTIALS in environment variables.");
    return null;
  }

  // Debug log (Safe: only shows first/last chars and length)
  console.log(`[R2 CLIENT] Initializing with Key ID: ${accessKeyId.substring(0, 4)}...${accessKeyId.slice(-4)} (Len: ${accessKeyId.length})`);
  console.log(`[R2 CLIENT] Secret Key Check (Len: ${secretAccessKey.length})`);

  return new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    // Required for Cloudflare R2 to avoid virtual-hosted style issues
    forcePathStyle: true,
  });
}

export async function getProjectImages(folder: string) {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  const s3Client = createS3Client();

  if (!s3Client) return [];

  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${cleanFolder}/`,
    });

    const response = await s3Client.send(command);
    let { Contents } = response;

    // Fallback if prefix with slash returns nothing
    if (!Contents || Contents.length === 0) {
      const fallbackCommand = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: cleanFolder,
      });
      const fallbackRes = await s3Client.send(fallbackCommand);
      Contents = fallbackRes.Contents;
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
