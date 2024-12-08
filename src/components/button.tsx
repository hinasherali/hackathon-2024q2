import React from "react";

interface ButtonProps {
  text: string; // Text displayed on the button
  onClick?: () => void; // Function to be executed on button click
  type?: "button" | "submit" | "reset"; // Button type (default is "button")
  variant?: "primary" | "secondary" | "outline"; // Button style variant
  disabled?: boolean; // Disabled state
  className?: string; // Additional Tailwind classes for custom styling
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  className = "",
}) => {
  // Determine styles based on variant
  const baseStyles =
    "px-4 py-2 font-semibold text-sm rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
    outline:
      "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-300",
  };

  const disabledStyles =
    "opacity-50 cursor-not-allowed";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
