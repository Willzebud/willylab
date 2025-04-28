"use client";
import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const points = [
  "Une perte moyenne d'une taille en moins",
  "Relance la circulation sanguine et lymphatique",
  "Amélioration de la qualité de la peau",
];

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Idéale pour celles et ceux qui font de la rétention d’eau et qui souhaiteraient perdre en centimètres en un temps record (départ vacances imminent, mariage, évènement proche à venir…).",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Après votre premier RDV Bilan, la Cure Express comprend un Bilan Final pour mesurer vos résultats. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin. Le massage GAD® est effectué sur les jambes, les cuisses, les hanches et le ventre. Chaque massage se termine par un massage drainant et relaxant pour que vous repartiez 100% détendu(e).",
  },
  {
    question: "Comment se déroule la cure Express ?",
    answer:
      "On commence avec un premier RDV bilan personnalisé suivi d'une séance GAD®. Ce bilan permet de faire un diagnostic complet sur votre santé pour vous conseiller au mieux sur votre alimentation et votre activité physique, et adapter les séances à vos objectifs et à votre type de cellulite.\nCe RDV d’1h15 comprend une prise de mesure, du poids, des photos et se termine par un massage GAD® de 45 min.\nLa Cure Express vous accompagne et vous encourage tout au long des 3 semaines, à raison de 2 séances de 45min par semaine.",
  },
];

export const Gad7Seance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="pt-[100px]">
      <div className="relative z-0 w-full mx-auto xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-start justify-between lg:gap-8">
        {/* Texte */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
            Cure express en 7 séances
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

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify mb-10">
            Cette cure minceur permet en 7 séances de retrouver une allure
            dynamique et d&apos;éliminer la rétention d&apos;eau qui nous fait
            gonfler.
          </p>

          {/* Points forts */}
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary py-6"
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
          <div className="space-y-6 pt-[80px]">
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

          {/* Prix et bouton */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="font-playfair text-brand-primary text-2xl text-center">
                115€ PAR SÉANCE
                <br />
                <span className="text-base text-brand-dark">
                  / Économisez 105€ au total
                </span>
              </p>
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

            <p className="font-playfair text-brand-dark text-sm text-center mt-4">
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
