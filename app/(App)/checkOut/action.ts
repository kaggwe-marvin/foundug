"use server";

import { ZodError, z } from "zod";

export type Fields = {
  full_name: string;
  email: string;
  tel_number: string;
};
export type ResponseData = {
  status: string;
  message: string;
  meta: {
    authorization: {
      redirect: string;
      mode: string;
    };
  };
};
export type FormState = {
  message: string;
  errors: Record<keyof Fields, string> | undefined;
  fieldValues: Fields;
  responseData?: ResponseData;
};
function generateTxRef() {
  return "TX-" + Math.random().toString(36).slice(2, 11);
}

export async function action(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const full_name = formData.get("fullname") as string;
  const email = formData.get("email") as string;
  const tel_number = formData.get("tel_number") as string;

  // Input sanitization
  const sanitizedEmail = email.trim(); // Trim any leading or trailing whitespace
  const sanitizedTelNumber = tel_number.replace(/\D/g, ""); // Remove any non-digit characters

  const schema = z.object({
    full_name: z.string().max(255),
    email: z.string().max(255),
    tel_number: z.string(),
  });

  try {
    // Validate form data using the schema
    schema.parse({
      email: sanitizedEmail,
      tel_number: sanitizedTelNumber,
      full_name: full_name,
    });
    // Determine network based on sanitizedTelNumber prefix
    let Network: string;
    const prefix = sanitizedTelNumber.slice(0, 3);
    if (["070", "074", "075"].includes(prefix)) {
      Network = "AIRTEL";
    } else if (["077", "078", "076"].includes(prefix)) {
      Network = "MTN";
    } else {
      Network = "UNKNOWN"; // You can handle unknown prefixes as you see fit
    }

    // Construct newCharge object with sanitized inputs
    const newCharge = {
      tx_ref: generateTxRef(),
      amount: "500",
      email: sanitizedEmail,
      phone_number: sanitizedTelNumber,
      currency: "UGX",
      fullname: full_name,
      redirect_url: "https://foundug.vercel.app/Confirmation",
      network: Network,
    };

    const response = await fetch(
      "https://api.flutterwave.com/v3/charges?type=mobile_money_uganda",
      {
        method: "POST",
        body: JSON.stringify(newCharge),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_FLW_SECRET_KEY}`,
        },
      }
    );
    const responseData = await response.json();
    console.log("Response Data:", responseData);
    if (!response.ok) {
      // Handle HTTP errors
      const errorResponse = await response.json();
      return {
        message: `HTTP Error: ${response.status}`,
        errors: {
          full_name: "",
          email: "",
          tel_number: "",
        },
        fieldValues: {
          email: sanitizedEmail,
          tel_number: sanitizedTelNumber,
          full_name,
        },
      };
    }

    // Handle success response
    return {
      message: "success",
      errors: undefined,
      fieldValues: {
        email: sanitizedEmail,
        tel_number: sanitizedTelNumber,
        full_name,
      },
      responseData: responseData,
    };
  } catch (error) {
    // Handle Zod validation errors
    const zodError = error as ZodError;
    const errorMap: Record<string, string> = {};

    if (zodError.errors && Array.isArray(zodError.errors)) {
      zodError.errors.forEach((err) => {
        if (err.path) {
          errorMap[err.path.join(".")] = err.message;
        }
      });
    }

    return {
      message: "validation_error",
      errors: errorMap,
      fieldValues: {
        email: sanitizedEmail,
        tel_number: sanitizedTelNumber,
        full_name,
      },
    };
  }
}
