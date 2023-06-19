import React from "react";

const MainItem = ({img, title}) => {
    return (
        <div >
            <img className="w-full h-screen object-cover" src={img} alt="/" />
        </div>
    )
}

export default MainItem