"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroGad = () => {
  return (
    <Section className="pt-[100px] lg:pt-[0px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Qu’est-ce que le GAD® ?
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden">
            <Image
              src="/images/ImgMa/MA2.webp"
              alt="Dessin de main qui masse"
              width={600}
              height={600}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Créé par Anne Cali, c&apos;est une méthode unique basée sur un
            massage manuel très profond qui consiste à saisir les tissus de la
            peau avec la paume de la main que l&apos;on va mettre sous pression
            et que l&apos;on relâche comme une sorte de ventouse. D&apos;où le
            nom G.A.D qui signifie tout simplement Glisser Appuyer Décoller.
          </p>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgMa/MA2.webp"
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
