import Image from "next/image";

import Logo from "../../../assets/logo.svg";

export function Header() {
    return (
        <div className="">
            <Image src={Logo} alt="Dev.Finance" priority className="mx-auto" quality={100} /> 
        </div>
    );
}