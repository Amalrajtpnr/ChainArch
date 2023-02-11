import React from "react";
import Button from "../Components/Button";
import Image from "next/image";
import Header from "../Components/Header";

function index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28 opacity-100  overflow-hidden left-[100%]  shadow-[0px_0px_890px_250px_rgba(0,0,0,0.3)] shadow-[#26E5FF]  "></div>
      <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-90  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#26E5FF]   overflow-hidden -left-16 "></div>
      <div className="  h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-between items-center">
        <Header />

        <div className="h-[100%] w-[55%]  flex flex-col items-start justify-center pl-5 box-border ml-10 ">
          <div className="h-[30%] w-[30%] flex items-end justify-start my-6 ml-10 animate-pulse  ">
            <Image width={180} height={180} src={"/Group 2.svg"} alt="" />
          </div>

          <h1 className=" text-[70px] leading-[65px]  tracking-wider w-[100%] font-ice font-medium text-white my-3">
            {" "}
            Efficiency Redefined Through Automation
          </h1>
          <h1 className="text-slg w-[45%]  h-[10%]  font-medium font-inter text-white tracking-wider my-3 ">
            Revolutionizing the way we interact with the web through Web3
            automation
          </h1>

          <div className="h-[9%] w-[40%] flex items-center justify-around my-3">
            <button className="h-[65%] w-[40%] border-2 border-white rounded-lg bg-amber-400"></button>
            <button className="h-[65%] w-[40%] border-2 border-white rounded-lg bg-amber-400"></button>
          </div>
        </div>

        <div className="h-[100%] w-[35%] ">
          <div className="h-[70%] w-[85%] flex items-start justify-center flex-col  pt-10 box-border border-red-200">
            <div className="h-[30%] w-[70%] flex ml-24 animate-pulse  ">
              <Image width={190} height={190} src={"/Group 3.svg"} alt="" />
            </div>
            <div className="h-[60%] w-[80%] flex animate-pulse">
              <Image width={250} height={250} src={"/Group 4.svg"} alt="" />
            </div>
          </div>

          <div className="h-[30%] w-[70%] flex   ml-44 ">
            <Image width={160} height={160} src={"/Group 5.svg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
