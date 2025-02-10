"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { DrainageIcon } from "@/public/images/IconesSections/Drainage";
import { HaptoIcon } from "@/public/images/IconesSections/Hapto";
import { PediatrieIcon } from "@/public/images/IconesSections/Pediatrie";
import { OsteoIcon } from "@/public/images/IconesSections/Osteo";

type HeroProps = {
  setHeroHeight: Dispatch<SetStateAction<number>>;
  setHeroWidth: Dispatch<SetStateAction<number>>;
};

export const Sections = ({ setHeroHeight, setHeroWidth }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight;
      const width = heroRef.current.offsetWidth;
      setHeroHeight(height);
      setHeroWidth(width);
    }
  }, [setHeroHeight, setHeroWidth]);

  return (
    <div
      ref={heroRef}
      className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%]"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/FondCartes/Fond2.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>

      {/* Contenu des sections */}
      <div id="Services" className="relative z-10 pb-20">
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10 ml-4">
          <h2 className="font-bold text-5xl text-left text-[#023333] leading-none">
            Sections
          </h2>
        </div>

        {/* Conteneur pour centrer les cartes */}
        <div className="flex justify-center items-center h-auto mt-10">
          {/* Cartes des sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 w-full">
            {/* Carte Ostéopathie adulte */}
            <div className="relative flex flex-col items-center bg-[#023333] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#A9E6DA] group">
              {/* Icône */}
              <div className="w-16 h-16 mb-4 text-primary transition-opacity duration-300 group-hover:opacity-40">
                <OsteoIcon className="w-full h-full" />
              </div>

              {/* Texte principal */}
              <h3 className="font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-40">
                Ostéopathie adulte
              </h3>

              {/* Texte "Voir plus" qui apparaît au hover */}
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Voir plus
              </p>
            </div>

            {/* Carte Pédiatrie */}
            <div className="relative flex flex-col items-center bg-[#023333] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#A9E6DA] group">
              {/* Icône */}
              <div className="w-16 h-16 mb-4 text-primary transition-opacity duration-300 group-hover:opacity-40">
                <PediatrieIcon className="w-full h-full" />
              </div>

              {/* Texte principal */}
              <h3 className="font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-40">
                Pédiatrie
              </h3>

              {/* Texte "Voir plus" */}
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Voir plus
              </p>
            </div>

            {/* Carte Drainage */}
            <div className="relative flex flex-col items-center bg-[#023333] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#A9E6DA] group">
              {/* Icône */}
              <div className="w-16 h-16 mb-4 text-primary transition-opacity duration-300 group-hover:opacity-40">
                <DrainageIcon className="w-full h-full" />
              </div>

              {/* Texte principal */}
              <h3 className="font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-40">
                Drainage
              </h3>

              {/* Texte "Voir plus" */}
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Voir plus
              </p>
            </div>

            {/* Carte Haptonomie */}
            <div className="relative flex flex-col items-center bg-[#023333] p-6 rounded-lg shadow-lg transition duration-300 hover:bg-[#A9E6DA] group">
              {/* Icône */}
              <div className="w-16 h-16 mb-4 text-primary transition-opacity duration-300 group-hover:opacity-40">
                <HaptoIcon className="w-full h-full" />
              </div>

              {/* Texte principal */}
              <h3 className="font-bold text-white text-center transition-opacity duration-300 group-hover:opacity-40">
                Haptonomie
              </h3>

              {/* Texte "Voir plus" */}
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Voir plus
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
