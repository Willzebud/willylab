"use client";

import { Section } from "../_components/Section";
import Wave from "react-wavify";

export const EnConclusion = () => {
  return (
    <Section>
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
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
          <div className="bg-brand-dark flex flex-col items-center justify-center gap-4 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-cream font-afrah">
              En conclusion
            </h2>
            <p className="font-playfair text-base sm:text-xl text-center text-brand-cream mt-4 px-4 py-4 lg:pr-8 sm:pb-4 lg:pb-8">
              Une perte moyenne de 8 cm au niveau de la taille, de 4 cm au
              niveau des cuisses, réduction de l’hypoderme de 33% en 15 séances,
              ainsi qu’une plus belle qualité de peau.
            </p>
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
