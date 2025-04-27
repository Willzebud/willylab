"use client";

import { Section } from "./Section";

export const Methode = () => {
  return (
    <Section className="pt-100">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[600px] flex flex-col lg:flex-row items-center justify-between">
        {/* Colonne texte */}
        <div className="z-10 w-full lg:w-1/2 lg:pr-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12 font-afrah">
            Pourquoi cette Méthode ?
          </h2>
          <p className="text-base sm:text-xl text-justify text-brand-dark mt-4 font-playfair">
            Notre méthode minceur utilise un geste exclusif le GAD®, qui
            s&rsquo;effectue avec la paume de la main. Les résultats obtenus
            sont ceux d&rsquo;un drainage lymphatique profond combiné à un
            palper rouler profond. Ce massage a une triple action sur la
            circulation sanguine et lymphatique, sur les tissus graisseux et sur
            la fermeté de la peau. Le GAD® c&rsquo;est à la fois une forte
            action minceur (-0,5 cm par séance) et une action anti-cellulite sur
            l&rsquo;aspect peau d&rsquo;orange.
          </p>

          {/* 👉 Bouton visible uniquement sur desktop */}
          <div className="w-full hidden lg:flex justify-center mt-12">
            <a
              href="https://annecali.com/wp-content/uploads/2024/08/Me%CC%81thode-Anne-CALI-Presse-avec-annexe-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition font-playfair">
                Voir l’étude clinique
              </button>
            </a>
          </div>
        </div>

        {/* Colonne bulles */}
        <div className="relative z-10 w-full lg:w-1/2 flex flex-col items-center justify-center gap-4 px-4 sm:px-6 mt-10 md:mt-10 mb-10 lg:mb-0 font-playfair">
          {[
            "Une méthode validée par une étude scientifique.",
            "En 15 séances, c'est en moyenne : -8cm Taille | -4cm cuisses | -33% graisse corporelle",
            "Des résultats visibles dès la 1ère séance : perte moyenne de 0,5cm par séance",
            "Des bilans et des prises de mesures toutes les 5 séances",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-brand-cream border border-2 border-brand-dark w-[300px] md:w-[400px] lg:w-[520px] h-auto py-4 px-6 flex items-center justify-center text-center"
              style={{
                borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
              }}
            >
              <p className="text-base sm:text-xl text-brand-primary">{text}</p>
            </div>
          ))}

          {/* 👉 Bouton visible uniquement sur mobile/tablette */}
          <div className="w-full flex justify-center mt-5 lg:hidden block">
            <div className="mt-6">
              <a
                href="https://annecali.com/wp-content/uploads/2024/08/Me%CC%81thode-Anne-CALI-Presse-avec-annexe-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold px-6 rounded-md transition font-playfair">
                  Voir l&rsquo;étude clinique
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
