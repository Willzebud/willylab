"use client";

import { Section } from "../_components/Section";
import Wave from "react-wavify";

export const NotrePromesse = () => {
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
          <div className="bg-brand-primary flex flex-col items-center justify-center gap-4 w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-cream">
              Notre Promesse
            </h2>
            <p className="text-base sm:text-xl text-center text-brand-cream mt-4 px-4 py-4 lg:pr-8 sm:pb-4 lg:pb-8">
              Accompagner chaque femme dans une démarche de transformation
              douce, consciente et respectueuse. Pas pour correspondre à un
              idéal, mais pour se rapprocher de soi, reprendre confiance et se
              sentir belle dans sa peau.
            </p>
            <p className="font-bold text-brand-cream text-lg md:text-xl text-center">
              Yourself is more
            </p>
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
