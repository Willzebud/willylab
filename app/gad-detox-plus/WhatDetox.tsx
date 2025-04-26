"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatDetox = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Le GAD® detox plus, c&rsquo;est quoi ?
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden">
            <Image
              src="/images/ImgSi/SI1.webp"
              alt="Dessin de main qui masse"
              width={600}
              height={200}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Le GAD® Détox Plus a été mis en place pour allier l&rsquo;effet
            immédiat du drainage lymphatique à l&rsquo;effet durable et visible
            du massage GAD®. Le drainage profond offre un résultat instantané
            sur le retour veineux et lymphatique qui dure 24 à 48h, tandis que
            le GAD® montre ses premiers résultats au bout de 24 à 48h, qui vont
            ensuite durer plusieurs semaines.
          </p>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Enveloppé dans des serviettes éponges humides et chaudes, vous êtes
            immédiatement transporté dans une atmosphère cocooning. Vous
            profitez pleinement du massage à la fois efficace et relaxant.
          </p>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgSi/SI1.webp"
            alt="Dessin de main qui masse"
            width={600}
            height={600}
            className="w-[250px] md:w-[400px] lg:w-[400px] h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
