import { z } from "zod";
import { supabase } from "@/app/lib/client";
import { revalidatePath } from "next/cache";

export async function addFound(
  prevState: {
    message: string;
  },
  formData: FormData
) {
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
    return { message: "Failed to add Found Item" };
  }

  const data = parse.data;

  try {
    const { data: Founditem, error } = await supabase
      .from("founditems")
      .insert([
        {
          name: data.name,
          description: data.description,
          datefound: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error("Supabase error:", error);
      throw new Error("Failed to add found item");
    }

    console.log("Found item added:", Founditem?.[0]?.name || "Unknown");
    revalidatePath("/lost");
    return {
      message: `Found item added: ${Founditem?.[0]?.name || "Unknown"}`,
    };
  } catch (error) {
    console.error("Catch block error:", error);
    return { message: "Failed to add found item" };
  }
}

