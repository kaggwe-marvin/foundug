import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const getResponse = searchParams.get("resp");
  const paymentResponse = getResponse ? JSON.parse(getResponse) : null;

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
