import Image from "next/image";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="mt-20 md:mt-16 flex items-center justify-center">
      <Image src={Logo} alt="Dev.Finance" priority/>
    </div>
  );
}