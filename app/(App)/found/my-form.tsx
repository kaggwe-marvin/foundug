/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
"use client";
import { useFormState, useFormStatus } from "react-dom";
import CustomInput from "@/app/ui/Appdashboard/forms/CustomInput";
import { useEffect, useRef } from "react";
import { action } from "./action";

export function AddIt() {
  const { pending } = useFormStatus();
  return (
    <button className="w-full" type="submit">
      {pending ? "submitting" : "add"}
    </button>
  );
}

export function AddForm() {
  const [formState, formAction] = useFormState(action, {
    message: "",
    errors: undefined,
    fieldValues: {
      name: "",
      description: "",
      imageFile: "",
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
        <div role="alert" className="alert alert-info">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Form submitted</span>
        </div>
      )}
      <CustomInput
        label="Name"
        id="name"
        name="name"
        placeholder="Enter your name"
        required
      />
      <CustomInput
        label="Description"
        id="description"
        name="description"
        placeholder="Type your description here"
        inputType="textarea"
      />
      <CustomInput
        label="Upload Image"
        id="imageFile"
        name="imageFile"
        inputType="file"
      />
      {formState.fieldValues.imageFile && (
        <img
          src={formState.fieldValues.imageFile}
          alt="uploaed image"
          width={400}
          height={450}
        />
      )}

      <AddIt />
    </form>
  );
}
