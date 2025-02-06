"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TiktokIcon } from "./icons/Tiktok";
import { InstaIcon } from "./icons/Insta";
import { YoutubeIcon } from "./icons/Youtube";
import { Dispatch, SetStateAction } from "react";

type HeroProps = {
  setHeroHeight: Dispatch<SetStateAction<number>>;
  setHeroWidth: Dispatch<SetStateAction<number>>;
};

export const Hero = ({ setHeroHeight, setHeroWidth }: HeroProps) => {
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
      className="relative z-0 w-full h-auto mx-auto lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%]" // Ajustement des largeurs
    >
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/fonds/Fond-1.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          priority
          className="z-0 object-cover"
        />
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-auto lg:h-full space-y-6">
        {/* Logo et Carte d'information */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-32 mb-10 lg:mb-6">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 mt-5 md:mb-0">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border border-black bg-white flex items-center justify-center text-lg md:text-xl lg:text-2xl font-semibold">
              Logo
            </div>
          </div>

          {/* Carte d'information */}
          <div className="bg-white p-4 mx-2 mt-5 rounded-lg shadow-lg w-auto  lg:max-w-xl">
            <h2 className="text-lg md:text-xl font-bold text-center md:text-left">
              Ophélie Roche. Ostéopathe
            </h2>
            <p className="text-gray-500 mb-2 text-center md:text-left">
              Santé/beauté
            </p>
            <ul className="text-sm md:text-base text-center md:text-left">
              <li>🎓 Ostéopathe D.O</li>
              <li>🌿 Soin drainant & anti-cellulite</li>
              <li>🌿 Posturologie</li>
              <li>🏋️‍♀️ Préparatrice physique</li>
            </ul>
            <p className="text-sm md:text-base text-gray-700 mt-4 text-center md:text-left">
              Résidence la Malounière, bât G, avenue de Verdun, Aubagne 13400
            </p>
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere"
              className="text-blue-600 underline mt-2 block text-center md:text-left"
            >
              www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere
            </a>
          </div>
        </div>

        {/* Icônes sociales */}
        <div className="flex space-x-6 md:space-x-16 lg:space-x-32 mt-6 pb-6 lg:pb-0 lg:pt-8">
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <TiktokIcon size={30} />
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <InstaIcon size={30} />
          </div>
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white border border-black flex items-center justify-center cursor-pointer transition hover:bg-primary">
            <YoutubeIcon size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
