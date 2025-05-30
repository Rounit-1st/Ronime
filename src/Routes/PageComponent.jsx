import React from "react";
import Navbar from "../components/Navbar";
import ScrollSectionFetcher from "../Api/ScrollSectionFetcher";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function cardCreate(result){
    if(result==null)return (<>Loading...</>)
    return (
        <div className="w-56 m-8"><a href={"/details/"+result.id} ><Card url ={result.image}  title={result.title} rating={'⭐' + result.rating} year={result.year?result.year:"N/A"}/></a></div>
    )
}

export default function PageComponent(props){
    
    const [fetchedData, SetFetchedData]= useState([]);
        
        useEffect(()=>{
            const fetchData = async (q)=>{
                var a 
                if(props.pageName==='Movies'){
                    a = await ScrollSectionFetcher('movie');
                }
                else if(props.pageName === 'TV Shows'){
                    a = await ScrollSectionFetcher('tv');
                }
                else if(props.pageName === 'Watch List'){}
                setTimeout(()=>{SetFetchedData(prev=>a);},500);
            } 
            fetchData();     
        },[])
    
    return(
        <>
            <Navbar/>
            <div className="bg-slate-950 text-white min-h-lvh">
                <h1 className="font-bold text-4xl pt-32 p-8">
                    {props.pageName}
                </h1>
                {(props.pageName!='Watch List')?<div className="mt-4">
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 m-4 hover:cursor-pointer hover:text-black hover:bg-white">Sci-fi</button>
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 hover:cursor-pointer hover:text-black hover:bg-white">Drama</button>
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 m-4 hover:cursor-pointer hover:text-black hover:bg-white">Romantic</button>
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 m-4 hover:cursor-pointer hover:text-black hover:bg-white">Action</button>
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 m-4 hover:cursor-pointer hover:text-black hover:bg-white">Animation</button>
                  <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl ml-8 m-4 hover:cursor-pointer hover:text-black hover:bg-white">Action</button>
                </div>:<></>}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center p-8">
                    {fetchedData.map(result=>cardCreate(result))}
                </div>
            </div>
        </>
    )
}