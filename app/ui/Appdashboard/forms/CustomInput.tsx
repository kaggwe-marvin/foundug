import React from "react";

interface CustomInputProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  inputType?: string; // New prop for deciding the input type
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  id,
  name,
  placeholder,
  inputType = "text",
}) => {
  return (
    <div className="mb-4">
      <label className="label" htmlFor={id}>
        <span className="label-text">{label}</span>
      </label>
      {inputType === "textarea" ? (
        <textarea
          className="border rounded w-full py-2 px-3 bg-neutral text-base-content"
          id={id}
          name={name}
          placeholder={placeholder}></textarea>
      ) : (
        <input
          className="border rounded w-full py-2 px-3 bg-neutral text-base-content"
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default CustomInput;
