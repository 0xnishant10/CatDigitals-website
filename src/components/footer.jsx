// import { Typography } from "@material-tailwind/react";
// import { logo } from "@/assets";
// import Image from 'next/image';

export default function Footer() {
  return (
    <section className="hiddenc body-font tails-selected-element bg-gray-900 text-gray-700">
        <div className="container mx-auto flex max-w-7xl flex-col items-center px-8 py-8 sm:flex-row">
          <a
            href="#_"
            className="logo select-none text-xl font-black leading-none text-gray-400"
          >
            CatDigitals<span className="text-cyan-500">.</span>
          </a>
          <p className="mt-4 text-sm text-cyan-500 sm:ml-4 sm:mt-0 sm:border-l sm:border-gray-200 sm:pl-4">
            © {new Date().getFullYear()} CatDigitals -  All Rights Reserved
          </p>
          
        </div>
      </section>
  );
}