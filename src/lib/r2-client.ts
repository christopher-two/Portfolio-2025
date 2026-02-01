import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// Public constants
const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";

/**
 * Helper to initialize the S3 client lazily.
 * This ensures environment variables are read at runtime on Vercel.
 */
function createS3Client() {
  const accessKeyId = process.env.R2_ACCESS_KEY_ID?.trim();
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY?.trim();

  if (!accessKeyId || !secretAccessKey) {
    return null;
  }

  return new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    // Force path-style to ensure better compatibility with Cloudflare R2 signature process
    forcePathStyle: true,
  });
}

export async function getProjectImages(folder: string) {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  
  const s3Client = createS3Client();

  if (!s3Client) {
    console.warn("[R2 WARNING] R2 credentials missing in process.env.");
    return [];
  }

  try {
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${cleanFolder}/`,
    });

    let { Contents } = await s3Client.send(command);

    if (!Contents || Contents.length === 0) {
      const fallbackCommand = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: cleanFolder,
      });
      const response = await s3Client.send(fallbackCommand);
      Contents = response.Contents;
    }

    if (!Contents) return [];

    return Contents
      .filter((item) => item.Key && !item.Key.endsWith("/"))
      .map((item) => {
        const url = `${PUBLIC_URL}/${item.Key}`;
        const filename = item.Key?.split("/").pop() || "";
        const isVideo = filename.toLowerCase().endsWith(".mp4") || filename.toLowerCase().endsWith(".webm");
        
        return {
          url,
          description: filename,
          isVideo,
        };
      });
  } catch (error) {
    console.error(`[R2 ERROR] Failed to fetch images for "${folder}":`, error);
    return [];
  }
}
