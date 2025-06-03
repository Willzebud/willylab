"use client";

import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatDetox = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-10">
            Notre Massage Drainant & Detox Plus, c&rsquo;est quoi ?
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center lg:hidden mb-6">
            <div className="relative w-[200px] md:w-[250px] h-[200px] overflow-hidden">
              <Image
                src="/images/ImgSi/SI1.webp"
                alt="Dessin d'une femme allongée et enveloppée de serviettes"
                fill
                sizes="(max-width: 768px) 200px, 400px"
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Il a été créé pour allier l&rsquo;effet immédiat du drainage
            lymphatique à l&rsquo;effet durable et visible du massage GAD®. Le
            drainage profond offre un résultat instantané sur le retour veineux
            et lymphatique qui dure 24 à 48h, tandis que le GAD® montre ses
            premiers résultats au bout de 24 à 48h, et ses effets persistent
            plusieurs semaines.
          </p>
          <p className="font-playfair text-base sm:text-xl text-justify text-brand-dark mt-4">
            Enveloppé dans des serviettes éponges humides et chaudes, vous êtes
            immédiatement transporté dans une atmosphère cocooning. Vous
            profitez pleinement d&rsquo;un massage à la fois efficace et
            relaxant.
          </p>
        </div>

        {/* Image desktop */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/images/ImgSi/SI1.webp"
              alt="Dessin d'une femme allongée et enveloppée de serviettes"
              fill
              sizes="(min-width: 1024px) 400px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
