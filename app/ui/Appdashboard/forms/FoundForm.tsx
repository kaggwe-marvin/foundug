"use client";

import { addFound } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

const initialState = {
  message: "",
};

export function AddForm() {
  const [state, formAction] = useFormState(addFound, initialState);

  return (
    <form action={formAction}>
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
      

      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
