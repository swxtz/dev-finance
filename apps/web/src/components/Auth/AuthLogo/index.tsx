import Image from "next/image";

import logo from "@/assets/logo/logo-1x.svg";

export function AuthLogo() {
    return (
        <Image src={logo} alt="logo" />
    );
}