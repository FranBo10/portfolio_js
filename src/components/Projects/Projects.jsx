import React from "react";
import todolist from "../../img/todolist.png";
import pokedex from "../../img/pokedex.jpg";
import pokeapi from "../../img/pokeapi.png";
import web4 from "../../img/web4.png";
import web5 from "../../img/web5.png";
import calculator from "../../img/calculator.png";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" class="w-full lg:h-screen">
      <div class="max-w-[1240px] flex flex-col align-center justify-center py-10 ml-20 mt-20">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Projets
        </p>
        <h2 class="py-4 dark:text-gray-100">Voici mes projets</h2>
        <div class="grid grid-cols-1 grid-item gap-8 sm:grid-cols-2 min-w-full">
          <ProjectItem
            title="ToDoList"
            backgroundImg={todolist}
            projectUrl="https://franbo10.github.io/todolist_js/"
          />
          <ProjectItem
            title="CalculatriceJS"
            backgroundImg={calculator}
            projectUrl="https://franbo10.github.io/calculator_js/"
          />
          <ProjectItem
            title="Pokedex"
            backgroundImg={pokedex}
            projectUrl="https://franbo10.github.io/pokedex_js/"
          />
          <ProjectItem
            title="PokeAPI"
            backgroundImg={pokeapi}
            projectUrl="https://franbo10.github.io/pokemon_js/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
