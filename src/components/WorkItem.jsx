import React from "react";

const WorkItem = ({img, title}) => {
    return (
        <div className="relative flex flex-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-800 ">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl font-bold text-white tracking-wider text-wider ">
                    {title}
                </h3>
                
            </div>
        </div>
    )
}

export default WorkItem