import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@mui/material";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import orde from "../../img/web-development.png";

const Contact = () => {
  return (
    <div id="contact" class="w-full">
      <div class="max-w-[1240px] m-auto px-2 w-full">
        <p class="text-xl tracking-widest uppercase text-[#0D9488] font-bold">
          Contact
        </p>
        <h2 class="py-4 dark:text-gray-200">Entrons en contact</h2>
        <div class="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div class="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 dark:bg-gray-200">
            <div class="lg:p-4 h-full ">
              <div>
                <img
                  class="rounded-xl hover:scale-105 ease-in duration-300"
                  src={orde}
                  alt="/"
                  objectFit="cover"
                  width={300}
                  height={200}
                />
              </div>
              <div class="text-gray-800">
                <h2 class="py-2">Francisco Garcia</h2>
                <p class="text-xl py-2 font-bold">Front-end Developper</p>
                <p>
                  Je suis disponible à temps complet. Contactez-moi et
                  parlons-en.
                </p>
                <div>
                  <p class="text-md uppercase pt-8">Connectez avec moi</p>
                  <div class="flex items-center justify-between py-4">
                    <div class="text-3xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
                      <AiFillTwitterCircle />
                      <AiFillLinkedin />
                      <AiFillYoutube />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div class="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 dark:bg-gray-200">
            <div class="p-4">
              <form>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Nom complet
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    téléphone
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Email
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Suject
                  </label>
                  <input
                    class="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  ></input>
                </div>
                <div class="flex flex-col py-2">
                  <label className="uppercase text-gray-800 text-sm py-2">
                    Message
                  </label>
                  <textarea
                    class="text-gray-800 border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  ></textarea>
                </div>
                <div class="flex justify-center">
                  <Button
                    variant="outlined"
                    class="flex justify-center items-center bg-gradient-to-r from-cyan-500 text- to-teal-500 text-gray-100 p-4 border-none rounded-md w-4/5 mt-4"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center text-gray-800">
        <Link smooth to="#home">
          <div class="rounded-full shadow-lg shadow-gray-400 p-6 my-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp size={30} class="m-auto text-[#0D9488]" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
