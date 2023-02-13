import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      {/* <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-90  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#B200FF]   overflow-hidden -left-16 "></div> */}
      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-center items-center">
        <div className="h-[75%] w-[40%]  flex items-center justify-center flex-col  mr-36 mt-10">
          <h1 className="text-3xl tracking-wider text-white font-inter font-bold mr-[70px] mb-3">
            Create Task
          </h1>
          <Image width={260} height={260} src={"/Frame.svg"} alt="" />
          <h1 className="text-white w-[80%] text-start tracking-wider ml-40 my-5">
            Streamlining Daily Tasks with Automation for Increased Efficiency
            and Productivity
          </h1>
        </div>

        <div className="h-[85%] w-[37%]  rounded-xl  flex justify-evenly items-start flex-col mt-12">
          <div className="h-[75px] w-[85%] flex items-start justify-between flex-col relative  ">
            <h1 className="text-white text-sm font-bold my-1">
              Contact Address
            </h1>
            <input
              className=" h-[100%] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>

          <div className="h-[150px] w-[85%] flex items-start justify-between flex-col relative">
            <h1 className="text-white text-sm font-bold my-1">ABI</h1>
            <textarea
              className="h-[100%] w-[100%] bg-[#0E0E0E]  flex  text-sm text-white rounded-xl  pl-3 pt-3 box-border"
              name="ABI"
              id=""
              cols={30}
              rows={10}
              placeholder="Abc"
            ></textarea>
          </div>

          <div className="h-[10%] w-[85%] flex items-center justify-between">
            <div className="h-[75px] w-[46%] flex items-start justify-between flex-col relative  ">
              <h1 className="text-white text-sm font-bold my-1">Task Name</h1>
              <input
                className=" h-[100%] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl"
                type="text"
                placeholder="ba"
              />
            </div>

            <div className="h-[75px] w-[46%] flex items-start justify-between flex-col relative  ">
              <h1 className="text-white text-sm font-bold my-1">
                Initial Amount
              </h1>
              <input
                className=" h-[100%] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl"
                type="text"
                placeholder="ba"
              />
            </div>
          </div>

          <div className="h-[75px] w-[85%] flex items-start justify-between flex-col relative  ">
            <h1 className="text-white text-sm font-bold my-1">Gas Limit</h1>
            <input
              className=" h-[100%] w-[100%] pl-3 box-border bg-[#0E0E0E] flex text-sm text-white rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>

          <div className="h-[75px] w-[85%] flex items-start justify-between flex-col relative  ">
            <h1 className="text-white text-sm font-bold my-1">Interval</h1>
            <input
              className=" h-[100%] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>
          <button className=" h-[7%] w-[25%]  bg-gradient-to-r from-[#592D7C] to-[#260441] border-2 border-[#bb9bd6] rounded-[15px] ml-72 text-white text-sm font-semibold flex justify-center items-center">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default index;
