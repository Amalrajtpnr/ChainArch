import React from "react";
import { CloseCircle } from "iconsax-react";
import { Status } from "../constants/Types";
type props = { 
  onBackButtonPress: () => void;
  status:Status
 };

function Transactionprogress({ onBackButtonPress,status }: props) {

  const showStatus = () => {
    switch (status) {
      case 'Failed':
        return 'w-[55%]';
      case 'Processing':
        return 'w-[50%]';
      case 'Initiated':
        return 'w-[5%]';
      case 'Completed':
        return 'w-full';
      case 'Cancelled':
        return 'w-[5%]';
      default:
        return 'w-[2%]';
    }
  };

  const showPointer = () => {
    switch (status) {
      case 'Failed':
        return 'left-[55%]';
      case 'Processing':
        return 'left-[50%]';
      case 'Initiated':
        return 'left-[5%]';
      case 'Completed':
        return 'left-full';
      case 'Cancelled':
        return 'left-[5%]';
      default:
        return 'left-[2%]';
    }
  };

  const showProgressColor = () => {
    switch(status){
      case "Failed":
        return "bg-red-600"
      case "Cancelled":
        return "bg-red-600"  
      default:
        return "bg-gradient-to-r from-[#0c0c6c] to-[#be72ea]"  
    }

  }

  return (
    <div className=" h-[100vh] w-[100vw] flex items-center justify-center  backdrop-blur-[10px] bg-transparent fixed top-0 z-[10000]">
      <div className="h-[150px] w-[600px] bg-[#0E0E0E] border-[1px] border-[#ffffff41] rounded-xl flex flex-col items-center justify-evenly relative">
       {
        (status === "Completed"||
        status === "Failed"||
        status === "Cancelled") && (
          <div
          onClick={onBackButtonPress}
          className="h-[24px] w-[24px] rounded-full flex items-center justify-center absolute top-3 left-[92%]"
        >
          <CloseCircle size="22" color="#ffffff" />
        </div>
        )
       }
        <h1 className="text-xl font-inter text-white font-semibold">
          Transaction {status}
        </h1>

        <div className="w-[85%] relative bg-[#242424] h-1 mb-6 rounded-full">
        <span className={`absolute ${showPointer()}  top-0 bottom-0 m-auto w-[15px] h-[15px] rounded-full bg-white duration-1000 `}></span>
          <div className={`${showStatus()} ${showProgressColor()}  h-1  rounded-full duration-1000 `}>
          </div>
        </div>
        <div className="w-[90%] h-[10px] flex items-center justify-between absolute top-28">
          <h1 className="text-xs text-white">{status === "Cancelled"?"Cancelled": "Initiated"}</h1>
          <h1 className="text-xs text-white">{status === "Failed"?"Failed": "Proccessing"}</h1>
          <h1 className="text-xs text-white">Completed</h1>
        </div>
      </div>
    </div>
  );
}

export default Transactionprogress;
