"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const EtudeClinique = () => {
  return (
    <Section className="lg:pt-[0px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Étude clinique complète
          </h2>
          <div className="lg:hidden w-full lg:w-1/2 flex justify-center">
            <Image
              src="/images/ImgMa/MA5.webp"
              alt="Illustration d'une poignée de main symbole d'une étude clinique validée"
              width={600}
              height={600}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Le massage GAD® a fait l&apos;objet d&apos;une étude clinique en
            collaboration avec le Dr Blanchemaison qui valide l&apos;efficacité
            de cette méthode. Cette étude a été menée sur 12 personnes qui ont
            suivi 15 séances de 30 minutes à raison de 3 séances par semaine.
            Les mesures ont été prises au Doppler.
          </p>
          <p className="text-lg md:text-xl text-brand-dark leading-relaxed mt-10">
            En 15 séances, c&rsquo;est en moyenne : -8cm Taille | – 4cm cuisses
            | -33% graisse corporelle
          </p>
          <div className="w-full flex justify-center mt-5">
            <div className="mt-12">
              <a
                href="https://annecali.com/wp-content/uploads/2024/08/Me%CC%81thode-Anne-CALI-Presse-avec-annexe-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
                  Consultez l’étude clinique
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgMa/MA5.webp"
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
