import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
export default function Card({data,darkTheme}) {
  const navigate=useNavigate();
  const [cardClass, setCardClass] = useState("");
  const handleCardClick = () => {
    // Navigate to the 'detail' path and pass country data as state
    navigate('/detail', { state: { countryData: data } });
  };
  useEffect(()=>{
    if(darkTheme)
    {
      setCardClass("max-w-[20rem] bg-dark-elem text-[white] shadow-sm hover:cursor-pointer hover:bg-gray-700 font-nunito rounded-md");
    }
    else
    {
      setCardClass("max-w-[20rem] bg-white shadow-sm hover:cursor-pointer font-nunito rounded-md");
    }
  },[darkTheme]);
  return (
    <div className={cardClass} onClick={handleCardClick}>
        <img src={data.flag} className='w-full h-[10rem] object-cover rounded-tl-md rounded-tr-md' alt="Country Flag" />
        <div className='m-[2rem]'>
            <h1 className='text-[1.2rem] font-extrabold mb-[1rem]'>{data.name}</h1>
            <h2 className='font-extrabold'>Population: <span className='font-semibold'>{data.population}</span></h2>
            <h2 className='font-extrabold'>Region: <span className='font-semibold'>{data.region}</span></h2>
            <h2 className='font-extrabold'>Capital: <span className='font-semibold'>{data.capital}</span></h2>
        </div>
    </div>
  )
}
