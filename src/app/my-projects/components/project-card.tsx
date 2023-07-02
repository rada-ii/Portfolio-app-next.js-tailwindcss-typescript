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
    <div className="sm:w-1/3-g w-full rounded-3xl   border-2 border-slate-100  shadow-lg">
      <Image
        aria-label={`Image of ${title}`}
        src={`/images/100-books.jpg`}
        alt={title}
        className="card-img h-48 w-full object-cover "
        priority={false}
        width={500}
        height={250}
      />
      <div className="p-4 ">
        <h3 className="text-center text-lg font-medium text-white">{title}</h3>
        <p className="min-h-50 mt-2 text-sm text-white">{body1}</p>
        <p className="min-h-50 mt-2 text-sm text-white"> {body2}</p>
        <div className="mt-4 flex flex-row justify-between text-white">
          <a href={links[0].url} className="flex items-center">
            <Github className="contact" />
            <span className="text-white">{links[0].text}</span>
          </a>
          <a href={links[1].url} className="flex items-center">
            <Window className="contact" />
            <span className="text-white">{links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
