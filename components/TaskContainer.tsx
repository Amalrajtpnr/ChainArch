import React from "react";
import { TickCircle } from "iconsax-react";
import { ImCancelCircle } from "react-icons/im";
import { ethers } from "ethers";

type TaskContainerProps = {
  name: string;
  active: boolean;
  owner:string;
  balance:string
  onClick:() => void;
};

function TaskContainer({ name, active,balance,owner,onClick }: TaskContainerProps) {
  const textColor = active ? "green" : "red";

  const style = {
    color: textColor,
  };

  return (
    <div onClick={onClick} className="cursor-pointer w-[93%] min-h-[80px] lg:min-h-[110px] rounded-[15px] lg:rounded-[20px] flex flex-row items-center justify-between bg-gradient-to-r from-[#2c2828be] to-[#0b0101] px-5 lg:px-0">
      <div className="w-[100%] h-[50%] flex flex-row items-center justify-end">
        <div className="w-[15%] h-[50%] flex flex-col justify-around items-start ">
          <h1 className="text-[13px] lg:text-[16px] text-white font-inter font-semibold">
            {name}
          </h1>
          <h1 className="text-[10px] lg:text-[12px] text-white font-inter font-extralight">
            Owner: 0x..{owner?.slice(owner.length-13,owner.length)}
          </h1>
        </div>
        <div className="w-[75%] h-[50%] flex flex-row justify-start items-center ml-[40px] ">
          {active ? (
            <TickCircle size={15} color={active === true ? "green" : "red"} />
          ) : (
            <ImCancelCircle size={15} color={active ? "green" : "red"} />
          )}
          <h1
            style={style}
            className="text-[12px] text-green-500 font-inter font-extralight ml-1"
          >
            {active?"Active":"Cancelled"}
          </h1>
        </div>
      </div>
      <div className="w-[15%] h-[50%] flex flex-col justify-around items-start ">
        <h1 className="text-[13px] lg:text-[16px] text-white font-inter font-semibold">
          Balance
        </h1>
        <h1 className="text-[10px] lg:text-[12px] text-white font-inter font-extralight">
          {balance?ethers.utils.formatEther(balance).toString().slice(0,10):"0.000"} ETH
        </h1>
      </div>
    </div>
  );
}

export default TaskContainer;



export function LoadingTask() {
  return (
    <div className="w-[93%] min-h-[80px] lg:min-h-[110px]  animate-pulse opacity-[0.2] rounded-[15px] lg:rounded-[20px] flex flex-row items-center justify-between bg-gradient-to-tr from-[#3d3d3def] via-[#797979ef] to-[#3d3d3def]">
   
  </div>
  )
}