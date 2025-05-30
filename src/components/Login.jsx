import React from "react";
import { useState,useEffect } from "react";

const LoginClass = ()=>{
  return(
      <>
        <div className="m-4">Username</div>
        <input type="" className="border-blue-300 border-2 w-70 h-10 p-4"/>
        <div className="m-4">Password</div>  
        <input type="password" className="border-blue-300 border-2 w-70 h-10 p-4"/>      
        <button className="m-4 p-2 bg-blue-400 rounded-xl w-30">Submit</button>
      </>
  )
}

const SignUpClass = ()=>{
  return (
    <>
      <div className="m-4">First name</div>
      <input type="text" className="border-blue-300 border-2 w-70 h-10 p-4"/>
      <div className="m-4">Last name</div> 
      <input type="text" className="border-blue-300 border-2 w-70 h-10 p-4"/>  
      <div className="m-4">Username</div>
      <input type="" className="border-blue-300 border-2 w-70 h-10 p-4"/>
      <div className="m-4">Password</div>  
      <input type="password" className="border-blue-300 border-2 w-70 h-10 p-4"/>     
      <button className="m-4 p-2 bg-blue-400 rounded-xl w-30 hover:bg-blue-600 hover:cursor-pointer">Submit</button>
    </>
  )
}

function Login() {

  const [loginSignUpToggle, setToggle] = useState('Login');

  function ToggleLogin(){
    setToggle(prev=>'Login');
  }

  function ToggleSignUp(){
    setToggle(prev=>'Sign Up');
  }

  return (

   <div className="w-100 p-4 pt-4 bg-slate-800 fixed z-10 top-1/2 left-1/2 -translate-1/2 rounded-4xl flex flex-col items-center text-white"> 
        <div className="m-4 flex justify-around w-100">
            <div onClick={ToggleLogin} className="hover:cursor-pointer" >Login</div>
            <div onClick={ToggleSignUp} className="hover:cursor-pointer">Sign Up</div>
        </div>
        {(loginSignUpToggle==='Login')?LoginClass():SignUpClass()}
    </div>
  )
}

export default Login;