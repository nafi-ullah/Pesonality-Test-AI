import Navber from "@/components/Navbar";
import { ResponseTitleCard } from "./ResponseTitleCard";

const ResponsesPage = ({ params }: { params: { code: string } }) => {
  return (
    <main className="bg-[#F1F2F4] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      <div className="grid grid-cols-8 gap-4 my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-grow">
        <div className="col-span-2 p-6 dashboard-bg rounded-xl shadow-xl overflow-scroll main-scrollbar-hide flex flex-col items-center">
          <h1 className="text-white text-2xl font-bold tracking-wider my-2">
            Responses
          </h1>
          <ResponseTitleCard isSelected={false}/>
          <ResponseTitleCard isSelected={false}/>
          <ResponseTitleCard isSelected={true}/>
        </div>
        <div className="col-span-6 p-6 dashboard-bg rounded-xl shadow-xl overflow-scroll main-scrollbar-hide"></div>
      </div>
    </main>
  );
};
export default ResponsesPage;
