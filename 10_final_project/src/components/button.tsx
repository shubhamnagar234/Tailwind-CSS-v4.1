import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary";
}

export const Button = ({
  children,
  className,
  variants = "primary",
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
  };

  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md",
        variantClasses[variants],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
