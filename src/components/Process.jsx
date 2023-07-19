import React from "react";

const testimonialData = [
  {
    name: "GATHER CONTENT",
    description:
      "In the initial step, we collect visuals that highlight your craftsmanship. These form the foundation of our strategy, serving to attract a greater number of potential clients to your business.",
    position: "",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg",
    id: "1",
  },
  {
    name: "LAUNCH ADS",
    description:
      "Next, we launch ads based on the content we've collected. These ads are strategically designed and placed on popular social media platforms to capture clients attention.",
    position: "",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg",
    id: "2",
  },
  {
    name: "GENERATE LEADS",
    description:
      "Finally, we collect information from individuals who are genuinely interested in your services. Prioritising high-quality leads and eliminating tire kickers.",
    position: "",
    id: "3",
    imgeUrl: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).jpg",
  },
];

export const Process = () => {
  return (
    <div className="max-w m-auto md:pl-20 py-16 bg-black" id='process'>
      <section className="mb-32 text-center">
      <h1 className="text-white p-[100px] sm:text-5xl text-4xl font-bold ">Our Process</h1>

        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
          {testimonialData.map((data) => (
            <div className="mb-12 md:mb-0 " key={data.id}>
              <div className="mb-6 flex justify-center">
                {/* <img
                  src={data.imgeUrl}
                  className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                /> */}
              </div>
              <h5 className="mb-2 text-cyan-500 text-lg font-bold">{data.name}</h5>
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
