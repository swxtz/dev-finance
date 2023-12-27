import { ReactNode } from "react";
import { tv } from "tailwind-variants";

import { Inter } from "next/font/google";
import { cn } from "@/utils/cn";

const inter = Inter({ subsets: ["latin"] });

const card = tv({
    base: "w-[352px] h-[136px] rounded-lg",
    variants: {
        color: {
            zinc: "bg-zinc-700",
            green: "bg-green-700",
        },
    },

    defaultVariants: {
        color: "zinc",
    },
});

interface MoneyCardProps {
    color?: "zinc" | "green";
    label: string;
    icon: ReactNode;
    value?: number;
}

export function MoneyCard({
    color = "zinc",
    label,
    icon,
    value = 0,
}: MoneyCardProps) {
    const formattedValue = Intl.NumberFormat("pt-br", {
        currency: "BRL",
        style: "currency"
    }).format(value);

    formattedValue.replace("R$", "").replace(" ", "");

    //const valueLength = value.toString();
    return (
        <div className={card({ color })}>
            <div className="p-8">
                <div className="flex flex-row justify-between items-center">
                    <span className="text-base test-gray-300">{label}</span>
                    {icon}
                </div>
                <div className="max-w-[352px] truncate">
                    <span className="text-3xl">
                        
                        <span className={cn("max-w-8 text-2xl", inter.className)}>
                            {formattedValue}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
