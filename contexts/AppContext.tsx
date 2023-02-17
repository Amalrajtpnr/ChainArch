import React, { useContext, useState } from "react";

type Context = {
    optionsVisible:boolean;
    setOptionsVisible:React.Dispatch<React.SetStateAction<boolean>>;
    taskModalVisible:boolean;
    setTaskModalVisible:React.Dispatch<React.SetStateAction<boolean>>;
    gasLimitModalVisible:boolean;
    setGasLimitModalVisible:React.Dispatch<React.SetStateAction<boolean>>;
    withdrawModalVisible:boolean;
    setWithdrawModalVisible:React.Dispatch<React.SetStateAction<boolean>>;
}

type ContextProvider = {
    children:React.ReactNode
}

 const appContext = React.createContext<Context>({} as Context )


const AppContextProvider = ({ children }:ContextProvider) => {
   const [optionsVisible,setOptionsVisible] = useState<boolean>(false)
   const [taskModalVisible,setTaskModalVisible] = useState<boolean>(false)
   const [gasLimitModalVisible,setGasLimitModalVisible] = useState<boolean>(false)
   const [withdrawModalVisible,setWithdrawModalVisible] = useState<boolean>(false)



   const value = { optionsVisible,setOptionsVisible,taskModalVisible, setTaskModalVisible,gasLimitModalVisible,setGasLimitModalVisible,withdrawModalVisible,setWithdrawModalVisible }
    return(
        <appContext.Provider value={value}>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext:() => Context = () => useContext(appContext);

export default AppContextProvider
