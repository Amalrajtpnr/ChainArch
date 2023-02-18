import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Image from "next/image";

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

  const color = "red";

  return (
    <div className="min-h-[125px]  w-[100vw] lg:min-h-[125px]  lg:w-[100vw]  sm:min-h-[30px]   flex flex-row justify-between   items-center fixed -top-1 z-100 bg-transparent backdrop-blur-[50px] ">
      <Image
        src="/assets/newlogo.svg"
        width={210}
        height={100}
        className={"ml-[60px]"}
        alt=""
      />

      <div className="w-[60%] h-[120px] sm:min-h-[30px]  flex flex-row justify-around  items-center">
        <h1
          onClick={() => {
            router.push("/dashboard");
          }}
          className={`cursor-pointer ${
            router.pathname === "/dashboard"
              ? "text-[#b706f5] font-extrabold"
              : "text-gray-400 hover:text-white hover:drop-shadow-text"
          } text-[18px] md:text-[15px] md:font-semibold shadow-none font-bold font-inter `}
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
          } text-[18px] md:text-[15px] md:font-semibold  hover:text-white shadow-none font-bold font-inter`}
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
          } text-[18px] md:text-[15px] md:font-semibold shadow-none  font-bold font-inter`}
        >
          Contact Us
        </h1>
        {isConnected ? (
          <div className="flex w-[50%] h-full items-center justify-between">
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
            className="text-white text-[18px] md:text-[15px] md:font-semibold   w-[19%] h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
