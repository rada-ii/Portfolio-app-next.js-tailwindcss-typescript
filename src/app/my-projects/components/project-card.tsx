import Image from "next/image";
import React from "react";
import Github from "../../icons/github";
import Window from "../../icons/window";

type ProjectCardProps = {
  data: {
    title: string;
    body1: string;
    body2: string;
    image: string;
    links: {
      text: string;
      url: string;
    }[];
  };
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { title, body1, body2, image, links } = data;

  return (
    <div className="sm:w-1/3-g v-screen border-1  book mb-8 flex  w-full  flex-col justify-between rounded-3xl  border-slate-100 bg-[#373b4f] shadow-lg">
      <Image
        aria-label={`Image of ${title}`}
        src={image}
        alt={title}
        className="card-img min-h-80 w-full object-cover "
        priority={false}
        width={500}
        height={250}
      />
      <div className=" flex flex-col justify-between ">
        <h3 className="my-7 text-center text-3xl  font-medium text-white">
          {title}
        </h3>
        <p className="min-h-50 my-12 mt-2 px-4 text-justify  text-base  text-indigo-400 sm:text-xl">
          {body1}
        </p>
        <p className="min-h-50 mt-2 text-center text-2xl  text-white">
          {body2}
        </p>
        <div className="icons mt-4 flex flex-row justify-between px-6 text-sm text-white sm:text-lg">
          <a href={links[0].url} className="links flex items-center ">
            <Github className="contact" />
            <span className="text-white  hover:text-indigo-400">
              {links[0].text}
            </span>
          </a>
          <a href={links[1].url} className="flex items-center">
            <Window className="contact" />
            <span className="text-white  hover:text-indigo-400">
              {links[1].text}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
