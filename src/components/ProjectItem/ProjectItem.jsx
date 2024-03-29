import { Button, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ title, description, backgroundImg, projectUrl }) => {
  return (
    <div class="relative flex items-center justify-center h-auto shadow-xl shadow-gray-400 rounded-xl p-1 group hover:bg-gradient-to-r from-gray-700 text- to-gray-700 cursor-pointer hover:scale-105 ease-in duration-300">
      <img
        class="rounded-xl group-hover:opacity-10 h-full w-full"
        src={backgroundImg}
        alt=""
      />
      <div class="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 class="text-2xl text-teal-500 text-center"></h3>
        <p class="pb-4 pt-2 text-teal-500 text-center text-2xl">{title}</p>
        <p class="pb-4 pt-2 text-teal-500 text-center text-lg">{description}</p>
        <div class="flex">
          <Link
            to={projectUrl}
            target="_blank"
            class="px-8 py-2 mt-4 mr-8 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-black-500 text- to-slate-500 text-teal-500 hover:scale-125 ease-in duration-100 border border-teal-500"
          >
            Demo
          </Link>
          <button class="px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-black-500 text- to-slate-500 text-teal-500 hover:scale-125 ease-in duration-100 border border-teal-500">
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
