import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

// These are public constants for your R2 setup
const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";

// Initialize S3 Client for Cloudflare R2
// Note: On Vercel, ensure R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY are set in the dashboard
const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
  },
});

export async function getProjectImages(folder: string) {
  const cleanFolder = folder.replace(/^\/+|\/+$/g, "");
  
  // Safety check for environment variables
  if (!process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    console.warn("[R2 WARNING] R2 credentials missing. If you are on Vercel, check the Dashboard Environment Variables.");
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
