import React from "react";

const inputVariants = {
  login_input:
    "border rounded w-full bg-gray-100 w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",
  modal_input:
    "border-b text-slate-700 text-sm w-full p-2.5 focus:outline-none  ",
};

export default function Input({
  className,
  inputVariant = "login_input",
  type,
  name,
  inputId,
  defaultValue,
  label,
  placeholder,
  value,
  helperText,
  onChange,
  error,
  ...props
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm text-gray-400">
          {label}
        </label>
      )}

      {helperText && (
        <label className="block text-sm text-gray-600"> {helperText} </label>
      )}

      <input
        className={`
       ${inputVariants[inputVariant]}
       `}
        type={type}
        name={name}
        id={inputId}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        {...props}
      />

      <p className="mt-2 text-sm text-red-600"> {error} </p>
    </div>
  );
}
