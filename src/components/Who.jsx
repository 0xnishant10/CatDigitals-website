/* eslint-disable */
import React from "react";
import WorkItem from "./Who_Item";
import FacebookImg from '../assets/facebook2.jpg'
import InstaImg from '../assets/insta2.jpg'

const Work = () => {
    return (
        <div id="who are we" className="max-w justify-center m-auto p-4 py-16 bg-black ring-2 ring-cyan-500">
            <h1 className="text-4xl font-bold text-center text-white ">Who Are We?</h1>
            <p className="text-center rounded-xl text-black py-8 font-serif text-white">
            We're a Delhi-based agency specializing in unlocking the online potential of clothing brands through captivating social media campaigns on popular platforms. With our expertise in data-driven targeting, compelling content creation, and feline finesse, we drive engagement, turn heads, and boost sales, ensuring your brand stands out in the digital landscape.
            </p>
            <div className="max-w-[1040px] grid sm:grid-cols-2 gap-12 pt-4">
                <WorkItem img={FacebookImg} title='Facebook Ads' />
                <WorkItem img={InstaImg} title='Instagram Ads' />
            </div>
        </div>
    )
}

export default Work