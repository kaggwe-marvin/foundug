"use client";
import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Define the type of the payment response
interface PaymentResponse {
  status: string;
  message: string;
  data: {
    id: string;
    txRef: string;
    amount: number;
  };
}

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [paymentResponse, setPaymentResponse] =
    useState<PaymentResponse | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const getResponse = searchParams.get("resp");
    const parsedResponse = getResponse ? JSON.parse(getResponse) : null;

    // Simulate asynchronous data fetching
    setTimeout(() => {
      setPaymentResponse(parsedResponse);
      setLoading(false);
    }, 1000); // Adjust timeout as needed or replace with actual fetch call
  }, [searchParams]);

  if (loading) {
    return <p>Loading...</p>; // Show loading state until data is fetched
  }

  // Null check to prevent errors
  const status = paymentResponse ? paymentResponse.status : null;
  const message = paymentResponse ? paymentResponse.message : null;
  const dataId =
    paymentResponse && paymentResponse.data ? paymentResponse.data.id : null;
  const txRef =
    paymentResponse && paymentResponse.data ? paymentResponse.data.txRef : null;
  const amount =
    paymentResponse && paymentResponse.data
      ? paymentResponse.data.amount
      : null;

  return (
    <>
      <Header />
      <main className="">
        <h1>Thank you For your Payment</h1>
        {/* Rendering data only if available */}
        <p>status: {status}</p>
        <p>message: {message}</p>
        <p>data id: {dataId}</p>
        <p>data txRef: {txRef}</p>
        <p>data amount: {amount}</p>
      </main>
      <Footer />
    </>
  );
};

export default Page;
