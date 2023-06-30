import React from "react";
import { data } from "./data/data";
// import cv from "./cv/cv.pdf";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <div className="container h-screen">
      <div className=" textContainer  sm:text-[8px] 2xl:text-3xl ">
        <div className="opacity-50">
          <h2>{data.title}</h2>
          <p className=" leading-loose">{data.body}</p>
        </div>
        {/* <a href={cv} download="your_cv.pdf">
          <button
            className="min-w-100 font-display  rounded-full   bg-indigo-400 px-6 py-2 font-bold   text-black opacity-100 hover:bg-blue-700
              hover:text-white sm:bg-none"
          >
            Download CV
          </button>
        </a> */}
      </div>
      <div className="imageContainer">
        <Image
          priority={false}
          width={500}
          height={250}
          aria-label={"My image"}
          alt={"My image"}
          src={"/images/cvvv.jpg"}
          className="h-250 w-500  img rounded-3xl  object-cover opacity-40 "
        />
      </div>
    </div>
  );
};

export default AboutMe;
