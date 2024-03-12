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
          <p>status: {paymentResponse.status}</p>
          <p>message: {paymentResponse.message}</p>
          <p>data id:{paymentResponse.data.id}</p>
          <p>data:{paymentResponse.data.txRef}</p>
          <p>data amount:{paymentResponse.data.amount}</p>
        </>
      )}
    </>
  );
}
