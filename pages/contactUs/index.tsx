import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import {FiMail} from "react-icons/fi"

function ContactUs() {
  return (
    <div className=" min-h-[100vh] w-[100vw] bg-[#000000] flex flex-col items-center justify-center overflow-hidden  ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      <NavBar />
      <div className="w-[100vw] min-h-[100vh] flex flex-row justify-center  items-center">
        <div className="w-[40%] h-[70%]   flex flex-col justify-center  pl-[50px] items-start">
          <h1 className="text-white text-[16px]  font-semibold font-inter">
            Email
          </h1>
          <input
            className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E]"
            type="text"
          />
          <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter">
            Your project/Company
          </h1>
          <input
            className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E]"
            type="text"
          />
          <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter">
            Tell us what you are looking for
          </h1>
          <input
            className="w-[90%] h-[173px] rounded-[20px] mt-[10px] bg-[#0E0E0E]"
            type="text"
          />
          <button className="text-white text-[18px]  w-[200px] h-[58px] bg-[#8C3BBE] rounded-[40px] border border-[#8C3BBE] mt-[20px] font-bold font-inter">
            Send
          </button>
        </div>
        <div className="w-[40%] h-[580px] lg:w-[40%] lg:h-[580px]   flex flex-col justify-center pl-[50px]  items-start">
          <h1 className="text-white text-[45px]  font-bold font-inter">
            Talk to us
          </h1>
          <img src="/2.png" width={400} height={200} alt="" />
          <h1 className="text-white text-[18px] w-[90%] font-normal font-inter">
            If you have any questions, suggestions or wishes for our products -
            Let us know we will help you
          </h1>
        </div>
      </div>
      <div className="w-[100vw] h-[65vh] flex flex-col justify-center items-center">
        <div className="w-[74%] h-[100%] flex flex-col justify-start items-start   ">
          <h1 className="text-white text-[30px] font-inter font-bold  mb-[20px]">
            Meet Our Team
          </h1>
          <div className="w-[100%] h-[80%] flex flex-row justify-around  items-center  ">
            <div className="w-[20%] h-[90%] flex flex-col justify-center items-center bg-[#0E0E0E] -ml-[30px]  rounded-[20px] ">
              <Image
                width={200}
                height={400}
                src={"/assets/pranav.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
            <div className="w-[90%] h-[10%] flex flex-row justify-between  items-center">
            <h1 className="text-white text-[18px]  font-semibold  font-inter">
                Pranav
              </h1>{" "}
              <FiMail size={25} color="white"/>
            </div>
            <div className="w-[90%] h-[10%] flex flex-row justify-start items-center">
            <h1 className="text-white text-[15px]  font-normal font-inter">
                Blockchain Developer
              </h1>
            </div>

            </div>{" "}
            <div className="w-[20%] h-[90%] flex flex-col justify-center items-center bg-[#0E0E0E] rounded-[20px] ">
            <Image
                width={200}
                height={400}
                src={"/assets/rahul.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
            <div className="w-[90%] h-[10%] flex flex-row justify-between  items-center">
            <h1 className="text-white text-[18px]  font-semibold  font-inter">
                Rahul
              </h1>{" "}
              <FiMail size={25} color="white"/>
            </div>
            <div className="w-[90%] h-[10%] flex flex-row justify-start items-center">
            <h1 className="text-white text-[15px]  font-normal font-inter">
                Frontend Developer
              </h1>
            </div>
              </div>{" "}
            <div className="w-[20%] h-[90%] flex flex-col justify-center items-center bg-[#0E0E0E] rounded-[20px] ">
            <Image
                width={200}
                height={400}
                src={"/assets/amal.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
            <div className="w-[90%] h-[10%] flex flex-row justify-between  items-center">
            <h1 className="text-white text-[18px]  font-semibold  font-inter">
                Amal
              </h1>{" "}
              <FiMail size={25} color="white"/>
            </div>
            <div className="w-[90%] h-[10%] flex flex-row justify-start items-center">
            <h1 className="text-white text-[15px]  font-normal font-inter">
            Frontend Developer
              </h1>
            </div>
            </div>
            <div className="w-[20%] h-[90%] flex flex-col justify-center items-center bg-[#0E0E0E] rounded-[20px] ">
            <Image
                width={200}
                height={400}
                src={"/assets/athul.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
            <div className="w-[90%] h-[10%] flex flex-row justify-between  items-center">
            <h1 className="text-white text-[18px]  font-semibold  font-inter">
             Athul
              </h1>{" "}
              <FiMail size={25} color="white"/>
            </div>
            <div className="w-[90%] h-[10%] flex flex-row justify-start items-center">
            <h1 className="text-white text-[15px]  font-normal font-inter">
              Product Designer
              </h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
