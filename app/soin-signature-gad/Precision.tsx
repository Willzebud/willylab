"use client";

import { Section } from "../_components/Section";
import Wave from "react-wavify";

export const Precision = () => {
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
          <div className="bg-brand-dark w-full px-6 flex flex-col items-center justify-between gap-10">
            {/* Texte à gauche */}
            <div className="w-full">
              <p className="text-base sm:text-xl text-center text-brand-cream mt-4 px-4 py-4 lg:pr-8 sm:pb-4 lg:pb-8">
                Sans douleur, cette technique de massage utilise le Stretching
                Cellulaire pour activer les cellules paresseuses et offre des
                résultats durables.
              </p>
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
