import Navber from "@/components/Navbar";
import { QuestionCard } from "./QuestionCard";
import Link from "next/link";

const Dashboard = () => {
  return (
    <main className="bg-[#141416] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      <div className="my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-6 dashboard-bg rounded-xl shadow-xl flex-grow flex flex-col overflow-scroll main-scrollbar-hide">
        <div className="flex justify-between items-center px-6 mt-2">
          <h1 className="text-left text-white text-xl font-bold tracking-wide">
            Your Questioniers
          </h1>
          
          <Link
            href={"/createQuestionier"}
            className="text-slate-900 font-bold text-lg bg-slate-300 px-6 py-2.5 rounded-xl shadow-lg hover:bg-slate-900 hover:text-slate-200"
          >
            CREATE
          </Link> 
        </div>
        <div className="flex-grow mt-6 px-4 grid grid-flow-row gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
