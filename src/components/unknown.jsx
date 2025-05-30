import React from "react";

function Unknown(props) {

  return (
    <a href={props.url} className="w-32">
      <button className="p-2 font text-center w-full  rounded-xl hover:bg-slate-600 hover:cursor-pointer">
        {props.name}
      </button>
    </a>
  )
}

export default Unknown;
