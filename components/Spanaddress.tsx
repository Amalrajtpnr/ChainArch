import React from "react";

function Spanaddress() {
  return (
    <div className="h-[25%] w-[90%] flex items-start flex-col justify-evenly my-3">
      <span className="text-white   text-[15px] font-medium">
        {" "}
        Created by :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          0x...wrddfuhh
        </span>
      </span>

      <span className="text-white   text-[15px] font-medium">
        {" "}
        Executions :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          15
        </span>
      </span>

      <span className="text-white   text-[15px] font-medium">
        {" "}
        Total cost for execution :
        <span className=" ml-2 text-[#bf9494d6] font-light text-[15px]">
          5 ETH
        </span>
      </span>
    </div>
  );
}

export default Spanaddress;
