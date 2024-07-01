import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { NavRight } from "./NavRight";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navber = () => {
  return (
    <div className="flex justify-between py-2 px-8 bg-[#113146] rounded-xl shadow-xl mt-4 mx-4 sm:mx-6 md:mx-8 lg:mx-12">
      <button className="md:hidden text-slate-200">
        <IoMenu size={42} />
      </button>
      <Link href={"/dashboard"}>
        <Image
          src="/light_logo.png"
          width={170}
          height={20}
          alt="logo"
          className="rounded-xl ml-2 mr-[-30px] md:mr-0"
          priority
        />
      </Link>
      <div className="hidden md:flex items-center gap-2">
        <Link
          href={"/enterCode"}
          className="text-white ai-button px-4 py-2 rounded-xl shadow-xl border-[2px] border-slate-500"
        >
          Enter Code
        </Link>
        <LanguageSwitcher />
        <NavRight />
      </div>
    </div>
  );
};

export default Navber;
