"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroSignature = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col md:flex-row lg:flex-row items-center justify-between md:gap-10 lg:gap-20">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6 font-afrah">
            Notre soin signature le GAD®
          </h1>
          <div className="w-full lg:w-1/2 flex justify-center md:hidden lg:hidden rounded-xl shadow-lg">
            <Image
              src="/images/ImgSoins/1.webp"
              alt="Image de l'offre : Soin Signature GAD®"
              width={600}
              height={200}
              className="object-cover w-full h-[260px] md:h-[300px] lg:h-[320px] rounded-xl shadow-lg"
            />
          </div>
          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pt-[40px] lg:pt-[5px]">
            Découvrez le Massage GAD® (Glisser Appuyer Décoller) : une méthode
            de massage amincissant révolutionnaire non invasive qui agit en
            profondeur pour éliminer les cellulites incrustées, stimuler la
            circulation sanguine et lymphatique, et améliorer la tonicité de la
            peau.
          </p>
          {/* 👉 Bouton visible uniquement sur desktop */}
          <div className="w-full hidden md:flex lg:flex justify-center mt-12">
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

        {/* Image à droite */}
        <div className="w-full lg:w-1/2 flex justify-center rounded-xl shadow-lg">
          <Image
            src="/images/ImgSoins/1.webp"
            alt="Image de l'offre : Soin Signature GAD®"
            width={600}
            height={600}
            className="object-cover w-full h-[260px] md:h-[300px] lg:h-[320px] hidden md:block lg:block rounded-xl shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
};
