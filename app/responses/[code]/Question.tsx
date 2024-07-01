export const Question = () => {
  return (
    <div className="bg-[#180721] p-4 rounded-xl shadow-xl">
      <h2 className="text-white text-lg mt-2 font-semibold text-center">
        Question: How do you handle pressure?
      </h2>
      <div className="flex flex-wrap mt-6 gap-3 mb-2 justify-center">
        <div className="text-white bg-response-gradient px-4 py-2 rounded-xl">
          Option 1 Option 1
        </div>
        <div className="text-white bg-response-gradient px-4 py-2 rounded-xl">
          Option 1 
        </div>
        <div className="text-white bg-response-gradient px-4 py-2 rounded-xl">
          Option 1 Option 1
        </div>
        <div className="text-white bg-[#3c1053] px-4 py-2 rounded-xl">
          Option 1 Option 1
        </div>
      </div>
    </div>
  );
};
