"use client";

import { Section } from "../_components/Section";
import Image from "next/image";

export const CheckBelly = () => {
  const points = [
    "Tous les bénéfices énergétiques du massage Chi Nei Tsang et du massage amincissant GAD®",
    "Réduction de la rétention d'eau et de la cellulite sur le ventre",
    "Amélioration de la tonicité de la peau de l’abdomen",
    "Diminution de la graisse corporelle de l’abdomen",
    "Une perte jusqu’à 2 tailles en 1 séance avec une sensation de légèreté",
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
                  alt="Check"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <p className="font-playfair text-brand-dark text-base md:text-lg">
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
    "la rétention d'eau et de la cellulite sur le ventre",
    "la tonicité de la peau de l’abdomen",
    "la graisse corporelle de l’abdomen",
    "Une perte jusqu’à 2 tailles",
  ];

  let formattedText = text;
  boldWords.forEach((word) => {
    formattedText = formattedText.replace(word, `<strong>${word}</strong>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
