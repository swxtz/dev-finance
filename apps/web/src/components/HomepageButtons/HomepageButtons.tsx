import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";


interface HomepageButtonsProps {
    title: string;
    icon?: ReactNode;
    href: string;
    className?: string;
}

export function HomepageButtons({ title, icon, href, className }: HomepageButtonsProps) {
  return (
    <Link href={href} className={twMerge("w-full h-12 bg-teal-800 flex flex-row items-center justify-center rounded-md text-base font-medium text-white", className)} >
      {title}
      {icon}
    </Link>
  );
}
