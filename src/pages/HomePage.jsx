import React,{useState, useEffect} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from '../components/Card';
export default function HomePage({darkTheme, data}) {
  const [pageClass,setPageClass] = useState("");
  const [inputClass,setInputClass] = useState("");
  const [filterClass,setFilterClass] = useState("");
  const [openClass,setOpenClass] = useState("");
  const [optionsClass,setOptionsClass] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const options = [
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
  ];

  const filteredDataByRegion = selectedOption
  ? data.filter((item) => item.region === selectedOption)
  : data;
  const filteredData = filteredDataByRegion.filter((item) =>
  item.name.toLowerCase().includes(searchInput.toLowerCase())
);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  useEffect(()=>{
    if(darkTheme)
    {
      setPageClass("w-full min-h-screen bg-dark-bg");
      setInputClass("block bg-dark-elem text-[white] w-full sm:w-[20rem] lg:w-[25rem] p-4 ps-10  placeholder:font-nunito placeholder:text-light-bg rounded-md shadow-sm outline-none");
      setFilterClass("inline-flex justify-center outline-none border-none gap-[2rem] font-semibold text-[1.1rem] text-white rounded-md items-center px-4 py-[1rem] shadow-sm bg-dark-elem hover:bg-gray-700 focus:outline-none ");
      setOpenClass("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg font-semibold bg-dark-elem text-white ring-1 ring-black ring-opacity-5");
      setOptionsClass("block w-full px-4 py-2 text-left text-white hover:bg-gray-700 hover:text-gray-50");
    }
    else
    {
      setPageClass("w-full min-h-screen bg-light-bg");
      setInputClass("block w-full sm:w-[20rem] lg:w-[25rem] p-4 ps-10  placeholder:font-nunito rounded-md shadow-sm outline-none")
      setFilterClass("inline-flex justify-center outline-none border-none gap-[2rem] font-semibold text-[1.1rem] rounded-md items-center px-4 py-[1rem] shadow-sm bg-white hover:bg-gray-50 focus:outline-none ");
      setOpenClass("origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg font-semibold bg-white ring-1 ring-black ring-opacity-5");
    }
  },[darkTheme]);
  return (
    <div className={pageClass}>
        <div className='p-[2rem] flex sm:justify-between sm:items-center flex-col sm:flex-row gap-[2rem]'>
          <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div class="relative w-full sm:w-auto">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="text" id="search" class={inputClass} value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} placeholder="Search for a country..." required />
              
          </div>
          <div className="dropdown">
            {/* <div className='flex justify-between items-center gap-[2rem] px-[1rem]' onClick={()=>{setContentHidden(!contentHidden)}}>
              <span>Filter by Region</span>
              <KeyboardArrowDownIcon/>
            </div> */}
            <div className="relative inline-block font-nunito text-[1.1rem] text-left">
              <div>
                <button
                  type="button"
                  className={filterClass}
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={handleToggle}
                >
                  <p>{selectedOption || 'Filter by region'}</p>
                  <KeyboardArrowDownIcon/>
                </button>
              </div>

              {isOpen && (
                <div className={openClass}>
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {options.map((option) => (
                      <button
                        key={option}
                        className={optionsClass}
                        role="menuitem"
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      <div className='w-full flex justify-center items-center'>
        <div className='px-[2rem]  sm:w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem]'>
          {filteredData.map((item) => (
            <Card key={item.id} data={item} darkTheme={darkTheme} />
          ))}
        </div>
      </div>
    </div>
  )
}
