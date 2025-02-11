"use client";

import { Section } from "./Section";
import { X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 bg-background">
      <Section className="flex items-center justify-between">
        {/* Cercle à gauche */}
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-black bg-transparent cursor-pointer transition hover:border-primary hover:bg-primary" />

        {/* Boutons Tarifs et Rendez-vous */}
        <div className=" relative flex items-center space-x-2">
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-lg cursor-pointer transition lg:hover:border lg:hover:border-primary group">
            <p className="text-black group-hover:text-primary">Tarifs</p>
          </div>
          <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-lg cursor-pointer transition lg:hover:border lg:hover:border-primary group">
            <p className="text-black group-hover:text-primary">Rendez-vous</p>
          </div>
          {/* Cercle avec trois points */}
          <div className="relative flex items-center ipadPro:hidden">
            <div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-black bg-transparent cursor-pointer transition hover:border-primary hover:bg-primary flex items-center justify-center"
              onClick={toggleMenu}
            >
              <div className="space-y-[2px] flex flex-col items-center">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <span className="w-1 h-1 bg-black rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Barre horizontale animée (Mobile) */}
      <motion.div
        initial={{ top: "4rem", opacity: 0 }}
        animate={{
          top: isMenuOpen ? "30rem" : "4rem",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="block ipadPro:hidden h-[1px] bg-black z-50 mx-auto"
        style={{
          maxWidth: "95%", // Assure que la barre a la même largeur que le Hero
          left: 0, // Centrage horizontal
          right: 0, // Centrage horizontal
          position: "absolute", // Permet le déplacement vertical (top)
        }}
      />

      {/* Menu latéral avec animation */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 left-0 w-full h-[30rem] bg-white shadow-lg z-40 ipadPro:hidden`}
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
        <div className="p-4 space-y-6 ml-4">
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
            <h2 className="text-lg font-bold cursor-pointer transition hover:text-primary">
              Contacts
            </h2>
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
    </header>
  );
};
