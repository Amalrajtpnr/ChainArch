import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";


function Dashboard() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      <div className="w-[100vw] h-[125px] min-h-[125px]  flex flex-col justify-center  items-center">
      <NavBar />

      </div>
      <div className="w-[100%] h-[100%] border border-red-700"></div>
  
    </div>
  );
}

export default Dashboard;
