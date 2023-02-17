import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { DocumentCopy } from "iconsax-react";
import Gradient from "../gradient";

function CreatingAutomation() {
  const [isCopied, setIsCopied] = useState(false);

  interface CopyButtonProps {
    text: string;
  }

  function CopyButton({ text }: CopyButtonProps) {}
  const handleCopyClick = () => {
    navigator.clipboard.writeText("");
    setIsCopied(true);
  };

  return (
    <div className="h-screen overflow-y-scroll  scrollbar-hide">
      <div className="h-[110vw] w-full flex flex-col items-center justify-center bg-[#000000]">
        <Gradient />
        <NavBar />

        <div className="w-[70%] h-[20%]  flex flex-col items-center justify-center  ">
          <div className="w-[100%] h-[40%] flex flex-col items-start justify-center ">
            <h1 className="text-white font-inter font-semibold text-[25px]">
              Creating Automated Smart Contracts
            </h1>
            <h1 className="text-white font-inter font-extralight text-[19px] text-left mt-[30px]">
              Smart contract automation refers to the use of technology to
              automate the execution of smart contracts. With automation, smart
              contracts can be executed automatically and transparently,
              eliminating the need for manual intervention. This not only
              streamlines the transaction process but also reduces the risk of
              human error and improves the overall security of the system.
            </h1>
          </div>
        </div>
        <div className="w-[70%] bg-[#0E0E0E] h-[45%]  rounded-[20px] border-2 border-[#232222] flex flex-row items-start justify-between p-[20px] pl-[50px]">
          <pre>
            <code className="text-white">
              // SPDX-License-Identifier: MIT
              <br />
              pragma solidity ^0.8.7;
              <br />
              import "chainarch/interfaces/automationInterface.sol";
              <br />
              contract Counter is Automatable{"{"}
              <br />
              uint public count; <br />
             
              uint s_lastTimeStamp;
              <br />
              uint public immutable i_interval;
              <br />
              constructor(){"{"}
              <br />
              s_lastTimeStamp = block.timestamp;
              <br />
              i_interval = 300;
              <br />
            {"}"}
              <br />
              function increment() public {"{"}
              <br />
              count++;
              <br />
              {"}"}
              <br />
              function decrement() public {"{"}
              <br />
              count++;
              <br />
              {"}"}
              <br />
              function checkAutomationStatus() external view override
              returns(bool){"{"}
              <br />
              bool automationStatus = (block.timestamp - s_lastTimeStamp){
                ">"
              }{" "}
              i_interval;
              <br />
              return automationStatus;
              <br />
              {"}"} <br />
              function automate() external override {"{"}
              <br />
              increment();
              <br />
              s_lastTimeStamp = block.timestamp;
              <br />
              {"}"}
              <br />
              {"}"}
            </code>
          </pre>
          <button
            onClick={() => {
              handleCopyClick;
            }}
            className="w-[60px] h-[40px] rounded-[10px] flex flex-col justify-center items-center bg-[#212121]"
          >
            <DocumentCopy size="20" color="white" />
          </button>
        </div>
        <div className="w-[70%]  h-[20%] flex flex-col items-start justify-center ">
          <h1 className="text-[20px] font-inter text-white font-semibold">
            Functions
          </h1>
          <div className="w-[100%] h-[60%] rounded-[20px] border-2 border-[#232222] flex flex-col justify-center items-center p-[20px] mt-[25px]">
            <div className="w-[100%] h-[40%] rounded-[20px] bg-[#131313] flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter text-white  font-semibold ml-[40px]">
                Functions
              </h1>
              <h1 className="text-[15px] font-inter text-white font-bold ml-[40px]">
                Descriptions
              </h1>
            </div>
            <div className="w-[100%] h-[60%] rounded-[20px]  flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                Automate
              </h1>
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                Runs off-chain at every block to determine if the be called
                on-chain.
              </h1>
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                Automate
              </h1>{" "}
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                function should
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatingAutomation;
