import React from "react";

interface CustomInputProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  inputType?: "text" | "textarea" | "file"; // Added "file" as a valid input type
  required?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  name,
  placeholder,
  inputType = "text",
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
        {required && <span className="text-error">*</span>}
      </label>
      {inputType === "textarea" ? (
        <textarea
          className="border rounded w-full py-2 px-3 bg-neutral text-base-content"
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}></textarea>
      ) : inputType === "file" ? (
        <input
          className="file-input w-full max-w-xs"
          type="file"
          id={id}
          name={name}
          required={required}
        />
      ) : (
        <input
          className="border rounded w-full py-2 px-3 bg-neutral text-base-content"
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default CustomInput;
