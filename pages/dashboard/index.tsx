/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import TaskContainer, { LoadingTask } from "../../components/TaskContainer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getSignedContract } from "../../utils/helper-function";
import { useAccount, useContractEvent } from "wagmi";
import axios from "axios";
import { ABI } from "../../constants/constants";
import Lottie from "lottie-react";
import nodatafound from  "../../public/assets/nodata.json"
import Gradient from "../gradient";




function Dashboard() {
  const [active, setActive] = useState(true);
  const { address } = useAccount()
  const router = useRouter();
  const [tasks, setTasks] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const getTasks = async() =>{
    setLoading(true)
    await axios.get(`https://automation-helper-production.up.railway.app/api/tasks`).then(async(res) => {
      const { contract } = await getSignedContract()
      const tasks = await contract.getAllTasks();
      const filtered = tasks.filter((item:any) => item.creator.toString().toLowerCase() === address?.toLowerCase())
      setTasks(filtered.map((item:any) => {
        const task = res.data.filter((val:any) => val.address.toString()===item.taskAddress.toString())
        return {
          ...item,
          _id:task[0]?._id,
          name: task[0]?.taskName
        }
      }))
      setLoading(false)
    }).catch(err => setLoading(false))    
  }


  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "AutoTaskCancelled",
    listener: async () => {
      getTasks()
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "NewAutoTask",
    listener: async () => {
      getTasks()
    },
  });

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskFundingSuccess",
    listener: async () => {
      getTasks()
    },
  });
  

  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskFundWithdrawSuccess",
    listener: async () => {
      getTasks()
    },
  });
  



  useContractEvent({
    address: `0x${contractAddress}`,
    abi: ABI,
    eventName: "TaskDetailsUpdated",
    listener: async () => {
      getTasks()
    },
  });

  useEffect(() => {
    if(address){
      getTasks()
    }
  },[address])

  function CheckActive() {
    if (active === true) {
      return(
        <div className={`w-[85%] h-[480px] border-[1px] border-border border-b-0 flex flex-col items-center ${(!address || tasks.filter(item => item.state.toString() === "0").length ===0)?"justify-center":"justify-start"} gap-y-6 rounded-t-[50px]  py-[5vh] overflow-y-scroll scrollbar-hide`}>
       {
        loading?(<div className="w-full h-full flex flex-col items-center justify-start gap-y-6 pt-[1vh]">
          <LoadingTask />
           <LoadingTask />
           <LoadingTask />

          </div>):(tasks.filter(item => item.state.toString() === "0").map((item,i) => (
          <TaskContainer key={i} name={item.name} balance={item?.funds?.toString()} owner={item?.creator?.toString()} active={active} onClick={() => router.push(`/task/${item._id}${item.id.toString()}`)} />
        )))
       }
       {
        !address && (<h1 className="text-white">Connect your wallet!</h1>)
       }
       {
        (address && tasks.filter(item => item.state.toString() === "0").length === 0 && !loading) && <Lottie className="w-[250px] h-[250px] " animationData={nodatafound} />
       }

      </div>
      )
    
    } else {
      return(
        <div className={`w-[85%] h-[480px] border-[1px] border-b-0 border-border flex flex-col items-center ${(!address || tasks.filter(item => item.state.toString() === "1").length ===0)?"justify-center":"justify-start"} gap-y-6 rounded-t-[50px] py-[5vh] overflow-y-scroll scrollbar-hide`}>
            {
        loading?(<div className="w-full h-full flex flex-col items-center justify-start gap-y-6 pt-[1vh]">
          <LoadingTask />
           <LoadingTask />
           <LoadingTask />

          </div>):(tasks.filter(item => item.state.toString() === "1").map((item,i) => (
          <TaskContainer key={i} name={item.name} balance={item?.funds?.toString()} owner={item?.creator?.toString()} active={active} onClick={() => router.push(`/task/${item._id}${item.id.toString()}`)} />
        )))
       }
       {
        !address && (<h1 className="text-white">Connect your wallet!</h1>)
       }
       {
        (address && tasks.filter(item => item.state.toString() === "1").length === 0 && !loading) && <Lottie className="w-[250px] h-[250px]" animationData={nodatafound} />
       }
      </div>
      )
    
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex flex-col justify-center items-center overflow-hidden ">
      <div className="w-[100vw] h-[125px] min-h-[125px]  flex flex-col justify-center   items-center">
       <Gradient/>
        <NavBar />
      </div>
      <div className="w-[90%] h-[100%] flex flex-col items-center justify-start    ">
        <div className="w-[81%] h-[30%]  flex flex-row items-center justify-between  ">
          <div className="w-[25%] h-[40%] bg-[#0A0A0A] flex flex-row items-center justify-center rounded-[20px]   ">
            <button style={{backgroundColor:active ? "#141414" : "#0A0A0A"}} onClick={()=>{setActive(true)}} className="w-[45%] h-[75%] rounded-[15px] duration-500  font-bold font-inter flex items-center justify-center">
              <h1 className={`${active?"text-transparent bg-clip-text bg-gradient-to-r from-[#2C004F] to-[#BD06FD]":"text-white"} text-[16px] font-extrabold`}>Active</h1>
            </button>
            <button style={{backgroundColor:active ? "#0A0A0A" : "#141414"}}  onClick={()=>{setActive(false)}} className="w-[45%] h-[75%]  rounded-[15px] duration-500 ml-[10px] font-bold font-inter flex items-center justify-center">
            <h1 className={`${active === false?"text-transparent bg-clip-text bg-gradient-to-r from-[#2C004F] to-[#BD06FD]":"text-white"} text-[16px] font-extrabold`}>Cancelled</h1>
            </button>
          </div>
          <button onClick={() => router.push("/newtask")} className="text-white text-[14px]  w-[12%] h-[45px] bg-[#DD4747] rounded-[15px]  font-bold font-inter">
            Create Task
          </button>
        </div>
      <CheckActive/>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Dashboard),{ssr:false});
