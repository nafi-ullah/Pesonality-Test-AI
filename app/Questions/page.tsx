import Navbar from "@/components/Navbar";
import React from "react";
import Questions from "./Questions";

interface InstructionDivProps {
  heading: string;
  subhead: string;
  image: string;
}

const InstructionDiv: React.FC<InstructionDivProps> = ({ heading, subhead, image }) => {
  return (
    <div className="w-80 h-64 flex flex-col justify-center items-center rounded-lg text-white bg-black bg-opacity-20 px-10">
      <img src={image} alt="Mascaras" className="w-14 h-14 mb-2" />
      <div className="text-xl font-bold mb-3">
        {heading}
      </div>
      <div className="text-center">
        {subhead}
       
      </div>
    </div>
  );
};

const QuestionsPage: React.FC = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="w-screen">
      <div className="relative">
        <div className="w-screen h-[50vh]">
          <img
            src="bg.png"
            alt="background"
            className="w-screen h-[50vh] object-cover"
          />
        </div>

        <div
          id="text div"
          className="absolute top-0 left-0 w-screen h-[50vh] flex items-center justify-center z-10"
        >
          <div>
            <div className="text-4xl font-bold text-center text-white ">
              Free Personality Test
            </div>
            <div className="flex space-x-5 mt-10">
              <InstructionDiv
                heading="Complete the Test"
                subhead="Be yourself and answer honestly to find out your personality type."
                image="Mascaras.png"
              />
               <InstructionDiv
                heading="View Details Results"
                subhead="Learn how your personality type influences many areas of your life."
                image="users.png"
              />
               <InstructionDiv
                heading="Unlock Your Potential"
                subhead="Grow into the person you want to be with your optional Premium Suite."
                image="characters.png"
              />
            </div>
           
          </div>
        </div>
      </div>
      </div>
      <Questions />
      
     
      
    </div>
  );
};

export default QuestionsPage;
