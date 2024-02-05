"use client";

import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

import { FlutterWaveResponse } from "flutterwave-react-v3/dist/types";

const CheckoutBtn = () => {
  const config = {
    public_key: process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || "",
    tx_ref: Date.now().toString(),
    amount: 5000,
    currency: "UGX",
    payment_options: "mobilemoney",
    customer: {
      email: "user@gmail.com",
      phone_number: "0706383077",
      name: "john doe",
    },
    customizations: {
      title: "foundUg",
      description: "Payment for Id",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Checkout!",
    callback: (response: FlutterWaveResponse) => {
      console.log("this is the response", response);
      closePaymentModal();
    },
    onClose: () => {
      console.log("Payment modal closed");
      alert("Payment modal closed");
    },
  };
  return <FlutterWaveButton {...fwConfig} />;
};

export default CheckoutBtn;
