import Image from "next/image";
import ThemeToggle from "../ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 max-w-[1920px] mx-auto">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <Image src={"/logo.svg"} width={100} height={100} alt="logo"></Image>
      </div>
      <div className="p-1 w-fit rounded-full border">
        <a
          href="https://github.com/DalpatRathore/next-coding-quotes"
          target="_blank"
        >
          <Avatar className="w-10 h-10 md:w-12 md:h-12 shadow-sm shadow-black">
            <AvatarImage src="/dalpatrathore.png"></AvatarImage>
            <AvatarFallback>D R</AvatarFallback>
          </Avatar>
        </a>
      </div>
      <ThemeToggle></ThemeToggle>
    </header>
  );
};
export default Header;
