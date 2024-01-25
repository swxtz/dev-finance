import { ReactNode } from "react";

interface FormButtonProps {
    children: ReactNode;
}

export function FormButton({ children }: FormButtonProps) {
    return (
        <button className="py-4 px-32 bg-emerald-500 rounded-[8px] text-grey-200 font-semibold text-lg transition-colors hover:bg-emerald-600">
            {children}
        </button>
    );
}
