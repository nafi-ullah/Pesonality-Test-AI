import Navber from "@/components/Navbar";

const ResponsesPage = ({ params }: { params: { code: string } }) => {
  return (
    <main className="bg-[#F1F2F4] h-screen w-screen overflow-auto flex flex-col main-scrollbar-hide">
      <Navber />
      <div className="grid grid-cols-8 gap-4 my-6 mx-4 sm:mx-6 md:mx-8 lg:mx-12 flex-grow">
        <div className="col-span-2 p-6 dashboard-bg rounded-xl shadow-xl overflow-scroll main-scrollbar-hide">
          <h1>Title</h1>
        </div>
        <div className="col-span-6 p-6 dashboard-bg rounded-xl shadow-xl overflow-scroll main-scrollbar-hide"></div>
      </div>
    </main>
  );
};
export default ResponsesPage;
