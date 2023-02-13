import React from "react";

function NavBar() {
  return (
    <div className="min-h-[125px]  w-[100vw] lg:min-h-[125px]  lg:w-[100vw]  sm:min-h-[30px]   flex flex-row justify-end  items-center fixed -top-1 z-100 bg-transparent ">
      <div className="w-[67%] h-[120px] sm:min-h-[30px]  flex flex-row justify-around  items-center">
        <h1 className="text-white text-[18px] md:text-[15px] md:font-semibold font-bold font-inter">
          Dashboard
        </h1>
        <h1 className="text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Docs{" "}
        </h1>
        <h1 className="text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Contact Us
        </h1>
        <button className="text-white text-[18px] md:text-[15px] md:font-semibold md:[30%] w-[20%] h-[50px] rounded-[18px] border  border-[#8C3BBE]  font-bold font-inter">
          0x..edfdyshggh
        </button>
        <button className="text-white text-[18px] md:text-[15px] md:font-semibold   w-[20%] h-[50px] bg-[#8C3BBE] rounded-[18px] border border-[#8C3BBE] mr-[20px]  font-bold font-inter">
          Disconnect
        </button>
      </div>
    </div>
  );
}

export default NavBar;
