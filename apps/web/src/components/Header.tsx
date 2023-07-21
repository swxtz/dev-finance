import Image from "next/image";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="pt-20 md:pt-16 flex items-center justify-center">
      <Image src={Logo} alt="Dev.Finance" priority/>
    </div>
  );
}