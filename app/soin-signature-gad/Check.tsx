"use client";

import { Section } from "../_components/Section";
import Image from "next/image";

export const Check = () => {
  const points = [
    "Tous les bénéfices de notre massage amincissant GAD®",
    "Relance de la circulation sanguine et lymphatique",
    "Perte de centimètres et amélioration de la qualité de la peau durable",
    "Expérience de massage inédite et relaxante",
  ];

  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
        <div className="w-full xl:w-[80%] max-w-[95%] flex flex-col gap-8">
          <h2 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            En résumé
          </h2>

          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary py-6"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/images/Check.webp"
                  alt="Check"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <p className="font-playfair text-brand-dark text-base md:text-lg">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
