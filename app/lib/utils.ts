import { supabase } from "./client";

// Utility function to process the file
export async function processFile(file: File | null): Promise<Buffer> {
  if (!file) {
    throw new Error("No file uploaded");
  }
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  return buffer;
}

// Utility function to generate a unique path for the file
export function generateFilePath(file: File): string {
  const fileExt = file.name.split(".").pop()?.toLowerCase() ?? "jpeg";
  const path = `${Date.now()}.${fileExt}`;
  return path;
}

// Utility function to upload the image
export async function upload(data: FormData) {
  console.log("Uploading...");
  const file: File | null = data.get("file") as File;
  const buffer = await processFile(file);
  const path = generateFilePath(file);
  const { data: uploadedData, error: uploadError } = await supabase.storage
    .from("images")
    .upload(path, buffer, {
      contentType: file.type || "application/octet-stream",
    });
  if (uploadError) {
    throw uploadError;
  }
  console.log("Upload successful!", uploadedData);

  // Get the public URL for the uploaded image
  const { data: urldata } = await supabase.storage
    .from("images")
    .getPublicUrl(path);

  console.log("Public URL:", urldata.publicUrl);

  return { uploadedData, publicUrl: urldata.publicUrl };
}
