"use client";
import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const questions = [
  {
    question: "Pour qui est cette cure ?",
    answer:
      "Idéale pour celles et ceux qui font de la rétention d’eau et qui souhaiteraient perdre en centimètres en un temps record (départ vacances iminante, mariage, évènement proche à venir…)",
  },
  {
    question: "Que comprend-elle ?",
    answer:
      "Après votre premier Rdv Bilan, la Cure Express comprend un Bilan Final pour mesurer vos résultats. Le suivi est personnalisé avec un réajustement de la fréquence des séances si besoin. Le massage GAD® est effectué sur les jambes, les cuisses, les hanches et le ventre. Chaque massage se termine par un massage drainant et relaxant pour vous que repartez 100% détendu(e).",
  },
  {
    question: "Comment se déroule la cure Express ?",
    answer:
      "On commence avec un premier rdv bilan personnalisé suivi d'une séance GAD®. Ce bilan permet de faire un diagnostic complet sur votre santé vous conseiller au mieux pour votre alimentation et votre activité physique et adapter les séances de massage à vos objectifs et à votre type de cellulite. \nCe rdv d’1h15 comprend une prise de mesure, du poids, des photos et se termine par un massage GAD® de 45 min. \nLa Cure Express vous accompagne et vous encourage tout au long des 3 semaines. À raison de 2 séances de 45min par semaine.",
  },
];

export const Gad7Seance = () => {
  const points = [
    "Une perte moyenne d'une taille en moins",
    "Relance la circulation sanguine et lymphatique",
    "Amélioration de la qualité de la peau",
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
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-[50px]">
            Cure express en 7 séances
          </h1>
          <div>
            <div className="w-full lg:w-1/2 flex justify-center lg:hidden mb-[40px]">
              <Image
                src="/images/ImgSi/SI4.webp"
                alt="Image de l'offre : GAD® 7 séances"
                width={600}
                height={200}
                className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
              />
            </div>
            <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify pb-[50px]">
              Cette cure minceur permet en 7 séances de retrouver une allure
              dynamique et d&apos;éliminer la rétention d&apos;eau qui nous fait
              gonfler.
            </p>
          </div>
          {/* Check */}
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-brand-primary pt-6 pb-6"
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
              <p className="text-brand-dark text-base md:text-lg">
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
                  className={`w-full text-left text-lg md:text-xl font-light tracking-wide transition-all duration-300 ease-in-out hover:text-brand-primary ${
                    openIndex === index
                      ? "text-brand-primary"
                      : "text-brand-dark"
                  }`}
                >
                  {item.question}
                </button>

                {openIndex === index && (
                  <div className="mt-2 text-brand-dark text-base md:text-lg font-light text-justify">
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

          <div className="mt-12 w-full flex flex-col items-center justify-center md:flex-none lg:flex-none gap-4">
            {/* Groupe prix + bouton */}
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row lg:flex-row lg:items-center lg:gap-8">
              {/* Prix */}
              <p className="text-brand-primary font-bold text-2xl">
                115€ PAR SÉANCE
                <span className="font-normal text-lg">
                  {" "}
                  / Économisez 105€ au total
                </span>
              </p>

              {/* Texte sous le prix (sur mobile/tablette seulement) */}
              <p className="text-brand-dark text-sm text-center block md:hidden lg:hidden">
                * Possibilité de payer en plusieurs fois sans frais
              </p>

              {/* Bouton */}
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition whitespace-nowrap">
                  Rendez-vous
                </button>
              </a>
            </div>

            {/* Texte sous bouton (uniquement en desktop) */}
            <p className="text-brand-dark text-sm text-center hidden md:block lg:block mt-4">
              * Possibilité de payer en plusieurs fois sans frais
            </p>
          </div>
        </div>
        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgSi/SI4.webp"
            alt="Image de l'offre : GAD® 7 séances"
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
    "une taille en moins",
    "Relance la circulation",
    "qualité de la peau",
  ];

  let formattedText = text;
  boldWords.forEach((word) => {
    formattedText = formattedText.replace(word, `<strong>${word}</strong>`);
  });

  return <span dangerouslySetInnerHTML={{ __html: formattedText }} />;
}
