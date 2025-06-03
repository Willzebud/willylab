"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroSignature = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-20">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Notre Massage Drainant GAD®
          </h1>

          {/* Image pour mobile */}
          <div className="w-full flex justify-center mb-6 md:hidden">
            <div className="relative w-full max-w-md h-[260px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/ImgSoins/1.webp"
                alt="Image de l'offre : Soin Signature GAD®"
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pt-8">
            Découvrez le Massage GAD® (Glisser Appuyer Décoller) : une méthode
            de massage amincissant révolutionnaire non invasive qui agit en
            profondeur pour éliminer les cellulites incrustées, stimuler la
            circulation sanguine et lymphatique, et améliorer la tonicité de la
            peau.
          </p>

          {/* 👉 Bouton visible uniquement sur desktop */}
          <div className="hidden md:flex justify-center mt-12">
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
                Réservez un premier bilan
              </button>
            </a>
          </div>
        </div>

        {/* Image pour desktop */}
        <div className="w-full lg:w-1/2 flex justify-center hidden md:flex">
          <div className="relative w-full max-w-md h-[320px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ImgSoins/1.webp"
              alt="Image de l'offre : Soin Signature GAD®"
              fill
              sizes="(max-width: 1024px) 50vw, 600px"
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
