import React from "react";

const testimonialData = [
  {
    name: "GATHER CONTENT",
    description:
      "Our journey begins by sourcing captivating visuals and persuasive copy, the backbone of successful ad campaigns. Collaborating closely with you, we capture your brand's essence, ensuring each piece reflects your unique identity. This strategic foundation sets the stage for a compelling and resonant ad journey.",
    position: "",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    id: "1",
  },
  {
    name: "LAUNCH ADS",
    description:
      "With our curated content in hand, we move forward to the exciting phase of ad launch. Drawing from our expertise and insights, we strategically set up and deploy your ads across Facebook and Instagram. From precise targeting to optimal scheduling, we ensure your message reaches the right audience at the right time. As we hit the launch button, your campaign springs to life, ready to make an impact in the digital realm.",
    position: "",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    id: "2",
  },
  {
    name: "AMPLIFYING SALES/TRAFFIC",
    description:
      "Here's where the magic happens. With your Facebook and Instagram ads live, we focus on boosting sales and traffic. Guided by data insights, we refine strategies on the fly. Targeting precision and adaptable content lead to increased resonance. The result? A clear rise in both sales and traffic, showcasing the strength of our approach. Your success is paramount, and we're dedicated to delivering remarkable outcomes.",
    position: "",
    id: "3",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
  },
];

export const Process = () => {
  return (
    <div className="max-w m-auto md:pl-20 py-16 bg-black" id="process">
      <section className="mb-32 text-center">
        <h1 className="text-white p-[100px] sm:text-5xl text-4xl font-bold ">
          Our Process
        </h1>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {testimonialData.map((data) => (
            <div className="mb-12 md:mb-0 " key={data.id}>
              <div className="mb-6 flex justify-center">
                {/* <img
                  src={data.imgeUrl}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                /> */}
              </div>
              <h5 className="mb-2 text-cyan-500 text-lg font-bold">
                {data.name}
              </h5>
              <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                {data.position}
              </h6>
              <p className="mb-4 text-white">
                {data.description}
                {/* Quotation */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 96 960 960"
                  className="inline-block w-6"
                >
                  <path
                    fill="currentColor"
                    d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
                  />
                </svg>
              </p>

              {/* Rating */}
              {data.starIcon}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
