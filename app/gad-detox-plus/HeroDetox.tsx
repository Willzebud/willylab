"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroDetox = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col md:flex-row lg:flex-row items-center justify-between md:gap-10 lg:gap-20">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Le GAD Detox Plus
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center md:hidden lg:hidden rounded-xl shadow-lg">
            <Image
              src="/images/ImgSoins/2.webp"
              alt="Image de l'offre : GAD Detox +"
              width={600}
              height={200}
              className="object-cover w-full h-[260px] md:h-[300px] lg:h-[320px] rounded-xl shadow-lg"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify pt-[40px] lg:pt-[5px]">
            Le GAD® Détox + combine l&rsquo;effet immédiat du drainage
            lymphatique au résultat durable du GAD®. Le Massage GAD® agit sur la
            circulation veineuse, le déstockage des graisses et la tonicité de
            la peau, avec des effets persistants.
          </p>
          {/* 👉 Bouton visible uniquement sur desktop */}
          <div className="w-full hidden md:flex lg:flex justify-center mt-12">
            <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
              Réservez un premier bilan
            </button>
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center rounded-xl shadow-lg">
          <Image
            src="/images/ImgSoins/2.webp"
            alt="Image de l'offre : GAD Detox +"
            width={600}
            height={600}
            className="object-cover w-full h-[260px] md:h-[300px] lg:h-[320px] hidden md:block lg:block rounded-xl shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
};
