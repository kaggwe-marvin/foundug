"use client";
import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const getResponse = searchParams.get("resp");
  const paymentResponse = JSON.parse(getResponse);
  console.log(paymentResponse);
  return (
    <>
      <Header />
      <main className="">
        <h1>Thank you For your Payment</h1>
        <p>status: {paymentResponse.status}</p>
        <p>message: {paymentResponse.message}</p>
        <p>data id:{paymentResponse.data.id}</p>
        <p>data:{paymentResponse.data.txRef}</p>
        <p>data amount:{paymentResponse.data.amount}</p>
      </main>
      <Footer />
    </>
  );
};

export default Page;
