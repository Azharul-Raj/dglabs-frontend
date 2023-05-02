import { useState,useEffect } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

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
    <Routes>
      <Route path='/' element={<Home darkMode={darkMode}/>}/>
      <Route path='/dashboard' element={<Dashboard darkMode={darkMode} />}/>
    </Routes>
  )
}

export default App
