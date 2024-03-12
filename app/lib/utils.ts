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

export function genTransactionRef() {
  const timestamp = new Date().getTime();
  const randomAlphabetic = Math.random()
    .toString(36)
    .substring(2, 2)
    .toUpperCase();
  const randomNum = Math.floor(Math.random() * 10000);
  const transactionRef = `${randomAlphabetic}-${timestamp}-${randomNum}`;
  return transactionRef;
}

export function getNetworkFromPhoneNumber(phoneNumber: string): string {
  const mtnPrefixes: string[] = ["077", "078", "076"];
  const airtelPrefixes: string[] = ["074", "075", "070"];

  const userPrefix: string = phoneNumber.substring(0, 3);

  if (mtnPrefixes.includes(userPrefix)) {
    return "MTN";
  } else if (airtelPrefixes.includes(userPrefix)) {
    return "AIRTEL";
  } else {
    return "Unknown";
  }
}
