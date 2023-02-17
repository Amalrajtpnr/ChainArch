import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import TaskContainer from "../../components/TaskContainer";
import Gradient from "../gradient";

function Dashboard() {
  const [active, setActive] = useState(false);

  function CheckActive() {
    if (active === true) {
      return(
        <div className="w-[90%] h-[480px] flex flex-col items-center justify-start gap-y-6  ">
        <TaskContainer name="active"  active={active} />
        <TaskContainer name="active"  active={active} />
        <TaskContainer name="active"  active={active} />
        
      </div>
      )
    
    } else {
      return(
        <div className="w-[90%] h-[480px] flex flex-col items-center justify-start gap-y-6  ">
        <TaskContainer name="cancelled" active={active}  />
        <TaskContainer name="cancelled" active={active}  />
        <TaskContainer name="cancelled" active={active}  />
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
            <button style={{backgroundColor:active ? "#141414" : "#0A0A0A"}} onClick={()=>{setActive(true)}} className="text-white text-[12px]  w-[45%] h-[70%] rounded-[15px]   font-bold font-inter">
              Active Task
            </button>
            <button style={{backgroundColor:active ? "#0A0A0A" : "#141414"}}  onClick={()=>{setActive(false)}} className="text-white text-[12px]  w-[45%] h-[70%]  rounded-[15px]  ml-[10px] font-bold font-inter">
              Cancelled
            </button>
          </div>
          <button className="text-white text-[14px]  w-[12%] h-[45px] bg-[#DD4747] rounded-[15px] border  font-bold font-inter">
            Create Task
          </button>
        </div>
    <CheckActive/>
      </div>
    </div>
  );
}

export default Dashboard;
