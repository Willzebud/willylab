"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatBelly = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-10">
            Le Belly GAD®, c&rsquo;est quoi ?
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden">
            <Image
              src="/images/ImgBe/BE1.webp"
              alt="Dessin de mains qui massent'"
              width={600}
              height={200}
              className="w-[200px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Les techniques du massage Chi Nei Tsang sont conçues pour apaiser
            l&rsquo;esprit en libérant les tensions émotionnelles qui peuvent
            s&rsquo;accumuler dans les organes de l&rsquo;abdomen. Grâce au
            travail ciblé sur chaque organe, notamment le foie, la rate, les
            intestins, vous ressentirez un profond apaisement intérieur. Les
            émotions négatives qui se sont logées dans ces organes trouvent une
            voie pour se libérer, favorisant ainsi un équilibre émotionnel.
          </p>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4">
            Il permet également d&rsquo;améliorer le transit intestinal, draine
            et détoxifie l&rsquo;organisme. Il élimine la rétention d&rsquo;eau
            avec une forte perte en cm assurée. De plus, il élimine le gras et
            améliore la tonicité de la peau grâce au GAD®. Une perte
            jusqu&rsquo;à 2 tailles en 1 séance avec une sensation de légèreté
            abdominale et une sensation de bien être assurée grâce à une
            reconnexion à ses émotions.
          </p>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgBe/BE1.webp"
            alt="Dessin de mains qui massent"
            width={600}
            height={600}
            className="w-[250px] md:w-[400px] lg:w-[400px] h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
