import React from "react";

function index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28 opacity-30  overflow-hidden left-[100%]  shadow-[0px_0px_990px_350px_rgba(0,0,0,0.3)] shadow-[#26E5FF]  "></div>
      <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-30  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#26E5FF]   overflow-hidden -left-16 "></div>
      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-between items-center">
        <div className="h-[87%] w-[37%] border-2 border-yellow-500 rounded-xl bg-[#022628] flex justify-evenly items-center flex-col">
          <h1 className=" font-inter  drop-shadow-text font-bold text-2xl text-[#022628] outline-4 outline-zinc-100 ">
            NEW TASK
          </h1>
          <div className="h-[10%] w-[90%] flex items-center justify-between">
            <input
              className="h-[100%] w-[46%] pl-3 box-border flex bg-[#022628] border-2 border-blue-300 rounded-xl"
              type="text"
              placeholder="ab"
            />
            <input
              className="h-[100%] w-[46%] pl-3 box-border flex bg-[#022628]  border-2 border-blue-300 rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>
          <div className="h-[50px] w-[90%] flex items-center justify-between flex-col relative  ">
            <div className="h-[26px] w-auto text-sm px-1  bg-[#022628] text-white z-100 mr-60 absolute -top-[12px] text flex items-center justify-center ">
              test-123
            </div>
            <input
              className=" h-[100%] w-[100%] pl-3 box-border bg-[#022628] flex border-2 border-blue-300 rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>

          <input
            className=" h-[10%] w-[90%] pl-3 box-border bg-[#022628] flex border-2 border-blue-300 rounded-xl"
            type="text"
            placeholder="ba"
          />
          <input
            className=" h-[10%] w-[90%] pl-3 box-border bg-[#022628] flex border-2 border-blue-300 rounded-xl"
            type="text"
            placeholder="ba"
          />
          <input
            className=" h-[10%] w-[90%] pl-3 box-border bg-[#022628] flex border-2 border-blue-300 rounded-xl"
            type="text"
            placeholder="ba"
          />
          <button className=" h-[8%] w-[25%] pl-3 box-border bg-[#26E5FF] flex border-2 border-blue-300 rounded-xl ml-72"></button>
        </div>
      </div>
    </div>
  );
}

export default index;
