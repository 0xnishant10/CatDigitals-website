import React from "react";

const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="hiddenc flex items-center lg:h-screen font-poppins bg-black"
      >
        <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-11 md:px-6">
          <div className="mb-10 text-left">
            <h2 className="pb-2 mb-2 text-xl font-bold text-white md:text-3xl">
              Let's Stay Connected
            </h2>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full px-4 lg:w-1/2 mb-11 lg:mb-0">
              <div className="flex flex-wrap">
                <div className="w-full px-4 mb-10 sm:w-1/2">
                  <div className="max-w-xs mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-cyan-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path>
                      </svg>
                    </div>
                    <h2 className="mb-4 text-xl text-white font-bold leading-9 md:text-2xl">
                      Email
                    </h2>
                    <a
                      href="#"
                      className="text-base font-medium text-cyan-500 md:text-lg s"
                    >
                      nishant@catdigitals.com
                    </a>
                  </div>
                </div>

                <div className="w-full px-4 mb-10 sm:w-1/2">
                  <div className="max-w-xs mx-auto">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-700 rounded-full dark:bg-cyan-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
                      </svg>
                    </div>
                    <h2 className="mb-4 text-xl text-white font-bold leading-9  md:text-2xl">
                      Office
                    </h2>
                    <a
                      href="#"
                      className="text-base font-medium text-cyan-500 md:text-lg "
                    >
                      DELHI, INDIA
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <form
                action="https://getform.io/f/08a23ed7-c077-4cb1-a9fa-dbc484292abb"
                className="p-6"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="mb-6 ">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 font-bold text-cyan-500 uppercase "
                  >
                    Email
                  </label>
                  <input
                    type="emial"
                    name="email"
                    placeholder="abc@gmail.com"
                    required=""
                    className="text-white block w-full px-4 py-3 mb-3 leading-tight bg-black border border-gray-200 rounded  "
                  />
                </div>
                <div className="mb-6 ">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 font-bold text-cyan-500 uppercase "
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="Subject"
                    placeholder="I'm asking information for..."
                    required=""
                    className="text-white block w-full px-4 py-3 mb-3 leading-tight bg-black border border-gray-200 rounded "
                  />
                </div>
                <div className="mb-6 ">
                  <label
                    htmlFor="firstname"
                    className="block mb-2 font-bold text-cyan-500 uppercase "
                  >
                    Message
                  </label>
                  <textarea
                    type="message"
                    name="message"
                    placeholder="Describe your problem"
                    required=""
                    className="text-white block w-full px-4 leading-tight bg-black border border-gray-200 rounded  py-7 "
                  ></textarea>
                </div>
                <button className="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-700">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
