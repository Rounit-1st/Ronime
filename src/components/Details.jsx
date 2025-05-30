import React from "react";



export default function Details(props){

    return (
        <div className="bg-slate-950">  
            {/* Background Image Div */}
            <div className="bg-cover bg-center bg-[url('mainbg.jpg')] min-h-80 w-1vw bg-white/80 backdrop-brightness-0 text-white -z-10" style={{backgroundImage: `url('${props.image}')`}}> 
               {/* Gradient Div */}
               <div className="bg-gradient-to-t from-black/100 to-transparent bg-blend-darken h-80">
                    
               </div>
            </div>

            <div className="flex flex-wrap -mt-50 z-5 relative  text-white p-4">
                {/* Smaller Poster Image */}
                <div className="overflow-hidden w-60  rounded-4xl m-4 bg-amber-700"><div className={`bg-cover bg-center w-60 h-full  group-hover:cursor-pointer hover:scale-110`} style={{ backgroundImage: `url('${props.image}')` }}></div></div>
                {/* Text Content */}
                <div className="max-w-100 ">
                    {/* Title */}
                    <div className="text-5xl font-bold Font-style font-sherif m-2 mt-8">{props.title}</div>
                    {/* Tag 1 */}
                    <div className="flex ">
                          <h5 className="m-2">{props.dates}</h5>
                          <h5 className="m-2">{props.status}</h5>
                          <h5 className="m-2">{'⭐ '+props.rating}</h5>
                    </div>

                    {/* Tag 2 */}
                    <div className="mt-4">
                          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">{props.tag}</button>
                          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">{props.tag}</button>
                          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">{props.tags}</button>
                    </div>

                    {/* Description */}
                    <div className=" m-4 min-w-100 max-w-400 w-1/2 ">
                        {props.description}
                    </div>
                    {/* Buttons */}
                    <div className="mb-10">
                          <button className="m-2 font-bold bg-blue-500 rounded-lg p-2 hover:cursor-pointer" >Watch Now</button>
                          <button className="m-2 font-bold backdrop-blur-md bg-zinc-700/50 p-2 rounded-lg hover:cursor-pointer">Add to Watchlist</button>
                          <button className="m-2 font-bold backdrop-blur-md bg-zinc-700/50 p-2 rounded-lg hover:cursor-pointer">Comments</button>
                    </div>
                </div>
            </div>            
        </div>
        
    )
}