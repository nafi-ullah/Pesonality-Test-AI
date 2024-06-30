import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";

const Navber = () => {
    return (
        <div className="flex justify-between  py-5 bg-white rounded-xl shadow-lg mt-4 mx-8">
         
            <Image
              src="/logo.png"
              width={100} height={20} alt="logo" className="rounded-xl ml-2"
              priority
            />
            <div className="space-x-14 flex items-center text-gray-700">
                <div>Group</div>
                <div>Code</div>
                <div>Specialized Tests</div>
                <div>Teams</div>
                <div>Resources</div>
            </div>
            <div className="flex items-center">
            <LanguageSwitcher />
            <div className="rounded-full bg-slate-500 w-10 h-10"></div>
            </div>
           
       </div>
    );
};

export default Navber;