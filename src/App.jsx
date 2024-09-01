import { useState,useEffect } from 'react'

import './App.css'
import { ThemeMaker } from './Context/Theme'
import ThemeBtn from "./Components/ThemeBtn"
import Card from "./Components/Card"

function App() {
  const [bgTheme,setBgtheme] = useState("light")
  const darkTheme=()=>{
    setBgtheme("dark")
  }
  const lightTheme = ()=>{
    setBgtheme("light")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(bgTheme)
  },[bgTheme])

  return (
    <>
      <ThemeMaker value={{bgTheme,darkTheme,lightTheme}}>
        <div className='bg-white p-3 flex justify-center'>
        <div>
        <ThemeBtn/>
        <Card/>
        </div>
        </div>
      </ThemeMaker>
    </>
  )
}

export default App
