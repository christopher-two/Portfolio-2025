import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const ACCOUNT_ID = "1827203a2c62ad3b7a9aaace51eb44b7";
const BUCKET_NAME = "projects";
const PUBLIC_URL = "https://pub-f9c51555bfe841b8af90cf9dc30b962d.r2.dev";

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
  
  if (!process.env.R2_ACCESS_KEY_ID || !process.env.R2_SECRET_ACCESS_KEY) {
    return [];
  }

  try {
    // Try with trailing slash first (standard for folders)
    const command = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: `${cleanFolder}/`,
    });

    let { Contents } = await s3Client.send(command);

    // If empty, try without trailing slash just in case
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
    console.error("Error fetching images from R2:", error);
    return [];
  }
}
