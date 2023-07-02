import Image from "next/image";
import React from "react";
import { Github, Window } from "../../icons";

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
    <div className="bg-grey-light sm:w-1/3-g w-full rounded-lg shadow-lg">
      <Image
        aria-label={`Image of ${title}`}
        src={`/images/${image}`}
        alt={title}
        className="h-48 w-full object-cover"
        priority={false}
        width={500}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="min-h-50 mt-2 text-sm">{body1}</p>
        <p className="min-h-50 mt-2 text-sm"> {body2}</p>
        <div className="mt-4 flex flex-row justify-between">
          <a href={links[0].url} className="flex items-center">
            <Github className="contact" />
            <span className="text-black"> {links[0].text}</span>
          </a>
          <a href={links[1].url} className="flex items-center">
            <Window className="contact" />
            <span className="text-black"> {links[1].text}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
