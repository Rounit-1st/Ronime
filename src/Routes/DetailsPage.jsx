import React from "react";
import Navbar from "../components/Navbar";
import Details from "../components/Details"
import ScrollSection from "../components/ScrollSection";
import Footer from "../components/Footer"
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsFetcher from "../Api/DetailsFetcher";



export default function DetailsPage(){

    const { id } = useParams();
    const [detailsObject, setDetailsObject] = useState([]) ;

    useEffect(()=>{
        async function fetchDetails(unique_id){
            var a = await DetailsFetcher(unique_id)
            setDetailsObject(prev=>a);
        }
        fetchDetails(id);
    },[])
    return(
        <>
            <Navbar/>
            <Details 
                rating={detailsObject.rating}
                status={detailsObject.status}
                dates={detailsObject.dates}
                title={detailsObject.title}
                // tag={detailsObject.tags}
                image={detailsObject.image}
                description={String(detailsObject.description).substring(0,200)+"..."}

            />
            <ScrollSection sectionName='You Might Also Like'/>
            <Footer/>
        </>
    )
}