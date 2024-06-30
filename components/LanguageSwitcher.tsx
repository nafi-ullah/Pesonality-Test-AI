"use client"

// import { useLang } from '../context/lang';

const LanguageSwitcher = () => {
//   const { setLanguage } = useLang();

  return (
        <div className=" bg-[#F3F3F3] h-14 mx-3 px-3 flex rounded-xl">
          <button className="mx-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
              height={56} width={40}
              alt="flagofgermany"
            />
          </button>
          <button >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              height={56} width={40}
              alt="flag of england"
            />
          </button>
      </div>
  );
};

export default LanguageSwitcher;
