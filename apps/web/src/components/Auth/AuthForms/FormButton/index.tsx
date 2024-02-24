import { ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
}

export function FormButton({ children }: FormButtonProps) {
    return (
        <button className="mt-12 bg-green-500 rounded-lg w-96 text-gray-200 py-3 mx-auto font-semibold text-lg hover:bg-green-600 transition-all duration-300 ease-in-out">
            {children}
        </button>
    );
}
