import React from "react";
import Cancelled from "./Cancelled";

function Address() {
  return (
    <div className="h-[30%] w-[68%] flex items-start flex-col justify-evenly pl-2 box-border border-2 border-[#1b0823] rounded-3xl bg-gradient-to-tr to-[#16011f] from-[#000000] mt-2">
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Target address :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          0x...wrddfuhh
        </span>
      </span>

      <span className="text-white   text-[15px] font-medium">
        {" "}
        Task executor:
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          0x.uyhwieowiuiwjf
        </span>
      </span>
    </div>
  );
}

export default Address;
