import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Gradient from "../gradient";

function ContactUs() {
  return (
    <div className="h-screen bg-[#000000]  overflow-y-scroll scrollbar-hide">
      <div className="h-full w-full  flex flex-row justify-center  items-end  bg-[#000000]">
        <Gradient />
        <NavBar />
        <div className=" w-[100%] h-[100%]    flex flex-row justify-center  items-end  ">
          <div className="w-[40%] h-[70%]   flex flex-col justify-center   items-start mb-[50px]">
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
            <button className="text-white text-[18px]  w-[180px] h-[58px] bg-gradient-to-r from-[#592D7C] to-[#260441] rounded-[40px]  mt-[20px] font-bold font-inter">
              Send
            </button>
          </div>
          <div className="w-[40%] h-[70%] lg:w-[40%] lg:h-[70%]   flex flex-col justify-center  items-start pl-[50px] mb-[50px]">
            <h1 className="text-white text-[40px]  font-bold font-inter">
              Talk to us
            </h1>
            <img src="/2.png" width={400} height={200} alt="" />
            <h1 className="text-white text-[18px] w-[90%] font-normal font-inter">
              If you have any questions, suggestions or wishes for our products
              - Let us know we will help you
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[80vh] w-full bg-black">
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  -ml-[40px] ">
          <div className="w-[73%] h-[10%]  flex flex-col justify-center  items-start   ">
            <h1 className="text-white text-[30px] font-inter font-bold  ">
              Meet Our Team
            </h1>
          </div>

          <div className="w-[100%] h-[85%]  flex flex-row justify-center  items-center   ">
            <div className="w-[17%] h-[85%] flex flex-col justify-start items-center bg-[#0E0E0E]  pt-[20px] pl-[20px] pr-[20px] rounded-[20px] ">
              <Image
                width={250}
                height={400}
                src={"/assets/pranav.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between   items-center">
                <h1 className="text-white text-[19px]  font-semibold  font-inter">
                  Pranav
                </h1>{" "}
                <FiMail size={25} color="white" />
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center">
                <h1 className="text-white text-[13px]  font-normal font-inter">
                  Blockchain Developer
                </h1>
              </div>
            </div>{" "}
            <div className="w-[17%] h-[85%] flex flex-col justify-start items-center bg-[#0E0E0E] ml-[30px] rounded-[20px]  pt-[20px] pl-[20px] pr-[20px] ">
              <Image
                width={225}
                height={400}
                src={"/assets/rahul.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center">
                <h1 className="text-white text-[19px]  font-semibold  font-inter">
                  Rahul
                </h1>{" "}
                <FiMail size={25} color="white" />
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center">
                <h1 className="text-white text-[13px]  font-normal font-inter">
                  Frontend Developer
                </h1>
              </div>
            </div>{" "}
            <div className="w-[17%] h-[85%] flex flex-col justify-start  items-center bg-[#0E0E0E]  ml-[30px] rounded-[20px]  pt-[20px] pl-[20px] pr-[20px] ">
              <Image
                width={225}
                height={400}
                src={"/assets/amal.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center">
                <h1 className="text-white text-[19px]  font-semibold  font-inter">
                  Amal
                </h1>{" "}
                <FiMail size={25} color="white" />
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center">
                <h1 className="text-white text-[13px]  font-normal font-inter">
                  Frontend Developer
                </h1>
              </div>
            </div>
            <div className="w-[17%] h-[85%] flex flex-col justify-start items-center bg-[#0E0E0E]  ml-[30px] rounded-[20px]  pt-[20px] pl-[20px] pr-[20px] ">
              <Image
                width={225}
                height={400}
                src={"/assets/athul.jpg"}
                className=" rounded-[20px] "
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center">
                <h1 className="text-white text-[19px]  font-semibold  font-inter">
                  Athul
                </h1>{" "}
                <FiMail size={25} color="white" />
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center">
                <h1 className="text-white text-[13px]  font-normal font-inter">
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
