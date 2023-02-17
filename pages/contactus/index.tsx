/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Gradient from "../gradient";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import message from "../../public/rocket.json";
import styles from "../../styles/Home.module.css";
import { ImSpinner2 } from "react-icons/im";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const form = useRef<any>();
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ruuxdpc",
        "template_24qtkdi",
        form.current,
        "FCCwSxA_cDgcXSCes"
      )
      .then(
        (result) => {
          // console.log(result.text);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.clear();
        }
      );
  };

  return (
    <div
      className={`${styles.scroll} h-screen bg-[#000000]  overflow-y-scroll`}
    >
      <NavBar />

      <div className="h-full w-full  flex flex-row justify-center  items-end  bg-[#000000]">
        <Gradient />
        <div className=" w-[100%] h-[100%]    flex flex-row justify-center  items-end  ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-[40%] h-[70%]   flex flex-col justify-center   items-start mb-[50px]"
          >
            <h1 className="text-white text-[16px]  font-semibold font-inter">
              Name
            </h1>
            <input
              className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E] focus:outline-none box-border pl-3 mb-3  text-white"
              type="text"
              name="user_name"
            />
            <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter ">
              Email
            </h1>
            <input
              className="w-[90%] h-[70px] rounded-[20px] mt-[10px] bg-[#0E0E0E] focus:outline-none box-border pl-3 mb-3  text-white"
              type="text"
              name="user_email"
            />
            <h1 className="text-white text-[16px]  font-semibold mt-[10px] font-inter">
              Tell us what you are looking for
            </h1>
            <textarea
              className="h-[150px] w-[90%] rounded-[20px] mt-[10px] pl-3 pt-3 box-border focus:outline-none bg-[#0E0E0E] text-white "
              name="message"
              id=""
              cols={30}
              rows={10}
              style={{
                resize: "none",
              }}
            ></textarea>
            <button
              type="submit"
              onClick={sendEmail}
              className="text-white text-[18px]  w-[180px] h-[58px] bg-gradient-to-r from-[#592D7C] to-[#260441] rounded-[40px]  mt-[20px] font-bold font-inter flex items-center justify-evenly"
            >
              <span className="">Send</span>
              {loading && (
                <ImSpinner2
                  className="animate-rotate"
                  color="white"
                  size={20}
                />
              )}
            </button>
          </form>
          <div className="w-[40%] h-[70%] lg:w-[40%] lg:h-[70%]   flex flex-col justify-center  items-start pl-[50px] mb-[50px]">
            <h1 className="text-white text-[40px]  font-bold font-inter">
              Talk to us
            </h1>
            <Lottie
              className="h-[180px] w-[180px] my-16"
              animationData={message}
            />
            <h1 className="text-white text-[17px] w-[70%] font-normal font-inter ">
              If you have any questions, suggestions or wishes for our products
              - Let us know we will help you
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[100vh] w-full bg-black">
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  -ml-[40px] ">
          <div className="w-[73%] h-[10%]  flex flex-col justify-center  items-start   ">
            <h1 className="text-white text-[30px] font-inter font-bold mt-24 ">
              Meet Our Team
            </h1>
          </div>

          <div className="w-[100%] h-[75%]  flex flex-row justify-center  items-center   ">
            <div className="w-[17%] min-w-[250px] max-w-[260px] min-h-[350px] max-h-[350px] h-[68%] flex flex-col justify-start items-center bg-[#0E0E0E]  p-[17px] rounded-[20px] ">
              <img
                className="w-full h-[78%] rounded-[8px]"
                src={"/assets/pranav1.jpeg"}
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between   items-center mt-1">
                <h1 className="text-white text-[17px]  font-bold  font-inter">
                  Pranav Padmanabhan
                </h1>{" "}
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center -mt-2">
                <h1 className="text-white text-[12px]  font-normal font-inter">
                  Blockchain Developer
                </h1>
              </div>
              <div className="w-[95%] h-[10%]  flex items-center justify-start">
                <a
                  target={"_blank"}
                  href="mailto: pranavpadmanabhan77@gmail.com"
                >
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/gmail 2.svg"}
                    alt=""
                  />
                </a>
                <a
                  target={"_blank"}
                  href="https://github.com/PranavPadmanabhan"
                >
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/github 2.svg"}
                    alt=""
                    className="mx-3"
                  />
                </a>
                <a target={"_blank"} href="https://t.me/PranavPadmanabhan">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/telegram 2.svg"}
                    alt=""
                  />
                </a>
              </div>
            </div>{" "}
            <div className="w-[17%] min-w-[250px] max-w-[260px] max-h-[350px] min-h-[350px] h-[68%] flex flex-col justify-start items-center bg-[#0E0E0E] ml-[30px] rounded-[20px] p-[17px] ">
              <img
                className="w-full h-[78%] rounded-[8px]"
                src={"/assets/rahul.jpg"}
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center mt-1">
                <h1 className="text-white text-[17px]  font-bold  font-inter">
                  Rahul Mohan
                </h1>{" "}
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center -mt-2">
                <h1 className="text-white text-[12px]  font-normal font-inter">
                  Frontend Developer
                </h1>
              </div>
              <div className="w-[95%] h-[10%]  flex items-center justify-start">
                <a target={"_blank"} href="mailto: rahulmohanav35@gmail.com">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/gmail 2.svg"}
                    alt=""
                  />
                </a>
                <a target={"_blank"} href="https://github.com/rahulav35">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/github 2.svg"}
                    alt=""
                    className="mx-3"
                  />
                </a>
                <a target={"_blank"} href="https://t.me/ravzyy">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/telegram 2.svg"}
                    alt=""
                  />
                </a>
              </div>
            </div>{" "}
            <div className="w-[17%] min-w-[250px] max-w-[260px] min-h-[350px] max-h-[350px] h-[68%] flex flex-col justify-start  items-center bg-[#0E0E0E]  ml-[30px] rounded-[20px] p-[17px] ">
              <img
                className="w-full h-[78%] rounded-[8px]"
                src={"/assets/amal.jpg"}
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center mt-1">
                <h1 className="text-white text-[17px]  font-bold  font-inter">
                  Amal Raj
                </h1>{" "}
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center -mt-2">
                <h1 className="text-white text-[12px]  font-normal font-inter ">
                  Frontend Developer
                </h1>
              </div>
              <div className="w-[95%] h-[10%]  flex items-center justify-start">
                <a target={"_blank"} href="mailto: amalrajtpnr@gmail.com">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/gmail 2.svg"}
                    alt=""
                  />
                </a>
                <a target={"_blank"} href="https://github.com/amalrajtpnr">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/github 2.svg"}
                    alt=""
                    className="mx-3"
                  />
                </a>
                <a target={"_blank"} href="https://t.me/amalrajpnr">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/telegram 2.svg"}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="w-[17%] min-w-[250px] max-w-[260px] min-h-[350px] max-h-[350px] h-[68%] flex flex-col justify-start items-center bg-[#0E0E0E]  ml-[30px] rounded-[20px] p-[17px] ">
              <img
                src={"/assets/athul.jpg"}
                className="w-full h-[78%] rounded-[8px]"
                alt=""
              />
              <div className="w-[96%] h-[10%] flex flex-row justify-between  items-center mt-1 ">
                <h1 className="text-white text-[17px]  font-bold  font-inter">
                  Athul Vishnu
                </h1>{" "}
              </div>
              <div className="w-[96%] h-[10%] flex flex-row justify-start items-center -mt-2">
                <h1 className="text-white text-[12px]  font-normal font-inter">
                  Product Designer
                </h1>
              </div>
              <div className="w-[95%] h-[10%]  flex items-center justify-start">
                <a target={"_blank"} href="mailto: ivichu20@gmail.com">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/gmail 2.svg"}
                    alt=""
                  />
                </a>
                <a target={"_blank"} href="https://www.behance.net/athulvichu">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/behance 1.svg"}
                    alt=""
                    className="mx-3"
                  />
                </a>
                <a target={"_blank"} href="https://t.me/vichu20">
                  <Image
                    height={20}
                    width={20}
                    src={"/assets/telegram 2.svg"}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
