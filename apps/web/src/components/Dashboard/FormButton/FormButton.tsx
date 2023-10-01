"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const button = tv({
    base: "w-[200px] py-4 rounded-lg font-medium",
    variants: {
        colors: {
            green: "bg-green-700 text-gray-200 hover:bg-green-800 hover:transition-colors hover:text-gray-300",
            red: "bg-transparent border-[2px] border-red-700 text-red-700 hover:border-red-900 hover:text-red-900 hover:transition-colors",
        },
    },
    defaultVariants: {
        colors: "green",
    },
});

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    color?: "green" | "red";
}

export function FormButton({ children, color = "green", ...rest }: FormButtonProps) {
    return (
        <button {...rest} className={button({ colors: color })}>
            {children}
            <div className=""></div>
        </button>
    );
}
