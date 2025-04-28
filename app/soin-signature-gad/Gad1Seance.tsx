"use client";
import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const points = [
  "Une perte moyenne de 0,5cm par séance",
  "Relance la circulation sanguine et lymphatique",
  "Amélioration de la qualité de la peau",
];

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Idéale pour celles et ceux qui souhaitent découvrir le GAD® et ses bienfaits.",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Un bilan complet ainsi qu’une séance de massage GAD®. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin. Le massage GAD est effectué sur les jambes, les cuisses, les hanches et le ventre. Chaque massage se termine par un massage drainant et relaxant pour que vous repartiez 100% détendu(e).",
  },
];

export const Gad1Seance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="pt-[100px]">
      <div className="relative z-0 w-full mx-auto xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-start justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-[50px]">
            1 séance - Cure GAD®
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center lg:hidden mb-[40px]">
            <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
              <Image
                src="/images/ImgSi/SI3.webp"
                alt="Image de l'offre : GAD® 1 séance"
                fill
                sizes="(max-width: 768px) 200px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Texte d'introduction */}
          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pb-[50px]">
            Idéal pour découvrir le Massage GAD®.
          </p>

          {/* Points forts */}
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary pt-6 pb-6"
            >
              <Image
                src="/images/Check.webp"
                alt="Check"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <p className="font-playfair text-brand-dark text-base md:text-lg">
                {point}
              </p>
            </div>
          ))}

          {/* FAQ */}
          <div className="space-y-6 pt-[100px]">
            {questions.map((item, index) => (
              <div key={index} className="border-b border-brand-primary pb-4">
                <button
                  onClick={() => toggle(index)}
                  className={`font-playfair w-full text-left text-lg md:text-xl font-light tracking-wide transition-all duration-300 ${
                    openIndex === index
                      ? "text-brand-primary"
                      : "text-brand-dark"
                  }`}
                >
                  {item.question}
                </button>
                {openIndex === index && (
                  <div className="mt-2 text-brand-dark font-playfair text-base md:text-lg font-light text-justify">
                    {item.answer.split("\n").map((line, i) => (
                      <p key={i} className="mb-3">
                        {line}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Prix + bouton */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8">
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
                  Rendez-vous
                </button>
              </a>
              <p className="font-playfair text-brand-primary text-2xl">
                130€ PAR SÉANCE
              </p>
            </div>
          </div>
        </div>

        {/* Image desktop */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/images/ImgSi/SI3.webp"
              alt="Image de l'offre : GAD® 1 séance"
              fill
              sizes="(min-width: 1024px) 300px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

// Fonction pour mettre en gras automatiquement certaines parties du texte
function highlightImportant(text: string) {
  const boldWords = [
    "0,5cm par séance",
    "Relance la circulation",
    "qualité de la peau",
  ];

  let formattedText = text;
  boldWords.forEach((word) => {
    formattedText = formattedText.replace(word, `<strong>${word}</strong>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
