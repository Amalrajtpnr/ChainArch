import { ethers } from "ethers";
import React from "react";

type props = {
  creator:string;
  executions:number | string;
  cost: any,
  costForNextExec?:string,
  cancelled:boolean
}

function Spanaddress({ cost,creator,executions,costForNextExec,cancelled }:props) {
  return (
    <div className="h-[40%] lg:h-[25%] w-[90%]  flex items-start flex-col justify-evenly my-3">
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Created by :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          0x...{creator?.slice(creator?.length- 20,creator?.length)}
        </span>
      </span>
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Executions :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          {executions!}
        </span>
      </span>

      <span className="text-white   text-[15px] font-medium">
        {" "}
        Total cost for execution :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          {cost? ethers.utils.formatEther(cost!).toString()?.slice(0,10):"0.000"} ETH
        </span>
      </span>
      {
        (costForNextExec&& !cancelled ) && (
          <span className="text-white   text-[15px] font-medium">
        {" "}
        Estimated cost for next execution :
        <span className=" ml-2 text-[#ec1111d6] font-light text-[19px]">
          {costForNextExec? ethers.utils.formatEther(costForNextExec!).toString()?.slice(0,12):"0.000"} ETH
        </span>
      </span>
        )
      }
    </div>
  );
}

export default Spanaddress;
