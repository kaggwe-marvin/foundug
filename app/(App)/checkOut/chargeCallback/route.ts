import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    // Get the full URL string
    const url = new URL(req.url);

    // Log the full URL for debugging purposes
    console.log("Full URL:", url.href);

    // Iterate over the search parameters and log each one
    url.searchParams.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    // Extract the JSON string from the 'resp' query parameter
    const respParam = url.searchParams.get("resp");

    // Parse the JSON string to extract the parameters
    const { status,data } = JSON.parse(
      respParam || "{}"
    );

    // Log the received parameters for debugging purposes
    console.log("Received parameters after payment:", {
      status,
      data,
    });

    // Perform any necessary actions with the extracted data
    // For example, update the database, send a confirmation email, etc.

    // Respond with a success message or any other appropriate response
    return new Response("Payment successful. Thank you!");
  } catch (error) {
    // Log any errors that occur during the parsing of the payment response
    console.error("Error parsing payment response:", error);
    return new Response("Error processing payment response.", { status: 500 });
  }
}
