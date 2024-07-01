import { RiCheckboxCircleFill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

export const QuestionCard = () => {
  const description =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, nihil aut suscipit illo libero illum impedit eum qui sunt unde! Atque, ad nam. Facilis consectetur odio nemo earum ex. Maxime.";

  return (
    <div className="w-full flex justify-center">
      <div className="bg-[#CBD5E1] hover:bg-[#ffde48d7] h-80 w-80 px-6 py-6 rounded-xl shadow-xl flex flex-col items-center hover:cursor-pointer hover:-translate-y-2 transition duration-300 ease-in-out">
        <div className="w-full flex justify-between">
          <h1 className="text-left font-bold text-2xl tracking-wide w-full">
            Title
          </h1>
          <button>
            <CiMenuKebab size={32} className="text-slate-900" />
          </button>
        </div>
        <p className="text-left text-[15px] mt-2 text-gray-800 italic tracking-wide">
          {description.slice(0, 160)}...
        </p>
        <div className="flex items-end mt-6 font-bold text-lg text-green-700 w-full">
          <RiCheckboxCircleFill size={32} className="mr-2" />
          <span className=" text-2xl font-bold mx-1">23</span>
          responses
        </div>
        <div className="flex-grow"></div>
        <div className="mt-4 w-full flex justify-end">
          <button className="flex gap-2 items-center border-2 border-slate-700 px-4 py-1.5 rounded-xl hover:bg-slate-700 hover:text-white">
            <FaCopy />
            Code
          </button>
        </div>
      </div>
    </div>
  );
};