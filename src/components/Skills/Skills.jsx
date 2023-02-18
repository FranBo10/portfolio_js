import { CssBaseline } from "@mui/material";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import reactjs from "../../img/react.png";
import tailwind from "../../img/tailwind.png";
import nextjs from "../../img/nextjs.png";
import github from "../../img/github1.png";
import nodejs from "../../img/node.png";

const Skills = () => {
  return (
    <div id="skills" class="w-full lg:h-screen p-2">
      <div class="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Skills
        </p>
        <h2 class="py-4 dark:text-gray-100">Mes outils de programmation</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-200">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={html} width={64} height={64} alt="html" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={css} width={64} height={64} alt="css" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={javascript} width={64} height={64} alt="javascript" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={reactjs} width={64} height={64} alt="react" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={nextjs} width={64} height={64} alt="next" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={nodejs} width={64} height={64} alt="node" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NODEJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={tailwind} width={64} height={64} alt="tailwind" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="grid grid-cols-2 gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={github} width={64} height={64} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
