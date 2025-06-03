"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const WhatBelly = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-10">
            Notre Stomac Lift, c&rsquo;est quoi ?
          </h1>

          {/* Image mobile */}
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden mb-6">
            <Image
              src="/images/ImgBe/BE1.webp"
              alt="Dessin de mains qui massent"
              width={600}
              height={200}
              className="w-[200px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>

          {/* Texte */}
          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Inspiré du massage Chi Nei Tsang, notre Stomac Lift agit directement
            sur les organes de l’abdomen pour libérer les tensions physiques et
            émotionnelles accumulées. En ciblant notamment le foie, la rate et
            les intestins, il permet un apaisement profond, une reconnexion à
            soi et un équilibre émotionnel retrouvé.
          </p>

          <p className="font-playfair text-base sm:text-xl text-justify text-brand-dark mt-4">
            Ce soin améliore également le transit intestinal, draine, détoxifie
            l’organisme, et élimine la rétention d’eau avec des pertes de
            centimètres visibles dès la première séance. Grâce à la synergie
            avec le massage GAD®, il affine la silhouette, tonifie la peau et
            procure une sensation immédiate de légèreté abdominale, avec une
            perte pouvant aller jusqu’à 2 tailles !
          </p>
        </div>

        {/* Image desktop */}
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
