import React,{useState} from 'react'
import ChangeTheme from "../Context/Theme"

function ThemeBtn() {
  const {lightTheme,darkTheme}=ChangeTheme()

  const [enable,setEnable] = useState(true)
  const [hid1,setHid1]=useState("")
  const [hid2,setHid2] = useState("hidden")
  const hide = ()=>{
    if(enable){
      setHid1("hidden")
      setHid2("")
      setEnable(false)
      darkTheme()
    }else{
      setHid1("")
      setHid2("hidden")
      setEnable(true)
      lightTheme()
    }
  }
  return (
    <>
      <div className='flex justify-end'>
      <div className='flex'>
      <button><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/toggle-button-5060398-4214703.png?f=webp&w=256" alt="" onClick={hide} className={`${hid1} h-20 w-20`}/></button>
      <button><img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/toggle-button-5054553-4214535.png?f=webp&w=256" alt="" onClick={hide} className={`${hid2} h-20 w-20 `}/></button>
      <div className='mt-8 ml-2'>theme button</div>
      </div>
      </div>
    </>
  )
}

export default ThemeBtn
