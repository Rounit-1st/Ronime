import React, { useState , useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import ScrollSection from "../components/ScrollSection"

function deleteAccount(userID,secret_key){
    
}

function editAccount(){

}

export default function User(props){
    
    return(
        <div className="bg-slate-950 min-h-lvh h-fit text-white">
        <Navbar />
        <div className="flex flex-col items-center">
            <div className="bg-[url('/mainbg.jpg')] h-40 w-40 bg-cover bg-center rounded-full mt-24 border-2 border-blue-300 "></div>
            <h3 className="text-2xl p-4 font-bold">{props.userID}</h3>
            <h4 className="text-xl ">{props.userName}</h4>
        </div>
        <ScrollSection sectionName="My WatchList"/>
        <ScrollSection sectionName="Watch History"/>
        <div className="flex flex-col text-red-200 p-16 bg" >
            <h6 className="p-4 m-4">Account Management</h6>
            <button className="border-2 border-blue-600 p-2 m-4 rounded-xl hover:cursor-pointer hover:bg-blue-400 text-blue-200" onClick={editAccount}> Edit Profile</button>
            <button className="border-2 border-red-600 p-2 m-4  rounded-xl hover:cursor-pointer hover:bg-red-400 " onClick={deleteAccount(props.userID)} >Delete Account</button>
        </div>
        </div>
    )
}