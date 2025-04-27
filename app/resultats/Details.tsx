"use client";

import { Section } from "../_components/Section";
import Wave from "react-wavify";

export const Details = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
        <div className="z-10 w-full">
          <Wave
            fill="#DE7630"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 110,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          />
          <div className="bg-brand-primary w-full px-6 flex flex-col items-center justify-between gap-10">
            {/* Texte à gauche */}
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-cream font-afrah">
                Cellulite diminuée et une peau tonifiée
              </h2>
              <p className="font-playfair text-base sm:text-xl text-center text-brand-cream mt-4 px-4 py-4 lg:pr-8 sm:pb-4 lg:pb-8">
                La moyenne des résultats obtenus de l&rsquo;étude clinique sur
                10 personnes de 20 à 65 ans. Les patients ont donc suivi la cure
                de 15 séances de massage de 30 minutes.
              </p>
            </div>

            {/* Données animées */}
            <div className="w-full flex flex-col md:flex-row lg:flex-row justify-center items-center justify-around text-center gap-10">
              {/* -8 cm */}
              <div>
                <p className="text-5xl font-bold text-brand-cream animate-pulse font-playfair">
                  -8cm
                </p>
                <p className="text-brand-cream mt-2 text-sm font-semibold font-playfair">
                  en tour de taille
                </p>
              </div>

              {/* -3.7 cm */}
              <div>
                <p className="text-5xl font-bold text-brand-cream animate-pulse font-playfair">
                  -3.7cm
                </p>
                <p className="text-brand-cream mt-2 text-sm font-semibold font-playfair">
                  en tour de cuisses
                </p>
              </div>

              {/* 2 tailles */}
              <div>
                <p className="text-5xl font-bold text-brand-cream animate-pulse font-playfair">
                  2
                </p>
                <p className="text-brand-cream mt-2 text-sm font-semibold font-playfair">
                  tailles de vêtement en moins
                </p>
              </div>
            </div>
          </div>
          <Wave
            fill="#DE7630"
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
