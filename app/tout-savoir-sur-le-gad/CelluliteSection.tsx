"use client";

import Image from "next/image";
import { Section } from "../_components/Section";

export const CelluliteSection = () => {
  return (
    <Section className="bg-brand-cream py-12 px-4">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px]">
        {/* Partie Titre + Texte */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary w-full lg:w-1/2 font-afrah">
            C’est quoi la cellulite ?
          </h2>
          <div className="text-brand-dark text-lg md:text-xl text-justify w-full lg:w-1/2 leading-relaxed font-playfair">
            <p className="mb-4">
              La cellulite est formée par une augmentation de cellules
              graisseuses qui compriment le réseau sanguin et entraînent un
              capitonnage de la peau.
            </p>
            <p className="text-sm md:text-base">
              Le Massage GAD® permet d’activer la circulation sanguine et
              lymphatique pour éliminer et déstocker les amas graisseux. En
              conséquence, l’aspect de la cellulite diminue, en plus d’une perte
              de centimètres au niveau de la taille des hanches et des cuisses.
            </p>
          </div>
        </div>

        {/* Partie Images + Légendes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image 1 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ImgMa/MA3.webp"
              alt="Schéma d'une peau avec cellulite"
              width={400}
              height={300}
              sizes="(max-width: 768px) 80vw, 400px"
              className="w-full h-auto max-w-sm object-contain"
              priority
            />
            <h3 className="mt-4 font-semibold text-brand-dark font-playfair">
              Une peau avec de la cellulite
            </h3>
            <p className="text-sm text-brand-dark mt-2 font-playfair">
              Les adipocytes en excès
              <br />
              compriment le réseau sanguin
              <br />
              et entraînent un capitonnage de la peau.
            </p>
          </div>

          {/* Image 2 */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/ImgMa/MA4.webp"
              alt="Schéma d'une peau normale et lisse"
              width={400}
              height={300}
              sizes="(max-width: 768px) 80vw, 400px"
              className="w-full h-auto max-w-sm object-contain"
              priority
            />
            <h3 className="mt-4 font-semibold text-brand-dark font-playfair">
              Une peau normale et lisse
            </h3>
            <p className="text-sm text-brand-dark mt-2 font-playfair">
              Les adipocytes sont en quantité limitée,
              <br />
              le flux sanguin est facilité.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
