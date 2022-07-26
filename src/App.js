
import { useState } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import MobileMenu from './components/mobileMenu';
import GlobalCSS from './global.css';
import Destination from './components/destination';
import Crew from './components/crew';
import Tech from './components/technology'
import {Routes,Route } from "react-router-dom"
import data from './assets/data.json'


function App() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
    <GlobalCSS/>
    <Header handleMenu = {handleMenu}/>
    {openMenu && <MobileMenu handleMenu = {handleMenu}/>}
    
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/destination' element={<Destination data={data.destinations}/>}/>
      <Route path='/crew' element={<Crew data={data.crew}/>}/>
      <Route path='/technology' element={<Tech data={data.technology}/>}/>
   </Routes>
    </>
  );
}

export default App;
