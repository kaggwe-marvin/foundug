import Header from "@/app/ui/Appdashboard/header";
import CheckoutBtn from "@/app/ui/checkout/CheckoutBtn";
import Footer from "@/app/ui/landing/footer";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col p-6">
        <h1>this is the checkout page</h1>
        <CheckoutBtn />
      </main>
      <Footer />
    </>
  );
};

export default page;
