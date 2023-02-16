import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import TaskContainer from "../../components/TaskContainer";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { getSignedContract } from "../../utils/helper-function";
import { useAccount, useContractEvent } from "wagmi";
import axios from "axios";
import { ABI } from "../../constants/constants";


function Dashboard() {
  const [active, setActive] = useState(false);
  const { address } = useAccount()
  const router = useRouter();
  const [tasks, setTasks] = useState<any[]>([])
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

  const getTasks = async() =>{
    await axios.get(`http://localhost:5001/api/tasks`).then(async(res) => {
      const { contract } = await getSignedContract()
      const tasks = await contract.getAllTasks();
      const filtered = tasks.filter((item:any) => item.creator.toString().toLowerCase() === address?.toLowerCase())
      setTasks(filtered.map((item:any) => {
        const task = res.data.filter((val:any) => val.address.toString()===item.taskAddress.toString())
        return {
          ...item,
          id:task[0]?._id,
          name: task[0]?.taskName
        }
      }))
    })    
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
  },[])

  function CheckActive() {
    if (active === true) {
      return(
        <div className="w-[90%] h-[480px] flex flex-col items-center justify-start gap-y-6  ">
        {
          tasks.filter(item => item.state.toString() === "0").map((item,i) => (
            <TaskContainer key={i} name={item.name} balance={item?.funds?.toString()} owner={item?.creator?.toString()} active={active} />
          ))
        }
      </div>
      )
    
    } else {
      return(
        <div className="w-[90%] h-[480px] flex flex-col items-center justify-start gap-y-6  ">
        {
          tasks.filter(item => item.state.toString() === "1").map((item,i) => (
            <TaskContainer key={i} name={item.name} balance={item?.funds?.toString()} owner={item?.creator?.toString()} active={active} />
          ))
        }
      </div>
      )
    
    }
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex flex-col justify-center items-center overflow-hidden ">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-10  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>
      <div className="w-[100vw] h-[125px] min-h-[125px]  flex flex-col justify-center   items-center">
        <NavBar />
      </div>
      <div className="w-[90%] h-[100%] flex flex-col items-center justify-start    ">
        <div className="w-[85%] h-[100px] flex flex-row items-center justify-between  ">
          <div className="w-[30%] h-[100px] flex flex-row items-center justify-center  ">
            <button onClick={()=>{setActive(true)}} className="text-white text-[12px]  w-[40%] h-[50px] bg-[#141414] rounded-[15px] border border-[#141414]  font-bold font-inter">
              Active Task
            </button>
            <button onClick={()=>{setActive(false)}} className="text-white text-[12px]  w-[40%] h-[50px] bg-[#141414] rounded-[15px] border ml-[10px] font-bold font-inter">
              Cancelled
            </button>
          </div>
          <button onClick={() => router.push("/newtask")} className="text-white text-[12px]  w-[10%] h-[50px] bg-[#DD4747] rounded-[15px] border  font-bold font-inter">
            Create Task
          </button>
        </div>
      <CheckActive/>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(Dashboard),{ssr:false});
