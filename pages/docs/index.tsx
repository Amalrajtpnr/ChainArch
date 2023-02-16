import React from "react";
import NavBar from "../../components/NavBar";
import { DocumentCopy } from "iconsax-react";

function CreatingAutomation() {
  return (
    <div className="min-h-[100vh] w-[100vw] bg-[#000000] absolute flex flex-col justify-center items-center overflow-hidden pt-[20vh] ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-10  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      <NavBar />
      <div className="w-[100vw] h-auto  flex flex-col items-center justify-start">
        <div className="w-[70%] h-[35vh]  flex flex-col items-start justify-start">
          <h1 className="text-white font-inter font-semibold text-[25px]">
            Creating Automated Smart Contracts
          </h1>
          <h1 className="text-white font-inter font-light text-[19px] mt-[30px]">
            Smart contract automation refers to the use of technology to
            automate the execution of smart contracts. With automation, smart
            contracts can be executed automatically and transparently,
            eliminating the need for manual intervention. This not only
            streamlines the transaction process but also reduces the risk of
            human error and improves the overall security of the system.
          </h1>
        </div>
      </div>
      <div className="w-[70%] bg-[#0E0E0E] h-[120vh] rounded-[20px] border-2 border-[#232222] flex flex-row items-start justify-between p-[20px] pl-[50px]">
        <pre>
          <code className="text-white">
            // SPDX-License-Identifier: MIT
            <br />
            pragma solidity ^0.8.7;
            <br />
            import "chainarch/interfaces/automationInterface.sol";
            <br />
            contract Counter is Automatable{}
            <br />
            uint public count; <br />
            /**
            <br />
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
            {/* } */}
            <br />
            function increment() public {}
            <br />
            count++;
            <br />
            {/* } */}
            <br />
            <br /> function checkUpkeep(
            <br />
            bytes calldata /* checkData */
            <br />
            )<br />
            external
            <br />
            view <br />
            override
            <br />
            returns (bool upkeepNeeded, bytes memory /* performData */)
          </code>
        </pre>
        <button className="w-[60px] h-[40px] rounded-[10px] flex flex-col justify-center items-center bg-[#212121]">
          <DocumentCopy size="20" color="white" />
        </button>
      </div>

      <div className="w-[100vw] h-[50vh] text-white  flex flex-col justify-center items-center">
        <div className="w-[70%]  h-[100%] flex flex-col items-start justify-center ">
          <h1 className="text-[20px] font-inter font-semibold">Functions</h1>
          <div className="w-[100%] h-[55%] rounded-[20px] border-2 border-[#232222] flex flex-col justify-center items-center p-[20px] mt-[25px]">
            <div className="w-[100%] h-[40%] rounded-[20px] bg-[#131313] flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter font-semibold ml-[40px]">
                Functions
              </h1>
              <h1 className="text-[15px] font-inter font-bold ml-[40px]">
                Descriptions
              </h1>
            </div>
            <div className="w-[100%] h-[60%] rounded-[20px]  flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter font-normal ml-[40px]">
                Automate
              </h1>
              <h1 className="text-[15px] font-inter font-normal ml-[40px]">
                Runs off-chain at every block to determine if the be called
                on-chain.
              </h1>
              <h1 className="text-[15px] font-inter font-normal ml-[40px]">
                Automate
              </h1>{" "}
              <h1 className="text-[15px] font-inter font-normal ml-[40px]">
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
