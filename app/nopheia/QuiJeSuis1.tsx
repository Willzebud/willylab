"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const QuiJeSuis1 = () => {
  return (
    <Section className="pt-[100px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6 font-afrah">
            Nopheïa
          </h1>

          {/* Image pour mobile */}
          <div className="lg:hidden w-full flex justify-center mb-6">
            <div
              className="bg-brand-dark relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] overflow-hidden shadow-lg"
              style={{
                borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
              }}
            >
              <Image
                src="/images/Logo.webp"
                alt="Logo de la marque Nopheïa"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair">
            Chez Nopheïa, nous croyons en une beauté qui ne cherche pas à
            transformer, mais à révéler. <br />
            <br /> Une beauté naturelle, bienveillante et profondément
            respectueuse du corps féminin. <br />
            <br /> Fondée par Ophélie ROCHE, ostéopathe diplômée d&rsquo;État et
            ambassadrice de la méthode GAD®, Nopheïa accompagne depuis plusieurs
            années les femmes qui souhaitent atténuer leur cellulite, redessiner
            leur silhouette et retrouver une peau plus lisse et plus tonique,
            sans jamais renier leur corps, ni leur singularité.
          </p>
        </div>

        {/* Image pour desktop */}
        <div
          className="hidden lg:flex justify-center bg-brand-dark relative shadow-lg max-w-[400px] w-full h-auto p-4 overflow-hidden"
          style={{
            borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
          }}
        >
          <Image
            src="/images/Logo.webp"
            alt="Logo de la marque Nopheïa"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
};
