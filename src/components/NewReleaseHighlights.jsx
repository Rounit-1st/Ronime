import React from "react";
import request from "../Api/trending_anime_requester";

function NewReleaseHighlights() {

  // const NewReleasedAnimeData = await request();

  return (
    // background image
   <div className="bg-[url('/mainbg.jpg')] w-full h-screen bg-cover bg-center -z-10 bg-white/80 backdrop-brightness-0">
      {/* // uske upar wala black gradient filter */}
      <div className="bg-gradient-to-r from-black/50 to-transparent bg-blend-darken w-full h-full flex items-end">
      {/* flex class */}
      <div className="text-white w-150 m-10">
        {/* title */}
        <div className="text-5xl font-bold Font-style font-sherif m-2">doreamon</div>
        {/* tags 1 */}
        <div className="mt-4">
          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">Animation</button>
          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">Action & Adventure</button>
          <button className="backdrop-blur-md bg-zinc-700/50 p-2 rounded-xl m-1 text-sm">War & Politics</button>
        </div>
        {/* tag 2 */}
        <div className="flex ">
          <h5 className="m-2">TV series</h5>
          <h5 className="m-2">2002</h5>
          <h5 className="m-2">⭐ 8.5</h5>
        </div>
        {/* Description */}
        <div className=" m-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quod omnis sit nisi quas eveniet, praesentium ipsum, soluta ipsa nam assumenda? Et quisquam saepe iure corporis debitis, laborum maiores iusto!
        </div>
        {/* button container */}
        <div className="mb-10">
          <button className="m-2 font-bold bg-blue-500 rounded-lg p-2 hover:cursor-pointer" >Watch Now</button>
          <button className="m-2 font-bold backdrop-blur-md bg-zinc-700/50 p-2 rounded-lg hover:cursor-pointer">More Info</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default NewReleaseHighlights;
