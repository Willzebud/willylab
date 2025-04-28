"use client";

import Image from "next/image";
import { Section } from "../_components/Section";

export const EtudeClinique = () => {
  return (
    <Section className="lg:pt-[0px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center lg:text-left text-brand-primary mb-6">
            Étude clinique complète
          </h2>

          {/* Image pour mobile */}
          <div className="w-full flex justify-center lg:hidden mb-6">
            <Image
              src="/images/ImgMa/MA5.webp"
              alt="Illustration d'une poignée de main symbole d'une étude clinique validée"
              width={300}
              height={300}
              sizes="(max-width: 768px) 70vw"
              priority
              className="object-contain"
            />
          </div>

          {/* Texte */}
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair mb-6 px-4 lg:px-0">
            Le massage GAD® a fait l&apos;objet d&apos;une étude clinique en
            collaboration avec le Dr Blanchemaison qui valide l&apos;efficacité
            de cette méthode. Cette étude a été menée sur 12 personnes qui ont
            suivi 15 séances de 30 minutes à raison de 3 séances par semaine.
            Les mesures ont été prises au Doppler.
          </p>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed font-playfair mb-8 px-4 lg:px-0">
            En 15 séances, c&rsquo;est en moyenne : -8cm Taille | – 4cm cuisses
            | -33% graisse corporelle
          </p>

          {/* Bouton */}
          <div className="flex justify-center lg:justify-start w-full">
            <a
              href="https://annecali.com/wp-content/uploads/2024/08/Me%CC%81thode-Anne-CALI-Presse-avec-annexe-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition font-playfair">
                Consultez l’étude clinique
              </button>
            </a>
          </div>
        </div>

        {/* Image pour desktop */}
        <div className="w-full lg:w-1/2 flex justify-center hidden lg:flex">
          <Image
            src="/images/ImgMa/MA5.webp"
            alt="Illustration d'une poignée de main symbole d'une étude clinique validée"
            width={400}
            height={400}
            sizes="(min-width: 1024px) 400px"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
};
