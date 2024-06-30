"use client";

const LanguageSwitcher = () => {

  return (
    <div className=" bg-[#444c57] h-12 ml-3 mr-1 flex rounded-xl">
      <button className="mx-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png"
          height={56}
          width={40}
          alt="flagofgermany"
        />
      </button>
      <button className="mr-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
          height={56}
          width={40}
          alt="flag of england"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
