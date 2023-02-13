import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      {/* <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-90  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#26E5FF]   overflow-hidden -left-16 "></div> */}
      <div className="  h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-between items-center">
        <div className="h-[100%] w-[55%]  flex flex-col items-start justify-center pl-5 box-border ml-[100px] ">
          <div className="h-[56%] w-[66%] flex items-center justify-center  -left-7  relative top-4 ">
            <Image width={300} height={300} src={"/Group 13.svg"} alt="" />
          </div>

          <h1 className=" text-[63px] leading-[65px]  tracking-wider w-[100%] font-ice font-medium text-white -mt-[125px] my-3">
            {" "}
            Efficiency Redefined Through Automation
          </h1>
          <h1 className="text-slg w-[45%]  h-[10%]  font-medium font-inter text-white tracking-wider -mt-1 my-3 ">
            Revolutionizing the way we interact with the web through Web3
            automation
          </h1>

          <div className="h-[9%] w-[40%] flex items-center justify-around my-3 -mt-1 -ml-3">
            <button className="h-[65%] w-[40%] rounded-[10px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] flex justify-center items-center text-white text-sm font-medium">
              Go to Dash
            </button>
            <div className="h-[38px] w-[110px]  rounded-[10px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] flex justify-center items-center p-[2px] box-border ">
              <button className="h-[100%] w-[100%]  rounded-[8px]  bg-[#000000] flex justify-center items-center text-white text-sm font-medium ">
                Docs
              </button>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[35%] ">
          <div className="h-[70%] w-[85%] flex items-start justify-center flex-col  pt-10 box-border border-red-200">
            <div className="h-[30%] w-[70%] flex ml-24   ">
              <Image width={190} height={190} src={"/Group 3 (1).svg"} alt="" />
            </div>
            <div className="h-[60%] w-[80%] flex ">
              <Image width={250} height={250} src={"/Group 4 (1).svg"} alt="" />
            </div>
          </div>

          <div className="h-[30%] w-[70%] flex   ml-44 ">
            <Image width={160} height={160} src={"/Group 5 (1).svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
