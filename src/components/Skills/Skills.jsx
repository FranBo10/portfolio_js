import { CssBaseline } from "@mui/material";
import html from "../../img/html.png";
import css from "../../img/css.png";
import javascript from "../../img/javascript.png";
import reactjs from "../../img/react.png";
import tailwind from "../../img/tailwind.png";
import nextjs from "../../img/nextjs.png";
import github from "../../img/github1.png";
import nodejs from "../../img/node.png";
import php from "../../img/php.png";
import mysql from "../../img/mysql.png";
import bootstrap from "../../img/bootstrap.png";
import symfony from "../../img/symfony.png";

const Skills = () => {
  return (
    <div id="skills" class="w-full p-2 my-16">
      <div class="max-w-[1240px] m-auto flex flex-col justify-center">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          compétences
        </p>
        <h2 class="py-4 dark:text-gray-100">Mes outils de programmation</h2>
        <div class="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-200">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={html} width={80} height={80} alt="html" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={css} width={80} height={80} alt="css" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={javascript} width={80} height={80} alt="javascript" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={php} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>PHP</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={mysql} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>MYSQL</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={symfony} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>SYMFONY</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={reactjs} width={80} height={80} alt="react" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={nextjs} width={80} height={80} alt="next" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={nodejs} width={80} height={80} alt="node" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>NODEJS</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={github} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img class="mb-3" src={bootstrap} width={80} height={80} alt="github" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
          <div class="p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 dark:bg-gray-100">
            <div class="flex flex-col gap-4 justify-center items-center">
              <div class="m-auto">
                <img src={tailwind} width={80} height={80} alt="tailwind" />
              </div>
              <div class="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
