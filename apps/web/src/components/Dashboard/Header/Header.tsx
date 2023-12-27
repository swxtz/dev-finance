import Image from "next/image";

import Logo from "../../../assets/logo.svg";
import { LogoutButton } from "@/components/LogoutButton";

export function Header() {
    return (
        <div className="flex justify-between items-center container mx-auto ">
            <span>Menu</span>
            <Image src={Logo} alt="Dev.Finance" priority quality={100} />
            <LogoutButton />
        </div>
    );
}