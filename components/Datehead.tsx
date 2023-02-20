import React from "react";

function Datehead() {
  return (
    <div className="h-[10%] min-h-[40px] w-[95%] bg-[#131313] rounded-lg flex items-center justify-between px-5 mt-5 lg:mt-2 box-border">
      <h1 className="text-white font-medium ml-1 text-[14px]"> Date</h1>
      <h1 className="text-white font-medium text-[14px] "> Hash</h1>
      <h1 className="text-white font-medium text-[14px] "> Amount/Fee</h1>
    </div>
  );
}

export default Datehead;
