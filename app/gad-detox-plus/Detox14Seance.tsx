"use client";

import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Pour celles et ceux qui souhaitent perdre un maximum de centimètres, tonifier leur peau et réduire durablement l’aspect de leur cellulite.",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Après votre premier rendez-vous bilan, la Cure Detox Plus Signature comprend un bilan intermédiaire ainsi qu’un bilan final. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin. Le massage GAD® Detox Plus est effectué sur les cuisses, les fesses, le ventre, les bras et les hanches. \nChaque massage se termine par un drainage relaxant pour que vous repartiez 100% détendu(e).",
  },
  {
    question: "Comment se déroule la cure Detox Plus Signature ?",
    answer:
      "On commence par un premier rendez-vous bilan personnalisé suivi d'une séance GAD® Detox Plus. Ce bilan permet d’établir un diagnostic complet, de vous conseiller pour votre alimentation et votre activité physique, et d’adapter les séances à vos objectifs et à votre type de cellulite. \nCe rendez-vous d’1h15 comprend une prise de mesures, du poids, des photos et se termine par un massage GAD® Detox Plus de 45 minutes. \nLa Cure Detox Plus Signature vous accompagne tout au long des 7 semaines, à raison de 2 séances de 45 minutes par semaine.",
  },
];

export const Detox14Seance = () => {
  const points = [
    "2 tailles en moins de vêtement en moyenne",
    "Relance la circulation sanguine et lymphatique",
    "Forte diminution de la cellulite et de la rétention d'eau",
    "Amélioration durable de la qualité et de la fermeté de la peau",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Section className="pt-[100px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-start justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-[50px]">
            Cure Detox Plus Signature en 14 séances
          </h1>

          {/* Image mobile */}
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden mb-[40px]">
            <Image
              src="/images/ImgSi/SI5.webp"
              alt="Image de l'offre : GAD® Detox Plus 14 séances"
              width={600}
              height={200}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pb-[50px]">
            Cette cure minceur détoxifiante de 14 séances est notre programme le
            plus complet, offrant des résultats spectaculaires qui durent dans
            le temps.
          </p>

          {/* Points */}
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary pt-6 pb-6"
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

          {/* FAQ */}
          <div className="space-y-6 pt-[100px]">
            {questions.map((item, index) => (
              <div key={index} className="border-b border-brand-primary pb-4">
                <button
                  onClick={() => toggle(index)}
                  className={`font-playfair w-full text-left text-lg md:text-xl font-light tracking-wide transition-all duration-300 ease-in-out hover:text-brand-primary ${
                    openIndex === index
                      ? "text-brand-primary"
                      : "text-brand-dark"
                  }`}
                >
                  {item.question}
                </button>

                {openIndex === index && (
                  <div className="font-playfair mt-2 text-brand-dark text-base md:text-lg font-light text-justify">
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
          <div className="mt-12 w-full flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <p className="text-brand-primary text-2xl font-playfair">
                120€ PAR SÉANCE
                <span className="font-playfair font-normal text-lg">
                  {" "}
                  / Économisez 420€ au total
                </span>
              </p>

              {/* Texte mobile */}
              <p className="text-brand-dark text-sm text-center block md:hidden font-playfair">
                * Possibilité de payer en plusieurs fois sans frais
              </p>

              {/* Bouton */}
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition whitespace-nowrap">
                  Rendez-vous
                </button>
              </a>
            </div>

            {/* Texte desktop */}
            <p className="font-playfair text-brand-dark text-sm text-center hidden md:block mt-4">
              * Possibilité de payer en plusieurs fois sans frais
            </p>
          </div>
        </div>

        {/* Image desktop */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgSi/SI5.webp"
            alt="Image de l'offre : GAD® Detox Plus 14 séances"
            width={600}
            height={600}
            className="w-[250px] md:w-[400px] lg:w-[300px] h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};

// Fonction pour mettre en gras automatiquement certaines parties du texte
function highlightImportant(text: string) {
  const boldWords = [
    "2 tailles en moins",
    "Relance la circulation",
    "la cellulite et de la rétention d'eau qui dure dans le temps",
    "la qualité et de la fermeté de la peau qui dure dans le temps",
  ];

  let formattedText = text;
  boldWords.forEach((word) => {
    formattedText = formattedText.replace(word, `<strong>${word}</strong>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
