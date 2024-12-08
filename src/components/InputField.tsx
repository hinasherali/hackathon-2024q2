import React from "react";

interface InputFieldProps {
  label?: string; // Label for the input field
  id: string; // Unique identifier for the input field
  type?: "text" | "email" | "password" | "number" | "textarea"; // Input type (default is "text")
  placeholder?: string; // Placeholder text
  value?: string | number; // Current value of the input
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; // Function called on value change
  required?: boolean; // Whether the field is required
  error?: string; // Error message
  className?: string; // Additional Tailwind classes
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type = "text",
  placeholder = "",
  value,
  onChange,
  required = false,
  error,
  className = "",
}) => {
  const baseStyles =
    "w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

  const errorStyles = error ? "border-red-500 focus:ring-red-500" : "border-gray-300";

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`${baseStyles} ${errorStyles} ${className} h-32 resize-none`}
        />
      );
    }
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseStyles} ${errorStyles} ${className}`}
      />
    );
  };

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 font-medium mb-1"
        >
          {label}
        </label>
      )}
      {renderInput()}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
