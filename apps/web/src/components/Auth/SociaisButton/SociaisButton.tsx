import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { tv } from "tailwind-variants";

interface SociaisButtonProps {
    href: string;
    imgSource: StaticImageData;
    children: ReactNode;
    variant: "github" | "google" | "facebook";
    text: "github" | "google" | "facebook";
}

const link = tv({
    base: "flex justify-center items-center gap-4 w-[294px] h-[54px] rounded-[10px] transition-colors duration-200 md:w-[394px] ",
    variants: {
        color: {
            github: "bg-sociais-github hover:brightness-75",
            google: "bg-sociais-google hover:brightness-75",
            facebook: "bg-sociais-facebook hover:brightness-75",
        },
    },
    defaultVariants: {
        color: "github",
    },
});

const span = tv({
    base: "text-xl font-bold",
    variants: {
        color: {
            github: "text-white",
            google: "text-[#0000008A]",
            facebook: "text-white",
        },
    },
});

export function SociaisButton({
    href,
    imgSource,
    children,
    variant,
    text,
}: SociaisButtonProps) {
    return (
        <a
            className={link({ color: variant })}
            href={href}
        >
            <Image src={imgSource} alt="" width={24} height={24} />
            <span className={span({ color: text })}>{children}</span>
        </a>
    );
}
