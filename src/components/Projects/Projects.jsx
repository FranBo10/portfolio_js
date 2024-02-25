import React from "react";
import todolist from "../../img/todolist.png";
import pokedex from "../../img/pokedex.jpg";
import pokedex2 from "../../img/pokedex2.png";
import karnak from "../../img/karnak.png";
import web5 from "../../img/web5.png";
import freetourgo from "../../img/freetourgo.png";
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
            title="Karnak Porcellanato"
            description="Premier projet HTML / CSS (2020)"
            backgroundImg={karnak}
            projectUrl="https://franbo10.github.io/karnak/"
          />
          <ProjectItem
            title="FreetourGo"
            description="Application web PHP Symfony / Javascript (2023)"
            backgroundImg={freetourgo}
            projectUrl="https://freetourgo.com"
          />
          <ProjectItem
            title="Pokedex"
            description="Connexion à PokeAPI, affiche et système de recherche de Pokemons"
            backgroundImg={pokedex}
            projectUrl="https://franbo10.github.io/pokedex_js/"
          />
          {/* <ProjectItem
            title="PokeAPI"
            backgroundImg={pokedex2}
            projectUrl="https://franbo10.github.io/pokemon_js/"
          />
          
          <ProjectItem
            title="ToDoList"
            backgroundImg={todolist}
            projectUrl="https://franbo10.github.io/todolist_js/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
