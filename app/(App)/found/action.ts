import { ZodError, z } from "zod";

export type Fields = {
  name: string;
  description: string;
  imageFile: string;
};

export type FormState = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
};

export async function action(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const imageFile: File | null = formData.get("imageFile") as File; // Get the actual File object

  console.log("name:", name);
  console.log("description:", description);
  console.log("imageFile:", imageFile);

  const MAX_FILE_SIZE = 5000000; // 5MB
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ];

  const schema = z.object({
    name: z.string().max(255),
    description: z.string(),
    imageFile: z
      .any()
      .refine(
        (file) => file?.size <= MAX_FILE_SIZE,
        "Max imageFile size is 5MB."
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        "Only .jpg, .jpeg, .png, and .webp formats are supported."
      ),
  });

  try {
    // Validate form data using the schema
    schema.parse({
      name,
      description,
      imageFile,
    });

    // Create an object URL for the imageFile
    const imageUrl = URL.createObjectURL(imageFile);

    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        name,
        description,
        imageFile: imageUrl,
      },
    };
  } catch (error) {
    const zodError = error as ZodError;
    const errorMap = zodError.flatten().fieldErrors;

    return {
      message: "error",
      errors: {
        name: errorMap["name"]?.[0] ?? "",
        description: errorMap["description"]?.[0] ?? "",
        imageFile: errorMap["imageFile"]?.[0] ?? "",
      },
      fieldValues: {
        name,
        description,
        imageFile: "",
      },
    };
  }
}
