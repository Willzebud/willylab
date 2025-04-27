"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const QuiJeSuis2 = () => {
  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6 font-afrah">
            Qui je suis
          </h2>

          {/* Image pour mobile */}
          <div className="lg:hidden w-full flex justify-center mb-6 pt-4">
            <div
              className="relative bg-brand-dark overflow-hidden shadow-lg w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]"
              style={{
                borderRadius: "48% 52% 48% 52% / 19% 43% 18% 42%",
              }}
            >
              <Image
                src="/images/Sis.webp"
                alt="Photo d'Ophélie ROCHE"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair md:pt-10">
            Bonjour,&nbsp;&nbsp;je suis Ophélie ROCHE 😊 <br /> <br /> En tant
            qu&rsquo;ostéopathe, je considère mes patient(e)s dans leur
            intégralité. Chaque séance est basée sur une écoute attentive et
            bienveillante afin d&rsquo;adapter ma prise en charge à leur douleur
            et mal-être. Soucieuse de répondre à davantage de leur besoin sur le
            plan physique et émotionnel, j&rsquo;ai recherché une technique dont
            l&rsquo;efficacité a été prouvée scientifiquement… et me voilà deux
            années plus tard à pratiquer le GAD®. C&rsquo;est le début
            d&rsquo;une aventure qui commence pour vous et moi, où se mêle
            pratique manuelle, amour et confiance en soi. Et qui sait, je
            pourrais vous apporter bien plus grâce à Nopheïa.
          </p>
        </div>

        {/* Image pour desktop */}
        <div
          className="hidden lg:flex justify-center bg-brand-dark relative shadow-lg w-[400px] h-[400px] overflow-hidden"
          style={{
            borderRadius: "66% 34% 75% 25% / 34% 68% 32% 66%",
          }}
        >
          <Image
            src="/images/Sis.webp"
            alt="Photo d'Ophélie Montalto"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Section>
  );
};
