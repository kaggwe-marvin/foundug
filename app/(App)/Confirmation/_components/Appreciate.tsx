"use client";

import { useSearchParams } from "next/navigation";

export default function Appreciate() {
  const searchParams = useSearchParams();
  const getResponse = searchParams.get("resp");
  const paymentResponse = getResponse ? JSON.parse(getResponse) : null;
  console.log(paymentResponse);

  return (
    <>
      {" "}
      {paymentResponse && (
        <>
          <div className="container mx-auto mt-8">
            {/* Main Card */}
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-8 rounded-lg shadow-lg">
              <h1 className="text-3xl font-semibold mb-4">
                Thank you for your payment, {paymentResponse.data.fullName}!
              </h1>

              {/* Payment Details Section */}
              <div className="mb-6">
                <p className="text-lg">Your payment details:</p>
                <ul className="list-disc pl-4">
                  <li>
                    Amount: {paymentResponse.data.amount}{" "}
                    {paymentResponse.data.currency}
                  </li>
                  <li>Status: {paymentResponse.status}</li>
                  <li>Transaction ID: {paymentResponse.data.txRef}</li>
                  <li>
                    Date:{" "}
                    {new Date(paymentResponse.data.createdAt).toLocaleString()}
                  </li>
                </ul>
              </div>

              {/* Transaction Status Section */}
              <div className="mb-6">
                <p className="text-lg">Transaction Status:</p>
                <p
                  className={
                    paymentResponse.chargeResponseCode === "00"
                      ? "text-green-700"
                      : "text-red-700"
                  }>
                  {paymentResponse.chargeResponseCode === "00"
                    ? "Transaction Successful"
                    : paymentResponse.chargeResponseMessage}
                </p>
              </div>

              {/* Customer Information Section */}
              <div className="mb-6">
                <p className="text-lg">Customer Information:</p>
                <ul className="list-disc pl-4">
                  <li>Name: {paymentResponse.data.fullName}</li>
                  <li>Email: {paymentResponse.data.email}</li>
                  <li>Phone: {paymentResponse.data.phone}</li>
                  <li className="text-gray-500">
                    Please keep your Customer ID (
                    {paymentResponse.data.customer.AccountId}) for future
                    reference to identify your order.
                  </li>
                </ul>
              </div>

              {/* Test Mode/Live Mode Information */}
              <div className="mb-6">
                <p className="text-lg">Mode:</p>
                <p>
                  {paymentResponse.is_live === 0 ? "Test Mode" : "Live Mode"}
                </p>
              </div>

              {/* Review and Feedback Section */}
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Leave a Review
                </button>
                <p className="text-gray-500 text-sm">
                  Your opinion matters to us!
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
