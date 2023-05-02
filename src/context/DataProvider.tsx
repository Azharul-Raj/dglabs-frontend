import React, { createContext, useState } from "react";

type contextProps={
    children:React.ReactNode;
}
type dataType={
        email:string;
        setEmail:React.Dispatch<React.SetStateAction<string>>;
    
}
export const DATA_CONTEXT=createContext<dataType|null>(null)
function DataProvider({children}:contextProps) {
    const [email,setEmail]=useState("")
    const data:dataType={email,setEmail}
  return (
    <DATA_CONTEXT.Provider value={data}>
        {
            children
        }
    </DATA_CONTEXT.Provider>
  )
}

export default DataProvider;