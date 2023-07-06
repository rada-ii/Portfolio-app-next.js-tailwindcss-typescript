import React from "react";
import { projects } from "../data/data";
import { ProjectCard } from "./components/project-card";

const MyProjects = () => {
  return (
    <div className="body mx-auto mb-12 grid h-full w-fit  ">
      <div className=" m-auto mt-10 flex w-11/12 flex-col content-center px-12  ">
        <h2 className="mb-10 text-center text-5xl font-bold text-white">
          My Projects
        </h2>
        <div className="animate-flyInRight mx-8  my-12 grid  grid-cols-1 grid-rows-3 gap-x-8 gap-y-20 xl:grid-cols-2 2xl:grid-cols-3 ">
          {projects.map((project, index) => {
            return <ProjectCard data={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
