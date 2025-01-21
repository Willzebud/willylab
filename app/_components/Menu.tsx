"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Barre verticale (Desktop) */}
      <motion.div
        initial={{ left: "4rem" }}
        animate={{ left: isMenuOpen ? "12.5rem" : "4rem" }} // Ajustement pour correspondre à la largeur exacte de la div motion
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="hidden md:block absolute top-0 h-full w-[1px] bg-black z-50"
      />

      {/* Barre horizontale (Mobile) */}
      <div className="block md:hidden absolute top-16 left-0 w-full h-[1px] bg-black" />

      {/* Bouton du menu */}
      <div
        className="absolute md:top-1/2 md:left-4 top-4 right-4 transform md:-translate-y-1/2"
        onClick={toggleMenu}
      >
        <div className="w-8 h-8 md:w-10 md:h-10 p-1 mb-2 border border-black md:border md:border-transparent rounded-full cursor-pointer transition md:hover:border-transparent hover:border-primary group flex flex-col items-center justify-center">
          <div className="w-1 h-1 mb-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 mb-1 rounded-full bg-black group-hover:bg-primary" />
          <div className="w-1 h-1 rounded-full bg-black group-hover:bg-primary" />
        </div>
      </div>

      {/* Menu latéral avec animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-[15rem] md:w-[12.5rem] h-full bg-white shadow-lg z-40" // Ajustement de la largeur
      >
        {/* Bouton pour fermer */}
        <div className="flex justify-end p-4">
          <button
            className="text-black text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>

        {/* Contenu du menu */}
        <div className="md:p-4 space-y-6 ml-4">
          <div>
            <h2 className="text-lg font-bold cursor-pointer transition hover:text-primary">
              Sections
            </h2>
            <ul className="space-y-2">
              <li className="cursor-pointer transition hover:text-primary">
                Adulte
              </li>
              <li className="cursor-pointer transition hover:text-primary">
                Pédiatrie
              </li>
              <li className="cursor-pointer transition hover:text-primary">
                Drainage
              </li>
              <li className="cursor-pointer transition hover:text-primary">
                Haptonomie
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold cursor-pointer transition hover:text-primary">
              Avis patients
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold cursor-pointer transition hover:text-primary">
              Qui je suis
            </h2>
          </div>
          <div>
            <h2 className="text-lg font-bold">Contacts</h2>
            <div className="flex space-x-4 mt-2">
              <div className="w-10 h-10 bg-transparent border border-black flex items-center justify-center rounded-full cursor-pointer transition hover:border-primary hover:bg-primary">
                📞
              </div>
              <div className="w-10 h-10 bg-transparent border border-black flex items-center justify-center rounded-full cursor-pointer transition hover:border-primary hover:bg-primary">
                ✉️
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
