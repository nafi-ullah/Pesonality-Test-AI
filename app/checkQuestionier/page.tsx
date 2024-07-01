import Navber from "@/components/Navbar";
import Link from "next/link";
import { Question } from "./Question";
import { SiTestcafe } from "react-icons/si";

const page = () => {
  return (
    <main className="bg-[#141416] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      <div className="my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-6 dashboard-bg rounded-xl shadow-xl flex-grow flex flex-col items-center overflow-scroll main-scrollbar-hide">
        <h1 className="text-yellow-300 text-3xl font-bold tracking-widest my-6 mt-4 text-center">
          QUESTIONIER
        </h1>
        <div className="flex flex-col gap-4 mt-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <Question key={index} />
          ))}
        </div>
        <button className="mt-8 px-4 py-3 hover:bg-submit-gradient text-[#180721] font-bold rounded-lg text-xl max-w-[800px] w-full bg-gradient-to-r from-blue-200 to-cyan-200">
          <div className="flex items-center justify-center">
            CONFIRM QUESTIONIER
            <SiTestcafe className="ml-2" />
          </div>
        </button>
      </div>
    </main>
  );
};
export default page;
