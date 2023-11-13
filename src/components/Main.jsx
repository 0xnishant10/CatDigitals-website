/* eslint-disable */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import MainItem from "./MainItem";
import BlackImg from "../assets/black.jpeg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <MainItem img={BlackImg} title="Black" />

      <div className="w-full h-screen absolute top-0 left-0">
        <div className="m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-white sm:text-9xl text-6xl font-bold pb-4">
            CAT DIGITALS
          </h1>
          <h2 className="text-center text-xl pl-20 pr-20 rounded-xl py-2 font-serif text-white">
           
          </h2>
          <h2 className="font-semibold bg-gradient-to-r from-blue-800 to-green-500 bg-clip-text text-transparent text-center flex sm:text-3xl text-2xl p-16">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Social Media Marketing Agency",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "By Nishant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <h4 className="font-semibold bg-gradient-to-r from-blue-800 to-green-500 bg-clip-text text-transparent text-center sm:text-2xl text-xl flex font-serif pt-4">
            Santa doesn’t tell people that you own a business
          </h4>
          <h3 className="text-white text-center flex sm:text-3xl text-xl font-serif pt-4">
            We Do !!
          </h3>
          <div className="flex justify-between pt-6 max-w-[200px] w-full ">
            <a href="https://www.facebook.com/profile.php?id=100093571020006">
              <FaFacebookF
                size={30}
                className="rounded-full bg-gray-100 shadow-lg shadow-cyan-500 p-1 cursor-pointer hover:scale-[2] ease in duration-200"
              />
            </a>
            <a href="https://instagram.com/_catdigitals_?igshid=MzNlNGNkZWQ4Mg==">
              <FaInstagram
                size={30}
                className="rounded-full bg-gray-100 shadow-lg shadow-cyan-500 p-1 cursor-pointer hover:scale-[2] ease in duration-200"
              />
            </a>
            <a href="https://www.linkedin.com/company/95179101/admin/">
              <FaLinkedinIn
                size={30}
                className="rounded-full bg-gray-100 shadow-lg shadow-cyan-500 p-1 cursor-pointer hover:scale-[2] ease in duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
