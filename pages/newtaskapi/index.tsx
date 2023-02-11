import React from "react";
import Image from "next/image";

function index() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      {/* <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-90  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#B200FF]   overflow-hidden -left-16 "></div> */}
      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-between items-center">
        <div className="h-[87%] w-[37%] border-2 border-[#573f61] rounded-3xl ml-12 bg-gradient-to-tr from-[#02021c2e] via-[#08083a78]  to-[#02021c2e] flex justify-evenly items-center flex-col shadow-shade ">
          <h1 className=" font-ice  mr-60 -mt-14  font-normal text-5xl text-white tracking-wider">
            New Task
          </h1>

          <div className="h-[60px] w-[90%] flex items-center justify-between flex-col relative -mt-10 ">
            <div className="h-[26px] w-auto text-[11px]  px-1  bg-[#040417] text-white z-100 mr-80  absolute -top-[12px] text flex items-center justify-center ">
              Contact Address
            </div>
            <input
              className=" h-[100%] w-[100%] text-sm pl-3 box-border bg-[#040417] flex border-2 border-[#573f61] text-white rounded-xl"
              type="text"
              placeholder="ba"
            />
          </div>

          <div className="h-[150px] w-[90%] flex items-center justify-between flex-col relative -mt-16 ">
            <div className="h-[26px] w-auto text-[11px] px-1  bg-[#040417] text-white z-100 mr-96 absolute -top-[12px] text flex items-center justify-center ">
              ABI
            </div>
            <textarea
              className="h-[100%] w-[100%] pl-3 text-sm box-border bg-[#040417] flex border-2 border-[#573f61] text-white rounded-xl pt-6 "
              name="abi"
              id=""
              cols={30}
              rows={10}
              placeholder="abc"
            ></textarea>
          </div>
        </div>

        <div className="h-[87%] w-[37%]  flex items-center justify-center mr-36">
          <Image width={400} height={400} src={"/Frame.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default index;
