"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatGad = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-10 font-afrah">
            Le Gad®, c&rsquo;est quoi ?
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden">
            <Image
              src="/images/ImgSi/SI2.webp"
              alt="Dessin de main qui masse"
              width={600}
              height={200}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair">
            Découvrez le Massage GAD® (Glisser Appuyer Décoller) : une méthode
            de massage amincissant révolutionnaire non invasive qui agit en
            profondeur pour éliminer les cellulites incrustées, stimuler la
            circulation sanguine et lymphatique, et améliorer la tonicité de la
            peau.
          </p>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4 font-playfair">
            Il a une triple action sur la circulation sanguine et lymphatique,
            sur les tissus graisseux et sur la fermeté de la peau. Le GAD®
            c&rsquo;est à la fois une forte action minceur (-0,5 cm par séance)
            et une action anti-cellulite sur l&rsquo;aspect peau d&rsquo;orange.
            Grâce au stretching cellulaire, c&rsquo;est une reprogrammation des
            cellules paresseuses qui sont réactivées. Cette reprogrammation dure
            dans le temps plusieurs semaines à plusieurs mois.
          </p>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgSi/SI2.webp"
            alt="Dessin de main qui masse"
            width={600}
            height={600}
            className="w-[250px] md:w-[400px] lg:w-[300px] h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
