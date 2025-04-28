"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatGad = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-10">
            Le GAD®, c&rsquo;est quoi ?
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center lg:hidden mb-6">
            <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
              <Image
                src="/images/ImgSi/SI2.webp"
                alt="Dessin de main qui masse"
                fill
                sizes="(max-width: 768px) 150px, 200px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Textes */}
          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Découvrez le Massage GAD® (Glisser Appuyer Décoller) : une méthode
            de massage amincissant révolutionnaire non invasive qui agit en
            profondeur pour éliminer les cellulites incrustées, stimuler la
            circulation sanguine et lymphatique, et améliorer la tonicité de la
            peau.
          </p>
          <p className="font-playfair text-base sm:text-xl text-brand-dark leading-relaxed text-justify mt-4">
            Il a une triple action sur la circulation sanguine et lymphatique,
            sur les tissus graisseux et sur la fermeté de la peau. Le GAD®
            c&rsquo;est à la fois une forte action minceur (-0,5 cm par séance)
            et une action anti-cellulite sur l&rsquo;aspect peau d&rsquo;orange.
            Grâce au stretching cellulaire, c&rsquo;est une reprogrammation des
            cellules paresseuses qui sont réactivées. Cette reprogrammation dure
            plusieurs semaines à plusieurs mois.
          </p>
        </div>

        {/* Image desktop */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/images/ImgSi/SI2.webp"
              alt="Dessin de main qui masse"
              fill
              sizes="(min-width: 1024px) 300px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
