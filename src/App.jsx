import React,{useState} from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
function App() {
  const [darkTheme,setDarkTheme] = useState(false);
  return (
    <>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <HomePage darkTheme={darkTheme}/>
    </>
  )
}

export default App
