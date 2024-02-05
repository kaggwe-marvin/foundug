import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";


export async function POST(request: Request) {
  // Extract the request body
  const requestBody = await request.json();
  console.log("Request body:", requestBody);

  // Merge the default details with the incoming request body
  const mergedBody = { ...requestBody };
  console.log("Merged request body:", mergedBody);

  // Retrieve the Flutterwave secret key from environment variables
  const secretKey = process.env.NEXT_PUBLIC_FLW_SECRET_KEY;
  console.log("Secret key:", secretKey);

  // Prepare the request headers
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${secretKey}`,
  };
  console.log("Headers:", headers);

  // Make the POST request to the Flutterwave API
  const response = await fetch(
    "https://api.flutterwave.com/v3/charges?type=mobile_money_uganda",
    {
      method: "POST",
      headers,
      body: JSON.stringify(mergedBody),
    }
  );
  console.log("Response from Flutterwave API:", response);

  // Check if the response status is 200 (OK)
  if (response.status === 200) {
    // Return the response from Flutterwave API
    const responseBody = await response.text();
    console.log("Response body from Flutterwave API:", responseBody);

    // Parse the response body to extract the redirect link
    const responseData = JSON.parse(responseBody);
    const redirectLink = responseData.meta.authorization.redirect;

    // Redirect to the extracted URL
    console.log("Redirecting...", redirectLink);
    redirect(redirectLink);

    return new Response(responseBody, {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    // Handle other status codes here
    console.log("Response status is not 200. Handling accordingly...");
    // Handle other status codes accordingly
  }
}
