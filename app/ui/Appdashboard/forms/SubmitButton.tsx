"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      aria-disabled={status.pending}
      onClick={(e) => {
        // prevent multiple submits
        if (status.pending) e.preventDefault();
      }}
      className={`rounded-md text-white px-4 py-2 ${
        status.pending ? "bg-blue-300" : "bg-blue-400"
      }`}>
      {status.pending ? "Submiting..." : "Submit"}
    </button>
  );
}

export default SubmitButton;
