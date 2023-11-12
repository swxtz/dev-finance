import { ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
}

export function FormButton({ children } : FormButtonProps) {
    return (
        <button
            type="submit"
            className="w-[294px] h-12 bg-green-700 rounded-md font-semibold transition-colors hover:bg-green-800 md:w-96 flex items-center justify-center"
        >
            {children}
        </button>
    );
}
