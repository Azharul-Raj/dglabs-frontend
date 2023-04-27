import { useState,useEffect } from 'react'
import './App.css'
import MainSection from './components/MainSection';

function App() {
  const [darkMode,setDarkMode]=useState(false);
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setDarkMode(darkModeMediaQuery.matches);
    darkModeMediaQuery.addEventListener('change', event => {
      setDarkMode(event.matches);
    });
  }, []);
  
  return (
    <div className={`flex flex-col dark:bg-[#151B28] justify-center items-center py-10 md:py-40`}>
      <div className="">
      </div>
     <MainSection darkMode={darkMode}/>     
    </div>
  )
}

export default App
