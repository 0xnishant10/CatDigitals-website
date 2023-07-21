/* eslint-disable */
import React from "react";
import WorkItem from "./Who_Item";
import FacebookImg from '../assets/facebook2.jpg'
import InstaImg from '../assets/insta2.jpg'

const Work = () => {
    return (
      <div
        id="who are we"
        className="max-w justify-center m-auto p-4 py-16 bg-black ring-2 ring-cyan-500 "
      >
        <h1 className="text-4xl font-bold text-center text-white ">
          Who Are We?
        </h1>
        <p className="text-center text-xl pl-20 pr-20 rounded-xl py-8 font-serif text-white">
          We're a Delhi-based agency that helps Home Improvement Companies by
          delivering top-tier, high-quality leads through strategic advertising
          on popular social media sites. Our targeted approach not only frees
          you up to concentrate on your work, but also ensures your growth is
          driven by genuinely interested clients, making your business expansion
          smooth and efficient.
        </p>
        <div className="flex items-center justify-center">
          <div className="max-w-[1040px] grid sm:grid-cols-2 gap-12 pt-4">
            <WorkItem img={FacebookImg} title="Facebook Ads" />
            <WorkItem img={InstaImg} title="Instagram Ads" />
          </div>
        </div>
      </div>
    )
}

export default Work