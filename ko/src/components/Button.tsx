import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${
        variant === "primary"
          ? "bg-white text-black border"
          : "bg-transparent text-white border"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
