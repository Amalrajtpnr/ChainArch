import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function NavBar() {
  const router=useRouter()

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 15 );
      setPrevScrollPos(currentScrollPos);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, 30000); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  
  return (
    <div style={{ top: visible ? '0' : '-200px' }} className="min-h-[125px]  w-[100vw] lg:min-h-[125px]  lg:w-[100vw]  sm:min-h-[30px]   flex flex-row justify-end  items-center fixed -top-1 z-100 bg-transparent backdrop-blur-2xl ">
      <div className="w-[67%] h-[120px] sm:min-h-[30px]  flex flex-row justify-around  items-center">
        <h1 onClick={()=>router.push("/Dashboard")} className="text-white text-[18px] md:text-[15px] md:font-semibold font-bold font-inter">
          Dashboard
        </h1>
        <h1 onClick={()=>router.push("/creatingAutomation")} className="text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Docs{" "}
        </h1>
        <h1 onClick={()=>router.push("/contactUs")} className="text-white text-[18px] md:text-[15px] md:font-semibold   font-bold font-inter">
          Contact Us
        </h1>
        <button className="text-white text-[18px] md:text-[15px] md:font-semibold md:[30%] w-[19%] h-[45px] rounded-[18px] border  border-[#8C3BBE]  font-bold font-inter">
          0x..edfdyshggh
        </button>
        <button className="text-white text-[18px] md:text-[15px] md:font-semibold   w-[19%] h-[45px] bg-gradient-to-r from-[#2C004F] to-[#BD06FD] rounded-[18px] mr-[20px]  font-bold font-inter">
          Disconnect
        </button>
      </div>
    </div>
  );
}

export default NavBar;
