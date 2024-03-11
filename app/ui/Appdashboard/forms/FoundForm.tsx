"use client";

import { addFound } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";
import { State } from "@/app/(App)/found/state";

export function AddForm({ initalState }: { initalState: State }) {
  const [state, formAction] = useFormState(addFound, initalState);

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
      <CustomInput
        label="Upload Image"
        id="file"
        name="file"
        inputType="file"
      />

      <SubmitButton />
    </form>
  );
}
