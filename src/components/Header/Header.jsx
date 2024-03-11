import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import perfil from "../../img/perfilcv.png";

const Header = () => {
  return (
    <div class="text-center">
      <div class="text-center mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden mt-10 md:h-76 md:w-76">
        <img src={perfil} class="profil" objectFit="cover" alt="profil" />
      </div>
      <h2 class="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-5xl">
        Francisco
      </h2>
      <div class="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiFillLinkedin />
      </div>
    </div>
  );
};

export default Header;
