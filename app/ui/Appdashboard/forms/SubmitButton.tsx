"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="card-actions justify-end">
      <button className="btn btn-primary" type="submit" aria-disabled={pending}>
        {pending ? "Adding..." : "Submit item"}
      </button>
    </div>
  );
}

export default SubmitButton;
