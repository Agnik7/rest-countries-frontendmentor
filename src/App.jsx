import React,{useState,useEffect} from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import DetailsPage from './pages/DetailsPage';
import jsonData from '../data.json';
import {Routes, Route, useLocation} from 'react-router-dom';
function App() {
  const [darkTheme,setDarkTheme] = useState(false);
  const [data,setData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Fetch or process data from jsonData
    setData(jsonData);
  }, []);
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes location={location} key={location.pathname}>
        <Route index element={<HomePage darkTheme={darkTheme} data={data} />}/>
        <Route path='/detail' element={<DetailsPage darkTheme={darkTheme}/>}/>
      </Routes>
    </>
  )
}

export default App
