import Image from "next/image";

import Logo from "../../../assets/logo.svg";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Avatar } from "../Avatar";

export function Header() {
    return (
        <div className="flex justify-around items-center container mx-auto ">
            <Menu className="size-6 text-stone-100" />
            <Link href="/dashboard">
                <div className="flex flex-row gap-2">
                    <Image
                        src={Logo}
                        alt="Dev.Finance"
                        priority
                        quality={100}
                    />
                    <span className="uppercase py-1 px-2 text-xs text-stone-300 bg-zinc-500 font-bold rounded-xl">
                        beta
                    </span>
                </div>
            </Link>
            <Avatar />
        </div>
    );
}
