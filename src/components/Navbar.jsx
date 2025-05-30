import React from "react";
import Unknown from "./unknown";
import Login from "./Login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MenuPopUp(){
  return (
    <div className=" bg-slate-800 fixed z-10 rounded-4xl top-24 left-16 flex flex-col text-white items-center p-4">
      <Unknown name="Home" url='/' />
      <Unknown name="Movies" url='/movies' />
      <Unknown name="TV Shows" url='/tv_shows' />
      <Unknown name="Profile" url='/user/me' />
      <Unknown name="Watchlist" url = '/watchlist/me' />
      <Unknown name="Discord" />
    </div> 
  )
}

function SearchBarPopUp(){

  const navigate = useNavigate();

  function urlChanger(){
    var query = document.getElementById('query');
    setTimeout(()=>{navigate(`/search/${query.value}`)},500)
  }

  return (
    <div className=" bg-slate-800 fixed z-10 rounded-4xl flex text-white items-center p-4 w-3/4 max-w-200 justify-between top-1/4 left-1/2 -translate-1/2">
      <input id="query" type="text" placeholder="Type your anime name ..." className="w-1/1 p-4 rounded-xl"/>
      <div onClick={urlChanger}><button className="m-4 p-2 bg-blue-500 hover:bg-blue-700 rounded-xl hover:cursor-pointer">Search</button></div>
    </div>
  )
}

function Navbar() {
  // MenuPopUp Handling
  const [openMenu, ChangeMenuState] = useState(0);
  const toggleMenu=()=>{ChangeMenuState(a=>(a+1)%2); ChangeSerachBarState(0); ChangeLoginState (0)}

  const [openSearchBar, ChangeSerachBarState] = useState(0);
  const toggleSearchBar=()=>{ChangeMenuState(0); ChangeSerachBarState(a=>(a+1)%2); ChangeLoginState (0)}

  const [openLogin, ChangeLoginState] = useState(0);
  const toggleLogin=()=> {ChangeMenuState(0); ChangeSerachBarState(0); ChangeLoginState (a=>(a+1)%2) };

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-4 fixed w-full z-10">
          <div className="flex flex-row ml-8 items-center">
              <button onClick={toggleMenu} className="backdrop-blur-md bg-blue-500/10 rounded-full p-5 hover:cursor-pointer hover:bg-slate-800/30"><svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='24px'><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg></button>
              <a href='/'><div className="bg-[url('/ronime.png')] bg-cover bg-center w-15 h-20 ml-8"></div></a>
          </div>
          <div className="flex flex-row mr-8">
              <button onClick={toggleSearchBar} className="backdrop-blur-md bg-blue-500/10 rounded-full p-6 w-16 h-16 hover:cursor-pointer hover:bg-slate-800/30"><svg fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16px'><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
              <button onClick={toggleLogin} className="ml-3 rounded-2xl p-0.5 bg-blue-400 w-24 text-white h-15 hover:cursor-pointer hover:bg-blue-700 ">Login</button>
          </div> 
      </div>
      
      {/* menu */}
      {openMenu===1 && <MenuPopUp/>}

      {/* Search Bar */}
      {openSearchBar===1 && <SearchBarPopUp/>}

      {/* Login */}
      {openLogin===1 && <Login/>}
    </>
  )
}

export default Navbar;
