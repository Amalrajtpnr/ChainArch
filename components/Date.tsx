import React from "react";

type props = {
  date:number;
  hash:string;
  price:number | string
}

function Execution({ date, hash,price }:props) {

  const getDate = () => {
    const time = new Date(date)
    return `${time.getHours()> 12?(time.getHours()-12 < 10?`0${time.getHours()-12}`:time.getHours()-12):(time.getHours()<10?`0${time.getHours()}`:time.getHours())} : ${time.getMinutes()<10?`0${time.getMinutes()}`:time.getMinutes()} ${time.getHours() < 12?"AM":"PM"} - ${time.getDay()<10?`0${time.getDay()}`:time.getDay()}/${time.getMonth()<10?`0${time.getMonth()}`:time.getMonth()}/${time.getFullYear()}`
  }

  return (
    <div className="h-[7%] w-[95%] flex justify-between items-center mt-3 px-4 box-border">
      <h1 className="text-[#9b9494] text-[11px]">{getDate()}</h1>
      <a target={"_blank"} href={`https://goerli.etherscan.io/tx/${hash}`} className="text-[#9b9494] text-[11px] hover:underline" rel="noreferrer">
        0x...{hash.slice(hash.length - 20,hash.length)}
      </a>
      <h1 className="text-[#9b9494] text-[11px]">{price.toString().slice(0,10)} ETH</h1>
    </div>
  );
}

export default Execution;
