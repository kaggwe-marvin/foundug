"use client";
import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/app/ui/Appdashboard/forms/CustomInput";
import { useEffect, useRef } from "react";
import { action } from "./action";
import { redirect } from "next/navigation";

export function AddIt() {
  const { pending } = useFormStatus();
  return (
    <button className="w-full" type="submit">
      {pending ? "Initiating..." : "Initiate Payment"}
    </button>
  );
}

export function AddForm() {
  const [formState, formAction] = useFormState(action, {
    message: "",
    errors: undefined,
    fieldValues: {
      full_name: "",
      email: "",
      tel_number: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "success") {
      formRef.current?.reset();
    }
  }, [formState]);

  return (
    <form ref={formRef} action={formAction}>
      {formState.message === "success" && (
        <p>Successfully added {formState.fieldValues.tel_number}</p>
      )}
      <CustomInput
        label="Full Name"
        id="fullname"
        name="fullname"
        placeholder="Enter your name"
        required
      />
      <CustomInput
        label="E-mail"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <CustomInput
        label="Telephone Number"
        id="tel_number"
        name="tel_number"
        placeholder="Enter your mobile money number here"
        required
      />

      <AddIt />
      {formState.responseData?.meta.authorization.redirect &&
        redirect(formState.responseData?.meta.authorization.redirect)}
    </form>
  );
}
