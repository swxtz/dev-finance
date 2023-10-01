import { ReactNode } from "react";

export interface ValidationErrorMessageProps {
    children: ReactNode;
}

export function ValidationErrorMessage({ children }: ValidationErrorMessageProps) {
    return (
        <span className="text-red-500 text-sm">{children}</span>
    );
}