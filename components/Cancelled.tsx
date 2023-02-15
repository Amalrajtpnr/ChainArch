import React from "react";
import { CloseCircle } from "iconsax-react";

function Cancelled() {
  return (
    <div className="h-[20px] w-[90px] flex justify-evenly items-center -ml-2 mt-7 ">
      <CloseCircle size="16" color="#DD4747" />
      <h1 className="text-xs text-[#DD4747] ">Cancelled</h1>
    </div>
  );
}

export default Cancelled;
