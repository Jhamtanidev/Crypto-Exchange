import { MainPage, CommingSoonPage } from './components/index'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import logo from '../images/logo.png'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import React from 'react';

const App = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <>
      <BrowserRouter>
        <div className='gradient-bg-welcome'>
          <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
              <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
              <Link to="/">Home</Link>
              <Link to="/commingsoon-page" className="ml-[0.7rem]">Exchange</Link>
            </ul>
            <div className="flex relative">
              {!toggleMenu && (
                <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
              )}
              {toggleMenu && (
                <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
              )}
              {toggleMenu && (
                <ul
                  className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
                >
                  <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
                  <Link to="/">Home</Link>
                  <Link to="/commingsoon-page" className="ml">Exchange</Link>
                </ul>
              )}
            </div>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/commingsoon-page' element={<CommingSoonPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
