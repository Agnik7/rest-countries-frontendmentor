import React,{useState,useEffect} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import data from '../../data.json';
export default function DetailsPage({darkTheme}) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const countryData = state?.countryData;
    const [detailsClass,setDetailsClass] = useState("");
    const [buttonClass, setButtonClass] = useState("");
    const [borderClass, setBorderClass] = useState("");

    const getFullNameByCode = (code) => {
        const country = data.find((country) => country.alpha3Code === code);
        return country ? country.name : code; // Return full name if found, otherwise return the code
      };

    useEffect(()=>{
        if(darkTheme)
        {
            setDetailsClass("min-h-screen bg-dark-bg text-white p-[2rem] font-nunito");
            setButtonClass("bg-dark-elem mb-[2rem] px-[1rem] py-[0.5rem] rounded-sm shadow-md flex gap-2");
            setBorderClass("bg-dark-elem rounded-sm shadow-md px-[1.5rem] py-[0.5rem]");
        }
        else{
            setDetailsClass("min-h-screen bg-light-bg p-[2rem] font-nunito");
            setButtonClass("bg-white mb-[2rem] px-[1rem] py-[0.5rem] rounded-sm shadow-md flex gap-2");
            setBorderClass("bg-white rounded-sm shadow-md px-[1.5rem] py-[0.5rem]");
        }
    },[darkTheme]);
  return (
    <div className={detailsClass}>
        <button className={buttonClass} onClick={()=>{navigate('/')}}>
            <KeyboardBackspaceIcon/>
            <span className='font-semibold'>Back</span>
        </button>
        <div className='flex flex-col sm:flex-row sm:gap-[3rem] lg:gap-[5rem] xlg:gap-[8rem] xxlg:gap-[10rem]' >
            <img src={countryData.flag} className='mt-[2rem] w-full sm:w-[20rem] lg:w-[25rem] sm:h-[20rem] lg:h-[25rem] object-cover xlg:w-[45rem]' alt="" />
            <div className='my-[2rem] py-[2rem]'>
                <h1 className='text-[1.5rem] font-extrabold mb-[2rem]'>{countryData.name}</h1>
                <div className='flex justify-between flex-wrap '>
                    <div>
                        <h2 className='font-extrabold mb-[1rem]'>Native Name: <span className='font-semibold'>{countryData.nativeName}</span></h2>
                        <h2 className='font-extrabold mb-[1rem]'>Population: <span className='font-semibold'>{countryData.population}</span></h2>
                        <h2 className='font-extrabold mb-[1rem]'>Region: <span className='font-semibold'>{countryData.region}</span></h2>
                        <h2 className='font-extrabold mb-[1rem]'>Capital: <span className='font-semibold'>{countryData.capital}</span></h2>
                    </div>
                    <div>
                        <h2 className='font-extrabold my-[1rem] sm:my-[0] sm:mb-[1rem]'>Top Level Domain: <span className='font-semibold'>{countryData.topLevelDomain}</span></h2>
                        <h2 className='font-extrabold my-[1rem]'>
                            Currencies:&nbsp;
                            <span className='font-semibold'>
                                {countryData.currencies.map((currency, index) => (
                                <span key={index}>{currency.name}{index < countryData.currencies.length - 1 ? ', ' : ''}</span>
                                ))}
                            </span>
                        </h2>
                        <h2 className='font-extrabold my-[1rem]'>
                            Languages:&nbsp;
                            <span className='font-semibold'>
                                {countryData.languages.map((language, index) => (
                                <span key={index}>{language.name}{index < countryData.languages.length - 1 ? ', ' : ''}</span>
                                ))}
                            </span>
                        </h2>

                    </div>

                </div>
                <div>
                <h2 className='font-extrabold mt-[2rem] mb-[1rem]'>
                    Borders: 
                </h2>
                <div className='flex gap-2 font-semibold flex-wrap'>
                    {countryData.borders.map((border, index) => (
                    <span key={index} className={borderClass}>{getFullNameByCode(border)}</span>
                    ))}
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
