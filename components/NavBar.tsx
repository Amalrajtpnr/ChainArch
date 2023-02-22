import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const router = useRouter();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 15);
      setPrevScrollPos(currentScrollPos);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 30000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const color = "red";

  return (
    <div className="min-h-[125px]  w-[100vw] lg:min-h-[125px]  lg:w-[100vw]  sm:min-h-[30px]   flex flex-row justify-between   items-center fixed -top-1 z-100 bg-transparent backdrop-blur-[50px] ">
      <Image
        src="/assets/newlogo.svg"
        width={210}
        height={100}
        className={"hidden lg:flex ml-[60px]"}
        alt=""
      />
      <Image
        src="/assets/newlogo.svg"
        width={150}
        height={60}
        className={"flex lg:hidden ml-[60px]"}
        alt=""
      />

      <div className="w-[60%] h-[120px] sm:min-h-[30px]  flex flex-row justify-end lg:justify-around  items-center">
        <h1
          onClick={() => {
            router.push("/dashboard");
          }}
          className={`cursor-pointer ${
            router.pathname === "/dashboard"
              ? "text-[#b706f5] font-extrabold"
              : "text-gray-400 hover:text-white hover:drop-shadow-text"
          } text-[18px] md:text-[15px] md:font-semibold shadow-none font-bold font-inter hidden lg:flex `}
        >
          Dashboard
        </h1>
        <h1
          onClick={() => {
            router.push("/docs");
          }}
          className={`cursor-pointer  ${
            router.pathname === "/docs"
              ? "text-[#b706f5] font-extrabold"
              : "text-gray-400 hover:text-white hover:drop-shadow-text"
          } text-[18px] md:text-[15px] md:font-semibold  hover:text-white shadow-none font-bold font-inter hidden lg:flex`}
        >
          Docs{" "}
        </h1>
        <h1
          onClick={() => {
            router.push("/contactus");
          }}
          className={`cursor-pointer ${
            router.pathname === "/contactus"
              ? "text-[#b706f5] font-extrabold"
              : "text-gray-400 hover:text-white hover:drop-shadow-text"
          } text-[18px] md:text-[15px] md:font-semibold shadow-none  font-bold font-inter hidden lg:flex`}
        >
          Contact Us
        </h1>
        {isConnected ? (
          <div className="hidden lg:flex w-[50%] h-full items-center justify-between">
            <button className="w-[40%] text-white text-[18px] md:text-[15px] md:font-semibold md:[30%]  h-[45px] rounded-[18px] border  border-[#8C3BBE]  font-bold font-inter">
              0x..{address?.slice(address?.length - 10, address?.length)}
            </button>
            <button
              onClick={openAccountModal}
              className="w-[40%] text-white text-[18px] md:text-[15px] md:font-semibold h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={openConnectModal}
            className="hidden lg:flex items-center justify-center text-white text-[18px] md:text-[15px] md:font-semibold   w-[19%] h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter"
          >
            Connect Wallet
          </button>
        )}
        <div className="relative flex flex-col items-center justify-start lg:hidden mr-[10%]">
          <AiOutlineMenu
            color="white"
            size={35}
            onClick={() => setIsModalOpen(!isModalOpen)}
            className=""
          />
          {isModalOpen && (
            <div className="absolute z-[100] flex flex-col items-center justify-start top-[115%] right-0 w-[150px] min-h-[40px] border-[1px]  border-[#BD06FD] bg-[rgba(0,0,0,0.7)] rounded-lg overflow-hidden ">
              <div
                onClick={() => {
                  router.push("/dashboard");
                }}
                className="w-full h-[40px] flex items-center justify-center border-b-[1px]  border-b-[#BD06FD]"
              >
                <h1 className="text-white">Dashboard</h1>
              </div>
              <div
                onClick={() => {
                  router.push("/docs");
                }}
                className="w-full h-[40px] flex items-center justify-center border-b-[1px]  border-b-[#BD06FD]"
              >
                <h1 className="text-white">Docs</h1>
              </div>
              <div
                onClick={() => {
                  router.push("/contactus");
                }}
                className="w-full h-[40px] flex items-center justify-center border-b-[1px]  border-b-[#BD06FD]"
              >
                <h1 className="text-white">Contact Us</h1>
              </div>
              {
                isConnected ?(
                  <div
                onClick={openAccountModal}
                className="w-full h-[40px] flex items-center justify-center border-b-[1px]  border-b-[#BD06FD]"
              >
                <h1 className="text-white">Disconnect</h1>
              </div>
                ):(
                  <div
                onClick={openConnectModal}
                className="w-full h-[40px] flex items-center justify-center border-b-[1px]  border-b-[#BD06FD]"
              >
                <h1 className="text-white">Connect Wallet</h1>
              </div>
                )
              }
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
