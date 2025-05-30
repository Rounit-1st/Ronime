import React from "react";


{/* Comment section Output */}

export default function CommentSectionOutput(props){
    return (
        <div className="text-white p-16">
            <div className="border-1 rounded-xl p-8">
                {/* Profile Img */}
                <div className="flex items-center gap-4"><div className="rounded-4xl bg-cover bg-center w-16 h-16 mb-5" style={{backgroundImage:`url('/${props.image}')`}}></div><span className="text-bold text-xl">{props.username}</span></div>
                {/* Content */}
                <div>{props.content}</div>
            </div>
        </div>
    )
}