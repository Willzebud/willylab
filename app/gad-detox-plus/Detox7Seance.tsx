"use client";

import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Idéale pour celles et ceux qui font de la rétention d’eau, qui ont de la cellulite, et qui souhaitent perdre 1 à 2 tailles de vêtements en moins en un temps record (départ en vacances imminent, mariage, événement proche à venir…).",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Après votre premier Rdv Bilan, la Cure Detox Plus Express comprend un Bilan Final pour mesurer vos résultats. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin. Le massage GAD® Detox Plus est effectué sur les cuisses, les fesses, le ventre, les bras et les hanches. Chaque massage se termine par un drainage relaxant pour que vous repartiez 100% détendu(e).",
  },
  {
    question: "Comment se déroule la cure Detox Plus Express ?",
    answer:
      "On commence avec un premier rendez-vous bilan personnalisé suivi d'une séance GAD® Detox Plus. Ce bilan permet de réaliser un diagnostic complet de votre santé, de vous conseiller sur votre alimentation et votre activité physique, et d’adapter les séances à vos objectifs et à votre type de cellulite. \nCe rendez-vous d’1h15 comprend une prise de mesures, du poids, des photos, et se termine par un massage GAD® Detox Plus de 45 minutes. \nLa Cure Detox Plus Express vous accompagne et vous encourage tout au long des 3 semaines, à raison de 2 séances de 45 minutes par semaine.",
  },
];

export const Detox7Seance = () => {
  const points = [
    "1 à 2 tailles en moins de vêtement en moyenne",
    "Relance la circulation sanguine et lymphatique",
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
            Cure Detox Plus Express en 7 séances
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center lg:hidden mb-10">
            <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
              <Image
                src="/images/ImgSi/SI4.webp"
                alt="Image de l'offre : GAD® 7 séances"
                fill
                sizes="(max-width: 768px) 200px"
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pb-[50px]">
            Cette cure détoxifiante minceur permet en 7 séances de retrouver une
            allure dynamique et d&rsquo;éliminer la rétention d&rsquo;eau ainsi
            que la cellulite durablement.
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
              <p className="text-brand-dark text-base md:text-lg font-playfair"></p>
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
                135€ PAR SÉANCE
                <span className="text-lg font-normal font-playfair">
                  {" "}
                  / Économisez 105€ au total
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
        <div className="w-full lg:w-1/2 hidden lg:flex justify-center">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/images/ImgSi/SI4.webp"
              alt="Image de l'offre : GAD® 7 séances"
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
