import { MdDelete } from "react-icons/md";

type PropType = { isSelected: boolean, onClick: () => void};

export const ResponseTitleCard = (props: PropType) => {
  return (
    <button
      onClick={props.onClick}
      className="mt-4 bg-response-gradient hover:bg-selected-response-gradient hover:cursor-pointer hover:scale-105 transition duration-300 ease-in-out py-2 rounded-2xl shadow-xl flex px-6 items-center gap-2 w-full"
      style={
        props.isSelected
          ? {
              backgroundImage: "linear-gradient(to right, #41295a,  #2F0743)",
              scale: "1.03",
            }
          : {}
      }
    >
      <div className="bg-[#180721] text-[#ffff00] h-8 w-8 rounded-full flex justify-center items-center font-bold text-sm">
        1
      </div>
      <div className="flex-grow px-4 my-2">
        <h2 className="text-lg font-semibold w-full mb-1 text-left text-white">
          Mehraj
        </h2>
      </div>
      <button
        className="hover:scale-125 h-8 w-8 rounded-full shadow-2xl shadow-white flex justify-center items-center font-bold text-xl"
        style={
          props.isSelected
            ? {
                background: "#fff700",
                color: "#410d19",
                scale: "1.05",
              }
            : {
                background: "#410d19",
                color: "#fd3939",
              }
        }
      >
        <MdDelete size={props.isSelected ? 20 : 16} />
      </button>
    </button>
  );
};
