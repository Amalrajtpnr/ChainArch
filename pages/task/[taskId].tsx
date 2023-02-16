/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

import Active from "../../components/Active";
import Spanaddress from "../../components/Spanaddress";
import Address from "../../components/Address";
import Datehead from "../../components/Datehead";
import Date from "../../components/Date";
import Settings from "../../components/Settings";
import Addfund from "../../components/Addfund";
import Gaslimit from "../../components/Gaslimit";
import Transactionprogress from "../../components/Transactionprogress";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import axios from "axios";
import Execution from "../../components/Date";
import { useAccount, useContractEvent, useContractRead } from "wagmi";
import { ABI } from "../../constants/constants";
import Cancelled from "../../components/Cancelled";
import { getContract, getSignedContract } from "../../utils/helper-function";
import { useAppContext } from "../../contexts/AppContext";
import { Status } from "../../constants/Types";
import { ethers } from "ethers";
import WithdrawModal from "../../components/FundWithDrawModal";

type props = {
  id: string | number;
  autoTaskId: string | number;
};

function Task({ id,autoTaskId }: props) {

  const { optionsVisible,setOptionsVisible,setTaskModalVisible,taskModalVisible,gasLimitModalVisible,setGasLimitModalVisible,setWithdrawModalVisible,withdrawModalVisible } = useAppContext()
  const [txmodalVisible, setTxModalVisible] = useState(false);
  const [taskFromDB, setTaskFromDB] = useState<any>({});
  const [taskFromBC, setTaskFromBC] = useState<any>({});
  const [executions, setExecutions] = useState<any[]>([]);
  const [txStatus, setTxStatus] = useState<Status>(null)
  const [amount, setAmount] = useState("")
  const {address} = useAccount()

  // console.log(id.toString())

  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskDetailsUpdated",
    listener: async () => {
      getTaskFromDB();
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "GasLimitUpdated",
    listener: async () => {
      getTaskFromDB();
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskFundWithdrawSuccess",
    listener: async () => {
      getTaskFromDB();
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "AutoTaskCancelled",
    listener: async () => {
      getTaskFromDB();
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskFundingSuccess",
    listener: async () => {
      getTaskFromDB();
    },
  });



  const getTaskFromDB = async () => {
    await axios
      .get(`http://localhost:5001/api/task?id=${id.valueOf()}`)
      .then(async (res) => {
        setExecutions(res.data.executions);
        // console.log(res.data.address);
        setTaskFromDB(res.data);
        const {contract} = await getSignedContract();
        const task = await contract.getTaskByAddress(res.data.address)
        setTaskFromBC(task)
      });
     
  };

  const addFunds = async() => {
    try {
      setOptionsVisible(false)
      const executor = process.env.NEXT_PUBLIC_EXECUTOR;
      setTaskModalVisible(false);
      const {contract} = await getSignedContract();
      setTxModalVisible(true)
      setTxStatus("Initiated")
      const tx = await contract.addFunds(1,executor,{value:ethers.utils.parseEther(amount) ,gasLimit:100000})
      if(tx.confirmations == 0){
        setTxStatus('Processing');
      }
      const receipt = await tx.wait(1);
      const { gasUsed } = receipt
      if(gasUsed){
        setTxStatus('Completed');
      }
    } catch (error:any) {
      if (error.message.toLowerCase().includes('user rejected transaction')) {
        setTxStatus('Cancelled');
      } else {
        setTxStatus('Failed');
      }
    }
  }


  const updateGasLimit = async() => {
    try {
      setOptionsVisible(false)
      setTaskModalVisible(false);
      const {contract} = await getSignedContract();
      setTxModalVisible(true)
      setTxStatus("Initiated")
      const tx = await contract.updateTaskGasLimit(parseInt(autoTaskId.toString()),amount,{gasLimit:100000})
      if(tx.confirmations == 0){
        setTxStatus('Processing');
      }
      const receipt = await tx.wait(1);
      const { gasUsed } = receipt
      if(gasUsed){
        setTxStatus('Completed');
      }
    } catch (error:any) {
      if (error.message.toLowerCase().includes('user rejected transaction')) {
        setTxStatus('Cancelled');
      } else {
        setTxStatus('Failed');
      }
    }
  }

  const withdrawFunds = async() => {
    try {
      setOptionsVisible(false)
      setTaskModalVisible(false);
      const {contract} = await getSignedContract();
      setTxModalVisible(true)
      setTxStatus("Initiated")
      const tx = await contract.withdrawFunds(parseInt(autoTaskId.toString()),{gasLimit:100000})
      if(tx.confirmations == 0){
        setTxStatus('Processing');
      }
      const receipt = await tx.wait(1);
      const { gasUsed } = receipt
      if(gasUsed){
        setTxStatus('Completed');
      }
    } catch (error:any) {
      if (error.message.toLowerCase().includes('user rejected transaction')) {
        setTxStatus('Cancelled');
      } else {
        setTxStatus('Failed');
      }
    }
  }

  const cancelTask = async() => {
    try {
      setOptionsVisible(false)
      setTaskModalVisible(false);
      const {contract} = await getSignedContract();
      setTxModalVisible(true)
      setTxStatus("Initiated")
      const tx = await contract.cancelAutomation(taskFromDB.address,{gasLimit:50000})
      if(tx.confirmations == 0){
        setTxStatus('Processing');
      }
      const receipt = await tx.wait(1);
      const { gasUsed } = receipt
      if(gasUsed){
        setTxStatus('Completed');
      }
    } catch (error:any) {
      if (error.message.toLowerCase().includes('user rejected transaction')) {
        setTxStatus('Cancelled');
      } else {
        setTxStatus('Failed');
      }
    }
  }

  useEffect(() => {
    if(address){
      getTaskFromDB();
    }
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>

      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-center items-center">
        <NavBar />
        {taskModalVisible && (
          <Addfund
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            onClick={() => {
              setTaskModalVisible(!taskModalVisible);
            }}
            onSubmit={addFunds}
          />
        )}
        {gasLimitModalVisible && (
          <Gaslimit
          onChange={(e) => setAmount(e.target.value)}
            onClick={() => {
              setGasLimitModalVisible(false);
              setTaskModalVisible(false);
            }}
            onSubmit={updateGasLimit}
          />
        )}
        {txmodalVisible && (
          <Transactionprogress
            status={txStatus}
            onBackButtonPress={() => setTxModalVisible(false)}
          />
        )}

        <div className="h-[80%] w-[40%]  flex items-start justify-center flex-col  mr-36 mt-20  ml-14 pl-10 box-border ">
          <div className="h-[10%] w-[100%]  flex justify-between items-center -mt-10 relative z-0">
            <h1 className="text-2xl font-bold text-white">
              {taskFromDB.taskName}
            </h1>
            <Settings onClick={() => setOptionsVisible(!optionsVisible)} />
            {optionsVisible && (
              taskFromBC?.state.toString() === "0"?(
                <div className="min-h-[29px] w-[110px] bg-[#2320207f] rounded-md absolute z-0 left-[245px] top-14 flex flex-col items-center justify-evenly border-[1px] border-[#ffffff40]">
                <div
                  onClick={() => {
                    setOptionsVisible(false);
                    setTaskModalVisible(!taskModalVisible);
                  }}
                  className="cursor-pointer h-[29px] w-[110px] flex items-center justify-center border-b-[1px]  border-b-[#ffffff40] "
                >
                  {" "}
                  <h1 className=" text-xs text-white font-medium">Add fund</h1>
                </div>
                <div
                  onClick={() => {
                    setOptionsVisible(false);
                    setGasLimitModalVisible(!gasLimitModalVisible);
                  }}
                  className="cursor-pointer h-[29px] w-[110px] flex items-center justify-center border-b-[1px]  border-b-[#ffffff40]"
                >
                  {" "}
                  <h1 className=" text-xs font-medium text-white">
                    Update Gas Limit
                  </h1>
                </div>
                <div
                  onClick={cancelTask}
                  className="cursor-pointer h-[29px] w-[110px] flex items-center justify-center"
                >
                  {" "}
                  <h1 className=" text-xs font-medium text-white">
                    Cancel Task
                  </h1>
                </div>
              </div>
              ):(
                <div className="min-h-[29px] w-[110px] bg-[#2320207f] rounded-md absolute z-0 left-[245px] top-14 flex flex-col items-center justify-evenly border-[1px] border-[#ffffff40]">
                 <div
                  onClick={withdrawFunds}
                  className="cursor-pointer h-[29px] w-[110px] flex items-center justify-center"
                >
                  {" "}
                  <h1 className=" text-xs font-medium text-white">
                    WithDraw Funds
                  </h1>
                </div>
                </div>
              )
            )}
          </div>

          { taskFromBC?.state?.toString() === "1"?<Cancelled />:<Active />}
          <Spanaddress
            creator={taskFromBC?.creator?.toString()}
            executions={executions.length}
            cost={taskFromBC?.totalCostForExec?.toString()}
          />
          <Address target={taskFromDB.address} balance={taskFromBC?.funds?.toString()} gasLimit={taskFromBC?.gasLimit?.toString()} />
        </div>

        <div className="h-[75%] w-[40%]  flex items-center justify-evenly flex-col  mr-36 mt-28 border-[1px] border-[#5b5757] rounded-[18px] bg-gradient-to-b from-[#2a1111] to-[#000000]  p-[2px] box-border ">
          <h1 className="text-2xl font-semibold text-white">Last executions</h1>
          <div className="h-[89%] w-[96%]  flex items-center justify-center flex-col bg-gradient-to-tr from-[#000000] to-[#2c0b0b] border-[1px] border-[#5b5757]  rounded-[16px]">
            <Datehead />
            <div className="min-h-[360px] w-[100%]  flex justify-start items-center flex-col rounded-2xl mt-2 overflow-y-scroll scrollbar-hide ">
              {executions.map((exec: any, i: number) => (
                <Execution
                  key={i}
                  date={exec.time}
                  hash={exec.hash}
                  price={exec.amount}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Task), { ssr: false });

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { taskId } = context.query;
  const id = taskId?.toString().slice(0, 24);
  const autoTaskId = taskId?.toString().slice(25, taskId?.toString().length);
  return {
    props: {
      id: id,
      autoTaskId: autoTaskId,
    },
  };
};
