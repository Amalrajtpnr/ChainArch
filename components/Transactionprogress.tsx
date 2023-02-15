import React from "react";
import { CloseCircle } from "iconsax-react";
type props = { onClick: () => void };

function Transactionprogress({ onClick }: props) {
  return (
    <div className=" h-[100vh] w-[100vw] flex items-center justify-center  backdrop-blur-3xl bg-[#000000db] fixed top-0 z-[1000]">
      <div className="h-[150px] w-[600px] bg-[#0E0E0E] border-[1px] border-[#ffffff41] rounded-xl flex flex-col items-center justify-evenly relative">
        <div
          onClick={onClick}
          className="h-[24px] w-[24px] rounded-full flex items-center justify-center absolute top-3 left-[92%]"
        >
          <CloseCircle size="22" color="#ffffff" />
        </div>
        <h1 className="text-xl font-inter text-white font-semibold">
          Transaction Processing
        </h1>

        <div className="w-[85%] bg-[#242424] h-1 mb-6 rounded-full">
          <div className="bg-gradient-to-r from-[#0c0c6c] to-[#be72ea] h-1 w-[50%] rounded-full"></div>
        </div>
        <div className="w-[90%] h-[10px] flex items-center justify-between absolute top-28">
          <h1 className="text-xs text-white">Initiated</h1>
          <h1 className="text-xs text-white">Proccessing</h1>
          <h1 className="text-xs text-white">Completed</h1>
        </div>
      </div>
    </div>
  );
}

export default Transactionprogress;
