/* eslint-disable */
import React from "react";
import WorkItem from "./Who_Item";
import FacebookImg from "../assets/facebook2.jpg";
import InstaImg from "../assets/insta2.jpg";

const Work = () => {
  return (
    <div
      id="who are we"
      className="max-w justify-center m-auto p-4 py-16 bg-black ring-2 ring-cyan-500 "
    >
      <h1 className="text-4xl font-bold text-center text-white ">
        Who Are We?
      </h1>
      <p className="text-center text-xl pl-20 pr-20 rounded-xl py-8 font-serif bg-gradient-to-r from-blue-800 to-green-500 bg-clip-text text-transparent">
        Located in the heart of Delhi, we are a dynamic social media marketing
        agency dedicated to serving the needs of E-commerce businesses. With a
        focus on driving growth and maximizing online presence, our agency is
        your strategic partner in navigating the digital landscape. Through
        carefully crafted campaigns, data-driven strategies, and expert
        insights, we empower E-commerce businesses to flourish in the
        competitive online market. Let us amplify your brand, engage your
        audience, and boost your sales, all while you focus on what you do best.
      </p>
      <div className="flex items-center justify-center">
        <div className="max-w-[1040px] grid sm:grid-cols-2 gap-12 pt-4">
          <WorkItem img={FacebookImg} title="Facebook Ads" />
          <WorkItem img={InstaImg} title="Instagram Ads" />
        </div>
      </div>
    </div>
  );
};

export default Work;
