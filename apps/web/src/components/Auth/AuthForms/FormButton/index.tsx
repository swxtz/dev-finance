import { ButtonHTMLAttributes, ReactNode } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type: "submit" | "button" | "reset" | undefined;
}

export function FormButton({ type, children, ...rest }: FormButtonProps) {
  return (
    <button
      className="mt-12 bg-teal-800 rounded-lg w-96 text-gray-200 py-3 mx-auto font-semibold text-lg hover:bg-teal-900 transition-all duration-300 ease-in-out"
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
