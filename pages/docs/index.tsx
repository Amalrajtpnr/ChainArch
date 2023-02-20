/* eslint-disable react/jsx-no-comment-textnodes */
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
  const [isFirstCopied, setIsFirstCopied] = useState(false);
  const [isSecondCopied, setIsSecondCopied] = useState(false);
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

  const handleCopyFirst = () => {
    navigator.clipboard
      .writeText(`yarn add chainarch`)
      .then(() => setIsFirstCopied(true));
    setTimeout(() => {
      setIsFirstCopied(false);
    }, 3000);
  };

  const handleCopySecond = () => {
    navigator.clipboard
      .writeText(`npm i chainarch`)
      .then(() => setIsSecondCopied(true));
    setTimeout(() => {
      setIsSecondCopied(false);
    }, 3000);
  };

  return (
    <div className="h-screen overflow-y-scroll  scrollbar-hide ">
      <Head>
        <title>Docs</title>
      </Head>
      <div className="min-h-[110vw] w-full flex flex-col items-center justify-center bg-[#000000] pt-[10vh] lg:pt-[14vh]">
        <Gradient />
        <NavBar />

        <div className="w-[70%] h-[70vh]  flex flex-col items-center justify-center mb-8 ">
          <div className="w-[100%] h-[60%] lg:h-[40%] flex flex-col items-start justify-center ">
            <h1 className="text-white font-inter font-semibold text-[1.3rem] lg:text-[25px]">
              Creating Automated Smart Contracts
            </h1>
            <h1 className="text-white font-inter font-extralight text-[14px] lg:text-[19px] text-left mt-[30px]">
              Smart contract automation refers to the use of technology to
              automate the execution of smart contracts. With automation, smart
              contracts can be executed automatically and transparently,
              eliminating the need for manual intervention. This not only
              streamlines the transaction process but also reduces the risk of
              human error and improves the overall security of the system.
            </h1>
          </div>
          <h1 className="text-white self-start my-3 font-extrabold text-[1.3rem] lg:text-[24px] font-inter">
            Use Our package
          </h1>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start w-[100%] h-[60px] gap-x-5 my-2 ">
            <div className="bg-[#0E0E0E] group rounded-[10px] lg:rounded-[20px] border-2 border-[#232222] w-[70%] lg:w-[30%] min-h-[45px] lg:h-[70px] flex items-center justify-between px-5">
              <span className="text-gray-300 text-[14px] lg:text-[20px]">
                $ &nbsp;yarn add chainarch
              </span>
              <button
                onClick={handleCopyFirst}
                className=" w-[50px]  lg:w-[60px] h-[40px] lg:h-[40px] rounded-[10px] hidden group-hover:flex  flex-col justify-center items-center bg-[#212121]"
              >
                {isFirstCopied ? (
                  <>
                    <BsClipboardCheck
                      size="20"
                      color="white"
                      className="lg:flex hidden"
                    />
                    <BsClipboardCheck
                      size="15"
                      color="white"
                      className="lg:hidden flex"
                    />
                  </>
                ) : (
                  <>
                    <DocumentCopy
                      size="20"
                      color="white"
                      className="lg:flex hidden"
                    />
                    <DocumentCopy
                      size="15"
                      color="white"
                      className="lg:hidden flex"
                    />
                  </>
                )}
              </button>
            </div>
            <h1 className="text-white text-[22px] mt-3">OR</h1>
            <div className="bg-[#0E0E0E] group  rounded-[10px] lg:rounded-[20px] border-2 border-[#232222] w-[70%] lg:w-[30%] min-h-[45px] lg:h-[70px]  flex items-center justify-between px-5">
              <span className="text-gray-300 text-[14px] lg:text-[20px]">
                $ &nbsp;npm i chainarch
              </span>
              <button
                onClick={handleCopySecond}
                className="w-[60px] h-[40px] rounded-[10px] hidden group-hover:flex  flex-col justify-center items-center bg-[#212121]"
              >
                {isSecondCopied ? (
                  <>
                    <BsClipboardCheck
                      size="20"
                      color="white"
                      className="lg:flex hidden"
                    />
                    <BsClipboardCheck
                      size="15"
                      color="white"
                      className="lg:hidden flex"
                    />
                  </>
                ) : (
                  <>
                    <DocumentCopy
                      size="20"
                      color="white"
                      className="lg:flex hidden"
                    />
                    <DocumentCopy
                      size="15"
                      color="white"
                      className="lg:hidden flex"
                    />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <h1 className=""></h1>
        <div className="relative w-[90%] lg:w-[70%] bg-[#0E0E0E] min-h-[45vh]  rounded-[20px] border-2 border-[#232222] flex flex-row items-start justify-between p-[20px] pl-[50px]">
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
          <pre className="lg:flex hidden">
            <code className="h-full text-white gap-y-2 flex flex-col items-start justify-start">
              <span className="text-gray-700">
                &nbsp;&nbsp;// SPDX-License-Identifier: MIT
              </span>
              <br />
              &nbsp;&nbsp;pragma solidity ^0.8.7;
              <br />
              <br />
              &nbsp;&nbsp;import {"'"}
              chainarch/interfaces/automationInterface.sol{"'"};
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
          <pre className="flex lg:hidden text-[10px]">
            <code className="h-full -ml-8 w-[60%] text-[10px] text-white gap-y-2 flex flex-col items-start justify-start">
              <span className="text-gray-700">
                // SPDX-License-Identifier: MIT
              </span>
              <br />
              pragma solidity ^0.8.7;
              <br />
              <br />
              import {"'"}
              chainarch/interfaces/automationInterface.sol{"'"};
              <br />
              <br />
              &nbsp;contract Counter is Automatable&nbsp;{"{"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;uint public count; <br />
              &nbsp;&nbsp;&nbsp;uint s_lastTimeStamp;
              <br />
              &nbsp;&nbsp;&nbsp;uint public immutable i_interval;
              <br />
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;constructor()&nbsp;{"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s_lastTimeStamp = block.timestamp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i_interval = 300;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;function increment() public {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
              <br />
              &nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;function decrement() public {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;
              <br />
              &nbsp;&nbsp;&nbsp;{"}"}
              <br />
              <br />
              &nbsp;&nbsp;function checkAutomationStatus() external <br />
              &nbsp;&nbsp;view override returns(bool){"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bool automationStatus = <br />
              &nbsp;&nbsp;&nbsp;&nbsp;(block.timestamp - s_lastTimeStamp){
                ">"
              }{" "}
              i_interval;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return automationStatus;
              <br />
              &nbsp;&nbsp;&nbsp;{"}"} <br />
              <br />
              &nbsp;&nbsp;&nbsp;function automate() external override {"{"}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;increment();
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;s_lastTimeStamp = block.timestamp;
              <br />
              &nbsp;&nbsp;&nbsp;{"}"}
              <br />
              {"}"}
            </code>
          </pre>
          <button
            onClick={handleCopyClick}
            className="absolute top-2 right-2  lg:mr-0 w-[60px] h-[40px] rounded-[10px] flex flex-col justify-center items-center bg-[#212121]"
          >
            {isCopied ? (
              <BsClipboardCheck size="20" color="white" />
            ) : (
              <DocumentCopy size="20" color="white" />
            )}
          </button>
        </div>
        <div className="w-[70%] h-[60vh] hidden lg:flex flex-col items-start justify-center ">
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
        <div className="flex lg:hidden flex-col items-center justify-start h-[50vh] w-full my-2 px-[5%]">
          <div className="w-[100%] h-[40px] rounded-[15px] min-h-[50px] bg-[#131313] flex flex-row justify-center items-center">
            <h1 className="text-[15px] font-inter text-white  font-semibold ">
              Functions
            </h1>
          </div>
          <h1 className=" text-[19px] my-3 font-inter font-extrabold text-yellow-700  ">
            automate
          </h1>
          <h1 className="text-[15px] font-inter font-normal text-white text-center ">
            Contains the logic that should be executed on-chain when
            automationStatus is true.
          </h1>

          <h1 className="text-[19px] my-3 font-inter font-extrabold text-yellow-700  ">
                checkAutomationStatus
              </h1>
              <h1 className="text-[15px] font-inter font-normal text-white  text-center">
                Runs off-chain at every block to determine if the automate
                function should be called on-chain.
              </h1>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Docs), { ssr: false });
