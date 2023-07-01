import React from "react";
import Image from "next/image";
import { data } from "./data/data";

const AboutMe: React.FC = () => {
  type Data = {
    title: string;
    body: string;
  };

  const aboutData: Data = {
    title: data.title,
    body: data.body,
  };

  return (
    <div className="container h-screen ">
      <div className="textContainer lg:sp sm:text-[8px] sm:leading-none sm:opacity-100 md:text-[10px] md:leading-none lg:text-[13px] xl:text-2xl 2xl:text-3xl">
        <div className="text  leading-loose opacity-50">
          <h2 className="gradient">{aboutData.title}</h2>
          <p className="gradient">
            {aboutData.body} <span className="no">😊</span>
          </p>
        </div>
        {/* <a href={cv} download="your_cv.pdf">
          <button
            className="min-w-100 font-display rounded-full bg-indigo-400 px-6 py-2 font-bold text-black opacity-100 hover:bg-blue-700
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
          className="h-250 w-500 img img rounded-3xl object-cover opacity-30 "
        />
      </div>
    </div>
  );
};

export default AboutMe;
