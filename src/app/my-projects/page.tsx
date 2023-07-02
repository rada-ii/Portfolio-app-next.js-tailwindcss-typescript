import React from "react";
import { projects } from "../data/data";
import { ProjectCard } from "./components/project-card";

const MyProjects = () => {
  return (
    <div className="body mx-auto grid h-screen w-screen  ">
      <div className=" m-auto mt-10 flex w-11/12 flex-col content-center">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">
          My Projects
        </h2>
        <div className="mx-auto my-12  grid grid-cols-3 grid-rows-3 gap-x-8  gap-y-20">
          {projects.map((project, index) => {
            return <ProjectCard data={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
