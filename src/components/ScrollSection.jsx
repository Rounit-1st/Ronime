import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import ScrollSectionFetcher from "../Api/ScrollSectionFetcher";
import RecommendAnime from "../Api/RecommendAnime";
import { useParams } from "react-router-dom";

function createCard(object){
  return (
    <a href={"/details/"+object.id}><Card url={object.image} title={object.title} year={object.year} rating={"⭐ "+object.rating}/></a>
  )
}

function ScrollSection(props){

  const { id } = useParams();
  // console.log("dd",id);

  const [fetchedData,setFetchData]= useState([]);

  useEffect(()=>{
    async function fetcher(){
      var tempDataStorer;
      if(props.sectionName==='Popular Movies'){
        tempDataStorer = await ScrollSectionFetcher(`movie`)
      }
      else if(props.sectionName==='Trending'){
        tempDataStorer = await ScrollSectionFetcher(`type=ova&&type=special&&type=ona&&type=music&&type=cm&&type=pv&&type=tv_special`)
      }
      else if(props.sectionName==='Popular TV Shows') {
        tempDataStorer = await ScrollSectionFetcher(`tv`)
      }
      else if(props.sectionName==='You Might Also Like'){
        tempDataStorer = await RecommendAnime(id);
      }
      else{
        return 0;
      }
      setFetchData(tempDataStorer);
    }
    fetcher();
  },[])  

  return (
   <div className="bg-slate-950 text-white p-8">
    <h4 className="text-2xl p-4">{props.sectionName}</h4>
    <div className="flex overflow-scroll gap-4 lg:gap-8">
        {/* Card element */}
        {fetchedData.map(result=>createCard(result))}
    </div>
   </div>
  )
}

export default ScrollSection;
