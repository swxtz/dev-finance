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
    base: "flex justify-center items-center gap-4 w-[294px] h-[54px] rounded-[10px] transition-colors duration-200",
    variants: {
        color: {
            github: "bg-sociais-github hover:bg-sociais-githubHover",
            google: "bg-sociais-google hover:bg-sociais-googleHover",
            facebook: "bg-sociais-facebook hover:bg-sociais-facebookHover",
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
