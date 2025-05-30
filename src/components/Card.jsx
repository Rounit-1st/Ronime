import React from "react";

function Card(props) {

  return (

   <div className="p-2 group-hover w-50 hover:cursor-pointer">
            <div className="overflow-hidden w-fit h-fit rounded-4xl"><div className={`bg-cover bg-center w-50 h-80  group-hover:cursor-pointer hover:scale-110`} style={{ backgroundImage: `url('${props.url}')` }}></div></div>
            <h5 className="pl-2 hover:text-blue-300">{props.title}</h5>
            <div className="flex justify-between"> 
                <h6 className="text-xs pl-2">{props.year}</h6>
                <h6 className="text-xs pl-2 mr-2">{props.rating}</h6>
            </div>
    </div>
  )
}

export default Card;
