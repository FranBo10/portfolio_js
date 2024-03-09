import React from "react";
import paint from "../../img/paint_logo1.png";
import doc from "../../img/doc_logo.png";
import rocket from "../../img/rocket_logo.png";

const Cards = () => {
  return (
    <div id="services" class="w-full p-2 my-16">
      <div>
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Services
        </p>
        <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Depuis mes débuts en tant que designer et développeur indépendant,
          j'ai travaillé à distance pour des agences, des startups, et des
          entreprises, en collaboration avec des talents divers pour créer des
          produits numériques répondant aux besoins aussi bien professionnels
          que grand public.
        </p>
        <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Je propose une large gamme de services, comprenant la conception de
          marque, la programmation et une veille technologique constante.
        </p>
      </div>
      <div class="lg:flex gap-10 text-gray-800">
        <div class="text-center shadow-xl shadow-gray-400 p-1 border-2 rounded-xl hover:scale-105 ease-in duration-300 my-5 dark:bg-gray-200 flex-1">
          <img
            src={paint}
            width={150}
            height={150}
            alt="html"
            class="mx-auto"
          />
          <h3 class="text-lg font-medium pt-3 pb-2 ">De beaux designs</h3>
          <p class="py-2">
            Création de designs élégants adaptés à vos besoins en suivant la
            théorie de design de base.
          </p>
          <h4 class="pt-2 pb-1">Outils de conception que j'utilise:</h4>
          <ul>
            <li class="py-1">- VS Code</li>
            <li class="py-1">- Figma</li>
            <li class="py-1">- PicPick</li>
          </ul>
        </div>
        {/* <div class="text-center shadow-lg p-10 border-2 rounded-xl my-10 dark:bg-gray-200 flex-1">
          <img src={doc} width={200} height={200} alt="code" />
          <h3 class="text-lg font-medium pt-8 pb-2 ">
            Codez le projet de vos rêves
          </h3>
          <p class="py-2">
            Avez-vous une idée pour votre prochain grand site web ? Faisons-en
            une réalité.
          </p>
          <h4 class="py-4">Outils de programmation que j'utilise</h4>
          <p class="text-gray-800 py-1">HTML</p>
          <p class="text-gray-800 py-1">CSS</p>
          <p class="text-gray-800 py-1">JAVASCRIPT</p>
          <p class="text-gray-800 py-1">TWIG</p>
        </div> */}
        <div class="text-center shadow-xl shadow-gray-400 p-1 border-2 rounded-xl hover:scale-105 ease-in duration-300 my-5 dark:bg-gray-200 flex-1">
          <div>
            <img
              src={rocket}
              width={150}
              height={150}
              alt="rocket"
              class="mx-auto"
            />
          </div>
          <h3 class="text-lg font-medium pt-3 pb-2 ">Evolution</h3>
          <p class="py-2">
            Une veille technologique constante garantira que votre application
            reste toujours à jour.
          </p>
          <h4 class="pt-2 pb-1">Des sites pour rester à jour:</h4>
          <ul>
            <li class="py-1">- Documentation officielle</li>
            <li class="py-1">- SymfonyCasts</li>
            <li class="py-1">- YouTube</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
