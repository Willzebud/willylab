"use client";

import { useState } from "react";
import { Section } from "./Section";

const questions = [
  {
    question: "Combien de séances faut-il pour avoir des résultats ?",
    answer:
      "Les résultats sont présents dès la première séance avec une perte moyenne de 0,5cm par séance. Nous recommandons en général une cure de 7 séances pour des résultats optimaux.",
  },
  {
    question:
      "Quelle est la différence entre le palper-rouler et le massage GAD® ?",
    answer:
      "Là où le palper-rouler va agir sur les cellules graisseuses accumulées dans les couches superficielles de la peau, la méthode GAD® offre une action beaucoup plus profonde et complète, puisqu’elle touche également l’hypoderme moyen et profond. \nCe geste va ainsi permettre de venir à bout des cellulites les plus incrustées. Le Massage GAD® de par son action profonde va ainsi faciliter le drainage, limiter le phénomène de rétention d’eau et activer le système circulatoire et lymphatique ce que ne permet pas le palper-rouler dont l’action reste localisée en surface.",
  },
  {
    question: "L’étude clinique",
    answer:
      "En 2013, Anne Cali a effectué une étude clinique à Paris, portant sur 12 participants. Ils ont suivi 15 séances, trois par semaine. Ils ont utilisé des mesures précises, incluant les centimètres (taille, ventre, hanche, cuisses), l’IMC, les pourcentages de masse grasse, hydrique et musculaire, ainsi que l’hypoderme évalué par doppler. Les résultats de l’étude clinique étaient extrêmement positifs, confirmant l’efficacité du GAD®.",
  },
  {
    question:
      "Quelle est la différence entre le drainage lymphatique et le massage GAD® ?",
    answer:
      "Les manoeuvres drainantes de la méthode GAD® sont plus appuyées que des manoeuvres drainantes classiques. Son action profonde va ainsi faciliter le drainage, et limiter le phénomène de rétention d’eau. De plus, La massage GAD® va agir sur les cellules graisseuses accumulées dans la couche superficielle, moyenne et profonde de la peau. \nCe geste va ainsi permettre de venir à bout des cellulites les plus incrustées. Pour finir, le massage GAD® va aussi stimuler les fibroblastes, qui sont des cellules de soutien impliquées dans le processus de production d’élastine et de collagène. La tonicité de la peau s’ améliore et l’aspect « peau d’orange » diminue.",
  },
  {
    question:
      "En quoi le GAD® se distingue-t-il des autres approches amincissantes ?",
    answer:
      "Le GAD® se distingue par sa genèse scientifiquement prouvée sur plusieurs années. Basée sur des résultats cliniques tangibles, il offre une approche amincissante unique et innovante. Notre engagement envers votre bien-être et votre confiance est au cœur de cette méthode. Notre objectif est de vous offrir des résultats exceptionnels grâce à notre expertise en tant que professionnelle de santé et à notre connaissance approfondie de l’anatomie.",
  },
  {
    question: "Le massage GAD® est-il douloureux ?",
    answer:
      "Le massage GAD® n’est pas douloureux contrairement à d’autres techniques de massage amincissant et ne vous laisse pas de bleus. La sensation de picotement et de chaleur peut être désagréable mais reste très supportable.",
  },
  {
    question: "Puis-je faire le massage GAD® si je suis enceinte ?",
    answer:
      "Oui nous pouvons adapter le massage GAD® pour les femmes enceintes ainsi que pour les femmes en post-partum.",
  },
  {
    question:
      "Pourquoi est-il recommandé de continuer sur des séances d’entretien ?",
    answer:
      "Après une cure de 7 ou 14 séances, si vous êtes satisfaite des résultats obtenus, nous recommandons de continuer sur une cure d’entretien . Tout comme le sport, il est impératif d’entretenir vos résultats pour éviter que les cellules graisseuses se reforment et donc que la cellulite revienne. Nous recommandons de réaliser une séance de massage GAD® tous les mois.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Section>
      <div className="relative z-0 w-full mx-auto xl:w-[80%] max-w-[95%] min-h-[200px]">
        <h2 className="text-2xl md:text-3xl py-4 lg:text-4xl text-center text-brand-primary mb-4 lg:mb-12">
          Les questions fréquentes
        </h2>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-brand-primary pb-4">
              <button
                onClick={() => toggle(index)}
                className={`w-full text-left text-lg md:text-xl font-light tracking-wide transition-all duration-300 ease-in-out hover:text-brand-primary ${
                  openIndex === index ? "text-brand-primary" : "text-brand-dark"
                }`}
              >
                {item.question}
              </button>

              {openIndex === index && (
                <div className="mt-2 text-brand-dark text-base md:text-lg font-light">
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
      </div>
    </Section>
  );
};
