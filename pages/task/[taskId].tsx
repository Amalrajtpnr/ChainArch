import React, { useState } from "react";
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

function Task() {
  const [optionsvisible, setoptionsvisible] = useState(false);
  const [addfundvissible, Setaddfundvissible] = useState(false);
  const [gaslimitvissible, Setgaslimitvissible] = useState(false);
  const [txmodalVisible, setTxModalVisible] = useState(false);

  return (
    <div className="h-[100vh] w-[100vw] bg-[#000000] absolute flex overflow-hidden">
      <div className=" h-[50px] w-[50px] bg-[#26E5FF] rounded-full absolute -top-28  opacity-40  overflow-hidden left-[95%]  shadow-[0px_0px_790px_350px_rgba(0,0,0,0.3)] shadow-[#B200FF]"></div>

      <div className=" h-[100vh] w-[100vw] bg-transparent fixed top-0 z-100 backdrop-blur-[10px] flex justify-center items-center">
        <NavBar />
        {addfundvissible && (
          <Addfund
            onClick={() => {
              Setaddfundvissible(!addfundvissible);
            }}
            onSubmit={() => {
              setTxModalVisible(true);
              Setaddfundvissible(!addfundvissible);
            }}
          />
        )}

        {gaslimitvissible && (
          <Gaslimit
            onClick={() => {
              Setgaslimitvissible(!gaslimitvissible);
              Setaddfundvissible(!addfundvissible);
            }}
          />
        )}
        {txmodalVisible && (
          <Transactionprogress onClick={() => setTxModalVisible(false)} />
        )}

        <div className="h-[80%] w-[40%]  flex items-start justify-center flex-col  mr-36 mt-20  ml-14 pl-10 box-border ">
          <div className="h-[10%] w-[100%]  flex justify-between items-center -mt-10 relative z-0">
            <h1 className="text-2xl font-bold text-white">Task Name</h1>
            <Settings onClick={() => setoptionsvisible(!optionsvisible)} />
            {optionsvisible && (
              <div className="min-h-[29px] w-[110px] bg-[#2320207f] rounded-md absolute z-0 left-[245px] top-14 flex flex-col items-center justify-evenly border-[1px] border-[#ffffff40]">
                <div
                  onClick={() => {
                    setoptionsvisible(false);
                    Setaddfundvissible(!addfundvissible);
                  }}
                  className="h-[29px] w-[110px] flex items-center justify-center border-b-[1px]  border-b-[#ffffff40] "
                >
                  {" "}
                  <h1 className=" text-xs text-white font-medium">Add fund</h1>
                </div>
                <div
                  onClick={() => {
                    setoptionsvisible(false);
                    Setgaslimitvissible(!gaslimitvissible);
                  }}
                  className="h-[29px] w-[110px] flex items-center justify-center"
                >
                  {" "}
                  <h1 className=" text-xs font-medium text-white">
                    Update Gas Limit
                  </h1>
                </div>
              </div>
            )}
          </div>

          <Active />
          <Spanaddress />
          <Address />
        </div>

        <div className="h-[75%] w-[40%]  flex items-center justify-evenly flex-col  mr-36 mt-28 border-[1px] border-[#5b5757] rounded-[18px] bg-gradient-to-b from-[#2a1111] to-[#000000]  p-[2px] box-border ">
          <h1 className="text-2xl font-semibold text-white">Last executions</h1>
          <div className="h-[89%] w-[96%]  flex items-center justify-center flex-col bg-gradient-to-tr from-[#000000] to-[#2c0b0b] border-[1px] border-[#5b5757]  rounded-[16px]">
            <Datehead />
            <div className="min-h-[360px] w-[100%]  flex justify-between items-center flex-col rounded-2xl mt-2 overflow-y-scroll scrollbar-hide ">
              <Date />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;