import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";


function ContactUs() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>

      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex flex-col justify-start  items-center">
      <div className="w-[100vw] h-[125px] min-h-[125px]  flex flex-row justify-center  items-center">
      <NavBar />

      </div>
       
        <div className="w-[100vw] h-[580px] lg:w-[100vw] lg:h-[580px] md:h-[400px] flex flex-row justify-center  items-center">
        <div className="w-[40%] h-[580px]   flex flex-col justify-center  pl-[50px] items-start">
            <h1 className="text-white text-[16px]  font-semibold font-inter">Email</h1>
            <input className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E]" type="text" />
            <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter">Your project/Company</h1>
            <input className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E]" type="text" />
            <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter">Tell us what you are looking for</h1>
            <input className="w-[90%] h-[173px] rounded-[20px] mt-[10px] bg-[#0E0E0E]" type="text" />
      <button className="text-white text-[18px]  w-[200px] h-[58px] bg-[#8C3BBE] rounded-[40px] border border-[#8C3BBE] mt-[20px] font-bold font-inter">Send</button>

        </div>
        <div className="w-[40%] h-[580px] lg:w-[40%] lg:h-[580px]   flex flex-col justify-center pl-[50px] -mt-[220px] items-start">
        <h1 className="text-white text-[45px]  font-bold font-inter">Talk to us</h1>
        <img src="/2.png" width={400} height={200} alt="" />
        <h1 className="text-white text-[18px] w-[90%] font-normal font-inter">If you have any questions, suggestions or wishes for our products - Let us know we will help you</h1>


        </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;
