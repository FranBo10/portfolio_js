import React from "react";
import paint from "../../img/paint_logo1.png";
import doc from "../../img/doc_logo.png";
import rocket from "../../img/rocket_logo.png";

const Cards = () => {
  return (
    <div>
      <div>
        <h3 class="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, Ive done remote work for
          <span class="text-teal-500"> agencies </span>
          consulted for <span class="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div class="lg:flex gap-10 text-gray-800">
        <div class="text-center shadow-xl p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
          <img src={doc} width={200} height={200} alt="html" />
          <h3 class="text-lg font-medium pt-8 pb-2 ">Beautiful Designs</h3>
          <p class="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 class="py-4">Design Tools I Use</h4>
          <p class="py-1">Photoshop</p>
          <p class="py-1">Illustrator</p>
          <p class="py-1">Figma</p>
          <p class="py-1">Indesign</p>
        </div>
        <div class="text-center shadow-lg p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
          <img src={paint} width={200} height={200} alt="code" />
          <h3 class="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p class="py-2">
            Do you have an idea for your next great website? Lets make it a
            reality.
          </p>
          <h4 class="py-4">Design Tools I Use</h4>
          <p class="text-gray-800 py-1">Photoshop</p>
          <p class="text-gray-800 py-1">Illustrator</p>
          <p class="text-gray-800 py-1">Figma</p>
          <p class="text-gray-800 py-1">Indesign</p>
        </div>
        <div class="text-center shadow-lg p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
          <div>
            <img src={rocket} width={200} height={200} alt="" />
          </div>
          <h3 class="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p class="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 class="py-4 text-teal-600">Design Tools I Use</h4>
          <p class="text-gray-800 py-1">Photoshop</p>
          <p class="text-gray-800 py-1">Illustrator</p>
          <p class="text-gray-800 py-1">Figma</p>
          <p class="text-gray-800 py-1">Indesign</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
