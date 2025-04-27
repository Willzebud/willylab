"use client";
import Image from "next/image";
import { Section } from "../_components/Section";
import { useState } from "react";

const questions = [
  {
    question: "Qu'est-ce qui rend le massage Le Belly GAD® unique ?",
    answer:
      "Le massage « Le Belly GAD® » se distingue grâce à la combinaison unique de deux techniques de massage puissantes : le Chi Nei Tsang et le massage GAD®. Ce massage offre une expérience complète de bien-être en associant les bienfaits du Chi Nei Tsang, qui apaise l’esprit, détoxifie et draine l’abdomen, avec les avantages ciblés du massage GAD®, qui élimine la rétention d’eau, réduit la graisse, et améliore la tonicité de la peau. En résulte une perte de centimètres notable, tout en offrant une sensation de légèreté abdominale et une reconnexion aux émotions.",
  },
  {
    question:
      "Les résultats sont ils immédiats après une séance de Belly GAD® ?",
    answer:
      "Les techniques drainantes associées au GAD® vont aider à réduire la rétention d’eau ce qui a pour conséquence une perte de cm très importante et visible au niveau de l’abdomen allant jusqu’à 2 tailles en une séance. Les techniques du massage Chi Nei Tsang vont quand à elles provoquer un apaisement émotionnel et une amélioration de la digestion après une seule séance. Cependant, pour des résultats plus durables, plusieurs séances peuvent être nécessaires.",
  },
  {
    question: "Est-ce que ce massage convient à tout le monde ?",
    answer:
      "Oui, le Massage Le Belly GAD® est adapté à la plupart des personnes en quête de perte de cm immédiat, de relaxation, d’amélioration du transit et de la qualité de peau de l’abdomen et de soulagement des tensions abdominales. Cependant, si vous avez des problèmes de santé spécifiques, il est recommandé de consulter votre médecin avant de réserver une séance.",
  },
  {
    question: "Combien de temps dure une séance de massage Le Belly GAD® ?",
    answer:
      "Une séance typique de massage « Le Belly GAD® » dure 1 heure. Cette durée permet au thérapeute de travailler de manière approfondie sur tout l’abdomen.",
  },
];

export const BellySeance = () => {
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
            Séance Cure Belly GAD®
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center lg:hidden mb-[40px]">
            <Image
              src="/images/ImgSi/SI3.webp"
              alt="Image de l'offre : Belly GAD® 1 séance"
              width={600}
              height={200}
              className="w-[150px] md:w-[200px] lg:w-[400px] h-auto object-contain"
            />
          </div>

          {/* FAQ */}
          <div className="space-y-6">
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
            {/* Groupe bouton + prix */}
            <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-row-reverse items-center justify-center gap-8">
              <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
                Rendez-vous
              </button>
              <p className="text-brand-primary font-bold text-2xl mt-4 lg:mt-0">
                140€ PAR SÉANCE
              </p>
            </div>
          </div>
        </div>
        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/ImgSi/SI3.webp"
            alt="Image de l'offre : Belly GAD® 1 séance"
            width={600}
            height={600}
            className="w-[250px] md:w-[400px] lg:w-[300px] h-auto object-contain hidden lg:block"
          />
        </div>
      </div>
    </Section>
  );
};
