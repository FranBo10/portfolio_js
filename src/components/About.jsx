import React from "react";

const About = () => {
  return (
    <div id="about" class="text-center">
      <h3 class="text-3xl inline-block mt-10 mb-3 border-b-2 border-teal-500 dark:text-white">
        Portofolio
      </h3>

      <p class="text-md py-2 mb-3 leading-8 text-gray-800 dark:text-gray-200">
        Depuis le début de mon parcours en tant que designer et développeur
        indépendant, j'ai travaillé en autonomie pour réaliser des{" "}
        <span class="text-teal-500">projets</span> professionnels, et j'ai
        collaboré avec des personnes talentueuses pour créer des produits
        numériques à usage professionnel et grand public. Je mets a disposition
        mes connaisances en programmation au service des entreprises qui
        cherchent recrouter un professionnel avec l'expérience acquise en
        travaillant avec des projets individuels.
      </p>

      <h3 class="text-3xl inline-block my-3 border-b-2 border-teal-500 dark:text-white">
        Développeur et concepteur.
      </h3>
      <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Dans la partie <span class="text-orange-500">Frontend</span>, je possède
        une solide maîtrise des langages fondamentaux tels que{" "}
        <span class="text-teal-500">HTML</span>,{" "}
        <span class="text-teal-500">CSS</span> (Bootstrap, TailwindCSS, SaSS),
        et <span class="text-teal-500">JAVASCRIPT</span>. J'utilise le framework{" "}
        <span class="text-teal-500">ReactJS</span> pour les projects codés
        entièrement en Javascript, et le framework{" "}
        <span class="text-teal-500">Symfony</span>, où j'utilise principalement{" "}
        <span class="text-teal-500">TWIG</span> comme langage frontend dans les
        projets codés en <span class="text-teal-500">PHP</span>.
      </p>
      <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        En ce qui concerne le <span class="text-orange-500">Backend</span>, mes
        approches varient en fonction du langage utilisé dans le projet.
        <br></br>Lorsque je travaille sur un projet{" "}
        <span class="text-teal-500">Javascript</span>, j'opte généralement pour
        le framework <span class="text-teal-500">NextJS.</span>Dans cette
        configuration, j'utilise <span class="text-teal-500">NodeJs</span> et{" "}
        <span class="text-teal-500">ExpressJS</span> pour gérer les connexions à
        la BDD, et <span class="text-teal-500">Mongoose</span> pour la gestion
        de la structure de l'application.<br></br>
        Si le projet est codé en <span class="text-teal-500">PHP</span>, je me
        tourne vers le framework <span class="text-teal-500">SYMFONY</span> qui
        offre un cadre robuste qui me permet de gérer l'application à travers un
        système MVC. Dans cette architecture, je définis les routes et la
        logique via les controlleurs.<br></br> L'accès à la base de données,{" "}
        <span class="text-teal-500">SQL, Firebase, MongoDb</span>, se fait à
        travers la partie model, pour communiquer avec la BDD et effectuer les
        requêtes necessaires pour récupérer les données de manière structurée.
      </p>
    </div>
  );
};

export default About;
