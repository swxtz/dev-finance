import { InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
}

export function FormInput({ placeholder, ...rest }: FormInputProps) {
  return (
    <div className="bg-zinc-700 placeholder:text-gray-400 placeholder:font-medium py-2 px-3 rounded">
      <input placeholder={placeholder} {...rest} className="bg-transparent outline-none focus:outline-none" />
    </div>
  );
}