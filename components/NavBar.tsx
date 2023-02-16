import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount } from "wagmi";

function NavBar() {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();
  return (
    <div className="min-h-[125px]  w-[100vw] lg:min-h-[125px]  lg:w-[100vw]  sm:min-h-[30px]   flex flex-row justify-end  items-center fixed -top-1 z-100 bg-transparent ">
      <div className="w-[60%] h-[120px] sm:min-h-[30px]  flex flex-row justify-around  items-center">
        <h1 className="cursor-pointer text-gray-300 hover:text-white text-[18px] md:text-[15px] md:font-semibold font-bold font-inter">
          Dashboard
        </h1>
        <h1 className="cursor-pointer text-gray-300 hover:text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Docs{" "}
        </h1>
        <h1 className="cursor-pointer text-gray-300 hover:text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Contact Us
        </h1>
        {isConnected ? (
        <div className="flex w-[50%] h-full items-center justify-between">
          <button className="w-[40%] text-white text-[18px] md:text-[15px] md:font-semibold md:[30%]  h-[45px] rounded-[18px] border  border-[#8C3BBE]  font-bold font-inter">
            0x..{address?.slice(address?.length- 10,address?.length)}
          </button>
          <button onClick={openAccountModal} className="w-[40%] text-white text-[18px] md:text-[15px] md:font-semibold h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter">
            Disconnect
          </button>
        </div>
        ) : (
          <button onClick={openConnectModal} className="text-white text-[18px] md:text-[15px] md:font-semibold   w-[19%] h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default NavBar;
