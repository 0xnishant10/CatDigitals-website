import React from "react";
import { TypeAnimation } from "react-type-animation";
import MainItem from "./MainItem";
import BlackImg from '../assets/black.jpeg'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <MainItem img={BlackImg} title='Black'/>
            
            <div className="w-full h-screen absolute top-0 left-0 bg-black/80">
                <div className="m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                    <h1 className="text-white sm:text-5xl text-4xl font-bold ">CAT DIGITALS</h1>
                    <h2 className="text-white flex sm:text-3xl text-2xl pt-4">
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Social Media Marketing Agency',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'By Nishant Singh',
                        1000,
                        
                    ]}
                    wrapper="div"
                    speed={50}
                    style={{ fontSize: '1em', paddingLeft: '5px'  }}
                    repeat={Infinity}
                    />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full ">
                        <a href="https://www.facebook.com/profile.php?id=100093571020006">
                        <FaFacebookF size={30} className="rounded-full bg-gray-100 shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-[2] ease in duration-200"/>
                        </a>
                        <a href="https://instagram.com/_catdigitals_?igshid=MzNlNGNkZWQ4Mg==">
                        <FaInstagram size={30} className="rounded-full bg-gray-100 shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-[2] ease in duration-200"/>
                        </a>
                        <a href="https://www.linkedin.com/company/95179101/admin/">
                        <FaLinkedinIn size={30} className="rounded-full bg-gray-100 shadow-lg shadow-gray-400 p-1 cursor-pointer hover:scale-[2] ease in duration-200"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main