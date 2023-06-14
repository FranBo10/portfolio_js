import React from "react";
import todolist from "../../img/todolist.png";
import pokedex from "../../img/pokedex.jpg";
import pokedex2 from "../../img/pokedex2.png";
import web4 from "../../img/web4.png";
import web5 from "../../img/web5.png";
import bolata from "../../img/bolata.png";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" class="w-full">
      <div class="max-w-[1240px] m-auto px-2 my-16">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Projets
        </p>
        <h2 class="py-4 dark:text-gray-100">Voici mes projets</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ToDoList"
            backgroundImg={todolist}
            projectUrl="https://franbo10.github.io/todolist_js/"
          />
          <ProjectItem
            title="Bar LaBolata"
            backgroundImg={bolata}
            projectUrl="https://www.labolatabar.es/"
          />
          <ProjectItem
            title="Pokedex"
            backgroundImg={pokedex}
            projectUrl="https://franbo10.github.io/pokedex_js/"
          />
          <ProjectItem
            title="PokeAPI"
            backgroundImg={pokedex2}
            projectUrl="https://franbo10.github.io/pokemon_js/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
