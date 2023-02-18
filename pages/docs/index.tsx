import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import { DocumentCopy } from "iconsax-react";
import { BsClipboardCheck } from "react-icons/bs";
import Gradient from "../gradient";
import { CopyBlock, dracula, atomOneDark, Code } from "react-code-blocks";
import { sample } from "../../constants/constants";
import dynamic from "next/dynamic";
import Head from "next/head";

function Docs() {
  const [isCopied, setIsCopied] = useState(false);
  const [language, changeLanguage] = useState("typescript");
  const [languageDemo, changeDemo] = useState(sample.typescript);
  const [lineNumbers, toggleLineNumbers] = useState(true);

  interface CopyButtonProps {
    text: string;
  }

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(
        `
    // SPDX-License-Identifier: MIT

    pragma solidity ^0.8.7;

    import "chainarch/interfaces/automationInterface.sol";
    
    
    contract Counter is Automatable{
    
        uint public count;
        uint s_lastTimeStamp;
        uint public immutable i_interval;
    
        constructor(){
            s_lastTimeStamp = block.timestamp;
            i_interval = 300;
        }
    
        function increment() public {
            count++;
        }
    
        function decrement() public {
            count++;
        }
    
        function checkAutomationStatus() external view override returns(bool){
            bool automationStatus = (block.timestamp - s_lastTimeStamp)> i_interval;
            return automationStatus;
        }
    
        function automate() external override {
            increment();
            s_lastTimeStamp = block.timestamp;
       }
    
    }`
      )
      .then(() => setIsCopied(true));
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="h-screen overflow-y-scroll  scrollbar-hide ">
       <Head>
        <title>Docs</title>
      </Head>
      <div className="min-h-[110vw] w-full flex flex-col items-center justify-center bg-[#000000] pt-[14vh]">
        <Gradient />
        <NavBar />

        <div className="w-[70%] h-[40vh]  flex flex-col items-center justify-center  ">
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
        <div className="w-[70%] bg-[#0E0E0E] min-h-[45vh]  rounded-[20px] border-2 border-[#232222] flex flex-row items-start justify-between p-[20px] pl-[50px]">
          {/* <CopyBlock
            className="w-[100%]"
            language={language}
            text={languageDemo}
            showLineNumbers={lineNumbers}
            theme={atomOneDark}
            wrapLines={true}
            // codeBlock
          /> */}
          {/* <Code
            style={{ backgroundColor: "transparent" }}
            text={languageDemo}
            language={language}
          /> */}
          <pre>
            <code className="h-full text-white gap-y-2 flex flex-col items-start justify-start">
              <span className="text-gray-700">
                &nbsp;&nbsp;// SPDX-License-Identifier: MIT
              </span>
              <br />
              &nbsp;&nbsp;pragma solidity ^0.8.7;
              <br />
              <br />
              &nbsp;&nbsp;import {"'"}chainarch/interfaces/automationInterface.sol{"'"};
              <br />
              <br />
              &nbsp;&nbsp;contract Counter is Automatable&nbsp;{"{"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uint public count;{" "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uint s_lastTimeStamp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uint public immutable
              i_interval;
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;constructor()&nbsp;{"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s_lastTimeStamp
              = block.timestamp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i_interval
              = 300;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function increment()
              public {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function decrement()
              public {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function
              checkAutomationStatus() external view override returns(bool){"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bool
              automationStatus = (block.timestamp - s_lastTimeStamp){">"}{" "}
              i_interval;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
              automationStatus;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function automate()
              external override {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s_lastTimeStamp
              = block.timestamp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"}
            </code>
          </pre>
          <button
            onClick={handleCopyClick}
            className="w-[60px] h-[40px] rounded-[10px] flex flex-col justify-center items-center bg-[#212121]"
          >
            {isCopied ? (
              <BsClipboardCheck size="20" color="white" />
            ) : (
              <DocumentCopy size="20" color="white" />
            )}
          </button>
        </div>
        <div className="w-[70%]  h-[60vh] flex flex-col items-start justify-center ">
          <h1 className="text-[20px] font-inter text-white font-semibold">
            Functions
          </h1>
          <div className="w-[100%] h-[60%] rounded-[20px] border-2 border-[#232222] flex flex-col justify-center items-center p-[20px] mt-[25px]">
            <div className="w-[100%] h-[40%] rounded-[15px] min-h-[50px] bg-[#131313] flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter text-white  font-semibold ml-[40px]">
                Functions
              </h1>
              <h1 className="text-[15px] font-inter text-white font-bold ml-[140px]">
                Descriptions
              </h1>
            </div>
            <div className="w-[100%] h-[70%] rounded-[20px]  flex flex-row justify-start items-center gap-y-3">
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                automate
              </h1>
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[140px] mr-11">
                Contains the logic that should be executed on-chain when
                automationStatus is true.
              </h1>
              <h1 className="text-[13px] bg-[#131313] rounded-[5px] w-[230px] h-[40px] flex items-center justify-center font-inter font-normal text-white  ml-[40px]">
                automate
              </h1>{" "}
            </div>
            <div className="w-[100%] h-[60%] rounded-[20px]  flex flex-row justify-start items-center">
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px]">
                checkAutomationStatus
              </h1>
              <h1 className="text-[15px] font-inter font-normal text-white  ml-[40px] ">
                Runs off-chain at every block to determine if the automate
                function should be called on-chain.
              </h1>
              <h1 className="text-[13px] bg-[#131313] rounded-[5px] w-[230px] h-[40px] flex items-center justify-center font-inter font-normal text-white  ml-[40px]">
                checkAutomationStatus
              </h1>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Docs),{ssr:false});
