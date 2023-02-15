import React from "react";
import { TickCircle } from "iconsax-react";

function Active() {
  return (
    <div className="h-[20px] w-[70px] flex justify-evenly items-center -ml-2 mt-7 ">
      <TickCircle size="16" color="#07C003" />
      <h1 className="text-xs text-[#07C003] ">Active</h1>
    </div>
  );
}

export default Active;
