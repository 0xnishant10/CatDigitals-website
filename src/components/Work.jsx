import React from "react";
import WorkItem from "./WorkItem";
import FacebookImg from '../assets/facebook.jpg'
import InstaImg from '../assets/insta.jpg'

const Work = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center">Work</h1>
            <p className="text-center py-8">
                We help Ecommerce Brands create a Strong Online Presence using Facebook and Instagram Ads.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <WorkItem img={FacebookImg} title='Facebook Ads'/>
                <WorkItem img={InstaImg} title='Instagram Ads'/>
            </div>
        </div>
    )
}

export default Work