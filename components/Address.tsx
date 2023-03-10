import { ethers } from "ethers";
import React from "react";
import Cancelled from "./Cancelled";

type props = {
  target:string;
  balance:string;
  gasLimit:string
}

function Address({ target,balance,gasLimit }:props) {
  const executor = process.env.NEXT_PUBLIC_EXECUTOR;
  return (
    <div className="h-[35vh] lg:h-[30%]  w-[95%] lg:w-[75%] flex items-start flex-col justify-evenly pl-5 box-border border-2 border-[#1b0823] rounded-3xl bg-gradient-to-tr to-[#16011f] from-[#000000] mt-2">
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Target address :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
        0x..{target?.slice(target?.length - 15,target?.length)}
        </span>
      </span>
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Balance :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
        {balance?ethers.utils.formatEther(balance).toString().slice(0,10) :"0.000"} ETH
        </span>
      </span>
      <span className="text-white   text-[15px] font-medium">
        {" "}
        GasLimit :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
         {gasLimit}
        </span>
      </span>
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Task executor:
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          0x..{executor?.slice(executor?.length - 15,executor?.length)}
        </span>
      </span>
    </div>
  );
}

export default Address;
