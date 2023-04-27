import React from 'react'
import "./Switch.css"

type SwitchProps={
    darkMode:boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
function Switch({darkMode,setDarkMode}:SwitchProps) {
    return (
        <>
        {/* <button onClick={()=>setDarkMode(!darkMode)}>Hi</button> */}
            <label  className="switch">
                <input onClick={()=>setDarkMode(!darkMode)} type="checkbox" />
                <span className="slider"></span>
            </label>
        </>
    )
}

export default Switch