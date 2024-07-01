"use client";
import Navber from "@/components/Navbar";
import { ResponseTitleCard } from "./ResponseTitleCard";
import { useState } from "react";
import { Question } from "./Question";

const ResponsesPage = ({ params }: { params: { code: string } }) => {
  const [selectedResponse, setSelectedResponse] = useState<number>(0);

  return (
    <main className="bg-[#11072477] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      <div className="grid grid-cols-8 gap-4 my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-grow overflow-auto main-scrollbar-hide">
        <div className="col-span-2 p-6 dashboard-bg rounded-xl shadow-xl flex flex-col items-center overflow-auto main-scrollbar-hide">
          <h1 className="text-white text-2xl font-semibold tracking-wider my-2">
            Responses
          </h1>
          {Array.from({ length: 10 }).map((_, index) => (
            <ResponseTitleCard
              isSelected={index === selectedResponse}
              onClick={() => setSelectedResponse(index)}
            />
          ))}
        </div>
        <div className="col-span-6 p-6 dashboard-bg rounded-xl shadow-xl overflow-scroll main-scrollbar-hide">
          <div className="flex gap-4 mb-6 mt-2">
            <div className="bg-[#180721] px-6 py-4 rounded-xl shadow-xl text-yellow-300 text-left tracking-wider font-semibold text-md max-w-[300px] w-[50%]">
              VERDICT
              <div className="bg-[#3c1053] mt-2 px-4 py-4 text-white text-2xl font-semibold rounded-xl tracking-wide text-left">
                Attentive Listener Pro Max
              </div>
            </div>
            <div className="flex-grow bg-[#180721] text-white px-6 py-4 rounded-xl shadow-xl">
              <p className="text-yellow-300 tracking-wider font-semibold text-md mb-2">DETAILS</p>
              <span className="italic tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aspernatur laboriosam culpa nulla perferendis accusantium dicta adipisci in amet, porro corporis illo sequi ipsa ex quisquam voluptates cupiditate officia architecto!</span>
            </div>
          </div>
          <h1 className="text-yellow-300 text-3xl font-bold tracking-widest my-6 mt-10 text-center">
            RESPONSES
          </h1>
          <div className="flex flex-col gap-4 mt-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <Question />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
export default ResponsesPage;
