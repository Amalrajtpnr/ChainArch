import React from "react";

function Datehead() {
  return (
    <div className="h-[10%] w-[95%] bg-[#131313] rounded-lg flex items-center justify-between px-5 mt-1 box-border">
      <h1 className="text-white font-medium ml-1"> Date</h1>
      <h1 className="text-white font-medium"> Hash</h1>
      <h1 className="text-white font-medium"> Amount/Fee</h1>
    </div>
  );
}

export default Datehead;
