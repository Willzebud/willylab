"use client";

import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroDetox = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-20">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Massage Drainant & Detox Plus
          </h1>

          {/* Image mobile */}
          <div className="w-full flex justify-center md:hidden mb-6">
            <div className="relative w-full max-w-xs h-[260px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/images/ImgSoins/2.webp"
                alt="Image de l'offre : GAD Detox +"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pt-4">
            Notre Massage Drainant & Détox + combine l&rsquo;effet immédiat du
            drainage lymphatique au résultat durable du GAD®. Le Massage GAD®
            agit sur la circulation veineuse, le déstockage des graisses et la
            tonicité de la peau, avec des effets persistants.
          </p>

          {/* 👉 Bouton Desktop uniquement */}
          <div className="w-full hidden md:flex justify-center mt-12">
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

        {/* Image desktop */}
        <div className="w-full lg:w-1/2 flex justify-center hidden md:flex">
          <div className="relative w-full max-w-md h-[320px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/ImgSoins/2.webp"
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
