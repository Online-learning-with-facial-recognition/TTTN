import { cn } from "@/lib/utils"; // Nếu có file utils.ts hỗ trợ merge classnames
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger"; // Định nghĩa các loại variant
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-medium transition-colors";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
}
