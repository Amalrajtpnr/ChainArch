import React, { useState } from "react";
import Image from "next/image";
import NavBar from "../../components/NavBar";
import dynamic from "next/dynamic";
import { useAccount } from "wagmi";
import { getSignedContract } from "../../utils/helper-function";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import axios from "axios";
import { Status } from "../../constants/Types";
import Transactionprogress from "../../components/Transactionprogress";
import { ImSpinner2 } from "react-icons/im";
import Lottie from "lottie-react";
import blockchain from "../../public/assets/blockchain.json";
import Head from "next/head";

function NewTask() {
  const router = useRouter();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [targetAddress, setTargetAddress] = useState({ value: "", err: "" });
  const [abi, setAbi] = useState({ value: "", err: "" });
  const [gasLimit, setGasLimit] = useState({ value: "", err: "" });
  const [initialAmount, setInitialAmount] = useState({ value: "", err: "" });
  const [taskName, setTaskName] = useState({ value: "", err: "" });
  const [isAbiAvailable, setisAbiAvailable] = useState(false);
  const [txModalVisible, setTxModalVisible] = useState(false);
  const [txStatus, setTxStatus] = useState<Status>(null);
  const [id, setId] = useState("");
  const [autoTaskId, setAutoTaskId] = useState("");
  const inputs = [
    { input: targetAddress, func: setTargetAddress },
    { input: abi, func: setAbi },
    { input: gasLimit, func: setGasLimit },
    { input: initialAmount, func: setInitialAmount },
    { input: taskName, func: setTaskName },
  ];

  const getAbi = (address: string) => {
    try {
      fetch(
        `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${process.env.NEXT_PUBLIC_KEY!.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.message === "NOTOK") {
            setisAbiAvailable(false);
          } else {
            setisAbiAvailable(true);
            setAbi({ value: data.result, err: "" });
            console.log(
              data.result.includes("Automatable") &&
                data.result.includes("checkAutomationStatus") &&
                data.result.includes("automate")
            );
          }
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.clear();
    }
  };

  const submit = async () => {
    if (
      address &&
      targetAddress.value !== "" &&
      abi.value !== "" &&
      initialAmount.value !== "" &&
      gasLimit.value !== "" &&
      taskName.value !== ""
    ) {
      try {
        setLoading(true);
        await axios
          .post(
            "https://automation-helper-production.up.railway.app/api/newtask",
            {
              address: targetAddress.value,
              abi: abi.value,
              taskName: taskName.value,
            }
          )
          .then(async (res) => {
            if (res.data) {
              setLoading(false);
              try {
                const { contract } = await getSignedContract();
                setTxModalVisible(true);
                setTxStatus("Initiated");
                console.log(targetAddress.value)
                const executor = process.env.NEXT_PUBLIC_EXECUTOR;
                const tx = await contract?.createAutomation(
                  targetAddress.value.slice(2,targetAddress.value.length),
                  gasLimit.value,
                  executor,
                  {
                    value: ethers.utils.parseEther(initialAmount.value),
                  }
                );
                if (tx.confirmations == 0) {
                  setTxStatus("Processing");
                }
                const txReceipt = await tx.wait(1);
                if (txReceipt) {
                  setTxStatus("Completed");
                  const task = await contract.getTaskByAddress(
                    res.data.address
                  );
                  setAutoTaskId(task.id.toString());
                  setTimeout(() => {
                    router.replace(`/task/${res.data._id}${task.id.toString()}`);
                  }, 1000);
                }
              } catch (error: any) {
                console.log(error.message)
                setId("");
                setAutoTaskId("");
                if (
                  error.message
                    .toLowerCase()
                    .includes("user rejected transaction")
                ) {
                  setTxStatus("Cancelled");
                } else {
                  setTxStatus("Failed");
                }
                await axios.delete(
                  `https://automation-helper-production.up.railway.app/deletetask?address=${res.data.address}`
                );
                setLoading(false);
              }
            } else if (res.data.error) {
              setLoading(false);
            }
            setLoading(false);
          });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (!address) {
      alert("connect wallet");
    } else {
      inputs.map(({ func, input: Input }) => {
        console.log(Input.value);
        if (Input.value !== "") {
          func({ ...Input, err: "" });
        } else {
          console.log(Input.value !== "");
          func({ ...Input, err: "this field is required" });
        }
      });
    }
    
  };

  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden">
       <Head>
        <title>New Task</title>
      </Head>
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      {/* <div className=" h-[10px] w-[10px] bg-[#26E5FF] rounded-full absolute top-72 opacity-90  shadow-[0px_0px_890px_150px_rgba(0,0,0,0.3)] shadow-[#B200FF]   overflow-hidden -left-16 "></div> */}
      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-center items-center  ">
        <NavBar />
        <div className="h-[85%] w-[40%]  flex items-center justify-center flex-col  mr-36 mt-[10%]  ">
          <h1 className="text-4xl tracking-wider text-white font-inter font-extrabold mr-[70px] mb-3">
            Create Task
          </h1>
          <Lottie className="w-[400px] h-[300px]" animationData={blockchain} />
          <h1 className="text-white w-[80%] text-start tracking-wider ml-40 my-5">
            Streamlining Daily Tasks with Automation for Increased Efficiency
            and Productivity
          </h1>
        </div>

        <div className="h-[85%] w-[37%]  rounded-xl  flex justify-evenly items-start flex-col mt-24 ">
          <div className="h-[85px] w-[85%] flex items-start justify-between flex-col relative  ">
            <h1 className="text-white text-sm font-bold my-1">
              Contact Address
            </h1>
            <input
              className=" h-[90%] min-h-[50px] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl focus:outline-none"
              type="text"
              placeholder="address"
              value={targetAddress.value}
              onChange={(e) => {
                setTargetAddress({ err: "", value: e.target.value });
                if (
                  ethers.utils.isAddress(e.target.value) !== true &&
                  e.target.value !== ""
                ) {
                  setTargetAddress({
                    value: e.target.value,
                    err: "Invalid address",
                  });
                } else {
                  setTargetAddress({ value: e.target.value, err: "" });
                  getAbi(e.target.value);
                }
              }}
            />
            <span className="text-red-600 font-medium text-[13px] ml-2">
              {targetAddress.err}
            </span>
          </div>

          {!isAbiAvailable && (
            <div className="h-[160px] w-[85%] flex items-start justify-between flex-col relative mt-1">
              <h1 className="text-white text-sm font-bold my-1">ABI</h1>
              <textarea
                style={{ resize: "none" }}
                className="h-[90%] w-[100%] bg-[#0E0E0E]  flex  text-sm text-white rounded-xl  pl-3 pt-3 box-border focus:outline-none scrollbar-hide"
                name="ABI"
                id=""
                cols={50}
                rows={50}
                placeholder="ABI"
                value={abi.value}
                onChange={(e) => {
                  setAbi({ err: "", value: e.target.value });
                  try {
                    if (
                      e.target.value.includes("Automatable") &&
                      e.target.value.includes("checkAutomationStatus") &&
                      e.target.value.includes("automate")
                    ) {
                      setAbi({ value: e.target.value, err: "" });
                    } else {
                      setAbi({
                        value: e.target.value,
                        err: "contract doesnot follow our guidelines. it's not automatable",
                      });
                    }
                    const val = new ethers.utils.Interface(e.target.value);
                    setAbi({ value: e.target.value, err: "" });
                  } catch (error) {
                    setAbi({ value: e.target.value, err: "Invalid ABI" });
                  }
                }}
              ></textarea>
              <span className="text-red-600 font-medium text-[13px] ml-2">
                {abi.err}
              </span>
            </div>
          )}

          <div className="h-[10%] w-[85%] flex items-center justify-between my-2">
            <div className="h-[75px] w-[46%] flex items-start justify-between flex-col relative  ">
              <h1 className="text-white text-sm font-bold my-1">Task Name</h1>
              <input
                className=" h-[90%] min-h-[50px] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl focus:outline-none"
                type="text"
                placeholder="Name"
                value={taskName.value}
                onChange={(e) => {
                  setTaskName({ err: "", value: e.target.value });
                  if (e.target.value === "") {
                    setTaskName({ value: e.target.value, err: "Invalid Name" });
                  } else {
                    setTaskName({ value: e.target.value, err: "" });
                  }
                }}
              />
              <span className="text-red-600 font-medium text-[13px] ml-2">
                {taskName.err}
              </span>
            </div>

            <div className="h-[75px] w-[46%] flex items-start justify-between flex-col relative  ">
              <h1 className="text-white text-sm font-bold my-1">
                Initial Amount
              </h1>
              <input
                className=" h-[90%] min-h-[50px] w-[100%] pl-3 box-border bg-[#0E0E0E] flex  text-sm text-white rounded-xl focus:outline-none"
                type="text"
                placeholder="0.000"
                value={initialAmount.value}
                onChange={(e) => {
                  const regex = /^[+-]?\d+(\.\d+)?$/;
                  setInitialAmount({ err: "", value: e.target.value });
                  if (
                    Number.isNaN(parseFloat(e.target.value)) &&
                    e.target.value !== ""
                  ) {
                    setInitialAmount({
                      value: e.target.value,
                      err: "Invalid amount",
                    });
                  } else {
                    if (regex.test(e.target.value)) {
                      setInitialAmount({ value: e.target.value, err: "" });
                    } else {
                      setInitialAmount({
                        value: e.target.value,
                        err: "Invalid amount",
                      });
                    }
                  }
                }}
              />
              <span className="text-red-600 font-medium text-[13px] ml-2">
                {initialAmount.err}
              </span>
            </div>
          </div>

          <div className="h-[75px] w-[85%] flex items-start justify-between flex-col relative mt-2 ">
            <h1 className="text-white text-sm font-bold my-1">Gas Limit</h1>
            <input
              className=" h-[90%] min-h-[50px] w-[100%] pl-3 box-border bg-[#0E0E0E] flex text-sm text-white rounded-xl focus:outline-none"
              type="text"
              placeholder="0000000"
              value={gasLimit.value}
              onChange={(e) => {
                setGasLimit({ err: "", value: e.target.value });
                if (
                  Number.isNaN(parseFloat(e.target.value)) ||
                  parseFloat(e.target.value) <= 0
                ) {
                  setGasLimit({
                    value: e.target.value,
                    err: "Invalid gasLimit",
                  });
                } else {
                  setGasLimit({ value: e.target.value, err: "" });
                }
              }}
            />
            <span className="text-red-600 font-medium text-[13px] ml-2">
              {gasLimit.err}
            </span>
          </div>

          <button
            onClick={submit}
            disabled={loading ? true : false}
            className=" h-[7%] w-[25%]  bg-gradient-to-r from-[#592D7C] to-[#260441] rounded-[15px] ml-72 text-white text-sm font-semibold  flex items-center justify-evenly"
          >
            <span className="">Create</span>
            {loading && (
              <ImSpinner2 className="animate-rotate" color="white" size={20} />
            )}
          </button>
        </div>
      </div>
      {txModalVisible && (
        <Transactionprogress
          status={txStatus}
          onBackButtonPress={() => setTxModalVisible(false)}
        />
      )}
    </div>
  );
}

export default dynamic(() => Promise.resolve(NewTask), { ssr: false });
