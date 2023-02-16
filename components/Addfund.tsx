import React, { useState } from "react";
import { CloseCircle } from "iconsax-react";
type props = { 
  onClick: () => void;
   onSubmit: () => void;
   onChange:(e:any)=>void;
   };

function Addfund({ onClick, onSubmit,onChange }: props) {
  return (
    <div className=" h-[100vh] w-[100vw] flex items-center justify-center  backdrop-blur-3xl bg-[#000000db] fixed top-0 z-[1000]">
      <div className="h-[220px] w-[450px] bg-[#0E0E0E] border-[1px] border-[#ffffff41] rounded-xl flex flex-col items-center justify-evenly relative">
        <div
          onClick={onClick}
          className="h-[24px] w-[24px] rounded-full flex items-center justify-center absolute top-3 left-[92%]"
        >
          <CloseCircle size="22" color="#ffffff" />
        </div>
        <h1 className="text-xl font-inter text-white font-semibold">
          Add Fund
        </h1>
        <input
          onChange={onChange}
          className="h-[20%] w-[70%] bg-[#242424] rounded-xl  text-white text-sm flex items-center pl-24 "
          type="text"
          placeholder="Enter Amount"
        />
        <button
          onClick={onSubmit}
          className="h-[17%] w-[32%] bg-gradient-to-r from-[#2C004F] to-[#c765ed] text-white font-medium text-[16px] rounded-xl"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Addfund;
