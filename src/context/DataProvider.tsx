import React, { createContext, useState } from "react";
import { dataType, userDataType } from "../types/type";

type contextProps={
    children:React.ReactNode;
}

export const DATA_CONTEXT=createContext<dataType|null>(null)
function DataProvider({children}:contextProps) {
    const [email,setEmail]=useState("");
    const [updateInfo,setUpdateInfo]=useState<userDataType|any>({})
    const data:dataType={email,setEmail,updateInfo,setUpdateInfo}
  return (
    <DATA_CONTEXT.Provider value={data}>
        {
            children
        }
    </DATA_CONTEXT.Provider>
  )
}

export default DataProvider;