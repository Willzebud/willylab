"use client";
import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const points = [
  "1 à 2 tailles de vêtement en moins en moyenne",
  "Relance la circulation sanguine et lymphatique",
  "Forte diminution de la cellulite",
  "Amélioration de la fermeté de la peau",
];

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Pour celles et ceux qui souhaitent perdre un maximum de centimètres, tonifier leur peau et diminuer l’aspect de leur cellulite.",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Après votre premier RDV Bilan, la Cure Signature comprend un bilan intermédiaire ainsi qu’un Bilan Final. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin.\nLe massage GAD® est effectué sur les jambes, les cuisses, les hanches et le ventre.\nChaque massage se termine par un drainage relaxant pour vous repartir 100% détendu(e).",
  },
  {
    question: "Comment se déroule la cure Signature ?",
    answer:
      "On commence avec un premier RDV bilan personnalisé suivi d'une séance GAD®. Ce bilan permet de faire un diagnostic complet sur votre santé, de vous conseiller au mieux pour votre alimentation et votre activité physique, et d'adapter les séances à vos objectifs.\nCe RDV d’1h15 comprend une prise de mesure, du poids, des photos, et se termine par un massage GAD® de 45 min.\nLa Cure Signature vous accompagne pendant 7 semaines, à raison de 2 séances de 45 min par semaine.",
  },
];

export const Gad14Seance = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="pt-[100px]">
      <div className="relative z-0 w-full mx-auto xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col lg:flex-row items-start justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
            Cure signature en 14 séances
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center lg:hidden mb-10">
            <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
              <Image
                src="/images/ImgSi/SI5.webp"
                alt="Image de l'offre : GAD® 14 séances"
                fill
                sizes="(max-width: 768px) 200px"
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify mb-10">
            Cette cure minceur de 14 séances est la cure phare, celle qui offre
            les meilleurs résultats. L&apos;étude clinique a d’ailleurs été
            menée sur cette cure et démontre l&apos;efficacité de cette méthode
            unique de massage amincissant.
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
                  <div className="mt-2 font-playfair text-brand-dark text-base md:text-lg font-light text-justify">
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

          {/* Prix + Bouton */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <p className="font-playfair text-brand-primary text-2xl text-center">
                100€ PAR SÉANCE
                <br />
                <span className="text-base text-brand-dark">
                  / Économisez 420€ au total
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
              src="/images/ImgSi/SI5.webp"
              alt="Image de l'offre : GAD® 14 séances"
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
