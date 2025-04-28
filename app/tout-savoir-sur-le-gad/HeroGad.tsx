"use client";

import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroGad = () => {
  return (
    <Section className="pt-[100px] lg:pt-[0px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6 font-afrah">
            Qu’est-ce que le GAD® ?
          </h1>

          {/* Image pour mobile */}
          <div className="w-full flex justify-center lg:hidden mb-6">
            <Image
              src="/images/ImgMa/MA2.webp"
              alt="Dessin de main qui masse"
              width={300}
              height={300}
              sizes="(max-width: 768px) 70vw"
              className="object-contain w-[150px] md:w-[200px] h-auto"
              priority
            />
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair px-4 lg:px-0">
            Créé par Anne Cali, c&apos;est une méthode unique basée sur un
            massage manuel très profond qui consiste à saisir les tissus de la
            peau avec la paume de la main que l&apos;on va mettre sous pression
            et que l&apos;on relâche comme une sorte de ventouse. D&apos;où le
            nom G.A.D qui signifie tout simplement Glisser Appuyer Décoller.
          </p>
        </div>

        {/* Image pour desktop */}
        <div className="w-full lg:w-1/2 flex justify-center hidden lg:flex">
          <Image
            src="/images/ImgMa/MA2.webp"
            alt="Dessin de main qui masse"
            width={400}
            height={400}
            sizes="(min-width: 1024px) 400px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Section>
  );
};
