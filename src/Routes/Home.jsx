import React from "react";
import Navbar from "../components/Navbar";
import NewReleaseHighlights from "../components/NewReleaseHighlights";
import ScrollSection from "../components/ScrollSection";
import Footer from "../components/Footer"

export default function Home(){
    return(
        <>
            <Navbar/>
            <NewReleaseHighlights/>
            <ScrollSection sectionName='Trending' />
            <ScrollSection sectionName='Popular Movies' />
            <ScrollSection sectionName='Popular TV Shows' />
            <Footer/>
        </>
    )
}