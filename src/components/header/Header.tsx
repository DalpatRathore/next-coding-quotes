import Image from "next/image";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 max-w-[1920px] mx-auto">
      <div className="logo">
        <Image src={"/logo.svg"} width={100} height={100} alt="logo"></Image>
      </div>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
