"use client";

import Image from "next/image";
import { Section } from "./Section";
import Wave from "react-wavify";
import Link from "next/link";

export const QuiJeSuis = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[600px] flex flex-col lg:flex-row items-center justify-between">
        <div className="z-10 w-full">
          <Wave
            fill="#a45c40"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 110,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
          <div className="bg-brand-dark flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-4 w-full">
            <div className="flex-shrink-0 md:mb-0 mx-auto md:mx-0 pl-6">
              <div
                className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-lg"
                style={{
                  borderRadius: "31% 69% 57% 43% / 73% 30% 70% 27% ",
                }}
              >
                <Image
                  src="/images/Logo2.webp"
                  alt="Logo de la marque Nopheïa"
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 192px, 224px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-base sm:text-xl text-justify text-brand-cream mt-4 px-4 py-4 lg:pr-8 sm:pb-4 lg:pb-8 font-playfair">
                Nopheïa est une marque fondée par Ophélie ROCHE, ostéopathe
                diplômée d&rsquo;État et ambassadrice de la méthode GAD® depuis
                3 ans. <br />
                <br />
                Elle s&rsquo;adresse à toutes les femmes qui souhaitent estomper
                leur cellulite, redessiner leur silhouette et retrouver une peau
                plus lisse et tonique. <br />
                <br />
                Notre expertise est de révéler le potentiel du corps féminin
                avec à une méthode 100% naturelle et bienveillante.
              </p>
              <Link href="/nopheia">
                <div className="w-full flex justify-center mt-5">
                  <p className="font-playfair text-lg md:text-2xl lg:text-xl text-brand-cream hover:text-brand-primary transition cursor-pointer underline pb-4 md:pb-0">
                    En savoir plus
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Wave
            fill="#a45c40"
            paused={false}
            style={{ display: "flex", transform: "rotate(180deg)" }}
            options={{
              height: 110,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
        </div>
      </div>
    </Section>
  );
};
