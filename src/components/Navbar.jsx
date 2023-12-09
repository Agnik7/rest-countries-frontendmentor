import React,{useState, useEffect} from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
export default function Navbar({darkTheme,setDarkTheme}) {
  const [text,setText] = useState("Dark");
  const [navClass, setNavClass] = useState("");
  const handleClick = ()=>{
    setDarkTheme(!darkTheme);
    
  }
  useEffect(()=>{
    if(darkTheme)
    {
      setText('Light');
      setNavClass("bg-dark-elem text-[white] w-full flex flex-row items-center justify-between xs:px-[1rem] px-[0] sm:px-[2.5rem] py-[1rem]");

    }
    else
    {
      setText('Dark');
      setNavClass("bg-[white]  w-full flex flex-row items-center justify-between xs:px-[1rem] px-[0] sm:px-[2.5rem] py-[1rem]");
    }
  },[darkTheme]);
  return (
    <div className={navClass}>
      <h1 className=' text-[1rem] xxs:text-[1.5rem] xs:text-[2rem] md:text-[2.375rem] font-nunito font-extrabold'>Where in the world</h1>
      <button onClick={handleClick} className='bg-[transparent] flex justify-between items-center gap-[0.3rem] text-[0.8rem] xs:text-[1rem] md:text-[1.2rem] font-semibold'>
        {(darkTheme)?<LightModeOutlinedIcon/>:<DarkModeOutlinedIcon/>}        
        <span>{text} Mode</span>
      </button>
    </div>
  )
}
