import { z } from "zod";
import { supabase } from "@/app/lib/client";
import { generateFilePath, processFile } from "./utils";
import { State, handleFail, handleSuccess } from "../(App)/found/state";

export async function addFound(
  prevState: State,
  formData: FormData
): Promise<State> {
  const schema = z.object({
    name: z.string().max(255),
    description: z.string(),
    // Add other form fields here as needed
  });

  const parse = schema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    // Add other form fields here as needed
  });

  if (!parse.success) {
    console.error("Validation failed:", parse.error);
    return handleFail(prevState, {
      code: 400,
      message: `Validation failed: ${parse.error}`,
    });
  }

  const data = parse.data;
  // Upload the image and get the URL
  const { publicUrl } = await upload(formData);

  try {
    const { data: Founditem, error } = await supabase
      .from("founditems")
      .insert([
        {
          name: data.name,
          description: data.description,
          datefound: new Date().toISOString(),
          images: publicUrl,
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Failed to add found item");
    }

    console.log("Found item added:", Founditem);

    return handleSuccess({
      name: data.name?.toString(),
      description: data.description?.toString(),
      // Add other data fields here as needed
    });
  } catch (error) {
    console.error("Catch block error:", error);
    return handleFail(prevState, {
      code: 400,
      message: `Does not match expected value`,
    });
  }
}

// Utility function to upload the image
async function upload(data: FormData) {
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
