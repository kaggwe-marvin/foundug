import Header from "@/app/ui/Appdashboard/header";
import Footer from "@/app/ui/landing/footer";
import React from "react";
import Appreciate from "./_components/Appreciate";
export const dynamic = "force-dynamic";
const Page = () => {
  return (
    <>
      <Header />
      <main className="">
        <h1>Thank you For your Payment</h1>
        <Appreciate />
      </main>
      <Footer />
    </>
  );
};

export default Page;
