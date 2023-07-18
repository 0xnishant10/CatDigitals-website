/* eslint-disable */
import React, {useState} from "react";
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai'
import {MdOutlineQuestionAnswer} from 'react-icons/md'
import {GrProjects} from 'react-icons/gr'


const Sidenav = () => {
    
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div>
            <AiOutlineMenu size = {20} onClick={handleNav} className="absolute rounded-full shadow-lg bg-gray-100 shadow-cyan-500 hover-scale-110 p-1 top-4 right-4 z-[99] md:hidden"/>
            {
               nav ? (
                    <div className="fixed w-full h-screen bg-black/90 flex flex-col justify-center items-center z-20">
                        <a onClick={handleNav}
                            href="#main" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease in duration-200">
                            <AiOutlineHome size={20}/>
                            <span className="pl-4">Home</span>
                        </a>
                        <a onClick={handleNav}
                            href="#who are we" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease in duration-200">
                            <GrProjects size={20}/>
                            <span className="pl-4">Who Are We?</span>
                        </a>
                        <a onClick={handleNav}
                            href="#offer" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease in duration-200">
                            <AiOutlineProject size={20}/>
                            <span className="pl-4">Offer</span>
                        </a>
                        <a onClick={handleNav}
                            href="#faq" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease in duration-200">
                            <MdOutlineQuestionAnswer size={20}/>
                            <span className="pl-4">FAQ</span>
                        </a>
                        <a onClick={handleNav}
                            href="#contact" 
                            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease in duration-200">
                            <AiOutlineMail size={20}/>
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
               )
               : (
                    ''
               )
               
            }
            <div className="md:block hidden fixed z-10 top-auto bottom-4 w-screen">
                <div className="flex justify-center">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#who are we" className="rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <GrProjects size={20} />
                    </a>
                    <a href="#offer" className="rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#faq" className="rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <MdOutlineQuestionAnswer size={20} />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-cyan-500 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>

        </div>
    )
} 

export default Sidenav