import type { ButtonHTMLAttributes, ReactNode } from "react";
import { tv } from "tailwind-variants";

const button = tv({
    base: "w-full text-stone-100 transition-all flex flex-row gap-1 justify-center",
    variants: {
        variant: {
            primary: "text-stone-200",
            destructive: "hover:text-red-500",
        },
    },

    defaultVariants: {
        variant: "primary",
    },
});

interface AvatarPopoverButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "destructive";
    children: ReactNode;
    icon?: ReactNode;
}

export function AvatarPopoverButton({
    variant = "primary",
    children,
    icon,
    ...rest
}: AvatarPopoverButtonProps) {
    return (
        <button type="button" {...rest} className={button({ variant })}>
            {icon}
            {children}
        </button>
    );
}
