"use client";

import { Section } from "../_components/Section";
import Image from "next/image";

export const CheckDetox = () => {
  const points = [
    "Tous les bénéfices de notre massage amincissant GAD®",
    "Relance la circulation sanguine et lymphatique",
    "Perte d'une taille en moyenne après la 1re séance",
    "Perte de centimètres et amélioration durable de la qualité de la peau",
    "Massage cocooning avec serviettes chaudes et manœuvres enveloppantes",
  ];

  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start content-between lg:gap-20">
        <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] flex flex-col gap-8">
          <h2 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            En résumé
          </h2>

          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary pb-6"
            >
              <div className="flex-shrink-0">
                <Image
                  src="/images/Check.webp"
                  alt="Icône de validation"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <p className="text-brand-dark text-base md:text-lg font-playfair">
                {highlightImportant(point)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Fonction pour mettre en gras automatiquement certaines parties du texte
function highlightImportant(text: string) {
  const boldWords = [
    "Relance la circulation",
    "Perte d'une taille",
    "Perte de centimètres",
    "amélioration de la qualité de la peau",
    "Massage Cocooning",
  ];

  let formattedText = text;
  boldWords.forEach((word) => {
    formattedText = formattedText.replace(word, `<strong>${word}</strong>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
