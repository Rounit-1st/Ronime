import React, { useState , useEffect } from "react";
import Navbar from "../components/Navbar";
import NewReleaseHighlights from "../components/NewReleaseHighlights";
import ScrollSection from "../components/ScrollSection";
import Card from "../components/Card";
import Searcher from "../Api/Searcher";
import { useParams } from "react-router-dom";

function cardCreate(result){
    if(result==null)return (<>Loading...</>)
    return (
        <a href={"/details/"+result.id} ><Card url ={result.image}  title={result.title} rating={'⭐' + result.rating} year={result.year}/></a>
    )
}

export default function Search(){

    //get Query from URL
    var { query } = useParams();

    const [fetchedData, SetFetchedData]= useState([]);
    
    useEffect(()=>{
        const fetchData = async (q)=>{
            var a = await Searcher(q);
            SetFetchedData(prev=>a);
        } 
        fetchData(query);     
    },[query])
    
    return(
        <>
            <Navbar/>
            {/* Agar in future koi gardar huwa to uska zimmwdar yeh min-h-lvh niche wala hoga in context to extra white space */}
            <div className="bg-slate-950 text-white min-h-lvh">
                <h1 className="font-bold text-4xl pt-32 p-8">
                    Search Result for {'"'+query+'"'}
                </h1>
                <h4 className="text-4xl p-4 ml-8">Movies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 place-items-center p-8">
                    {fetchedData.map(result=>cardCreate(result))}
                </div>
            </div>
        </>
    )
}