import Image from "next/image";
import Logo from "../assets/logo.svg";
import LogoMobile from "../assets/logo-mobile.svg";

export function Header() {
  return (
    <div className="mt-20 flex items-center justify-center">
      <Image src={Logo} alt="Dev.Finance" priority/>
    </div>
  );
}