"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const HeroBelly = () => {
  return (
    <Section className="pt-[80px] lg:pt-[50px]">
      <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[80%] max-w-[95%] min-h-[400px] flex flex-col md:flex-row items-center justify-between md:gap-10 lg:gap-20">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Le Belly GAD®
          </h1>

          {/* Image mobile */}
          <div className="relative w-[150px] md:w-[200px] h-[150px] md:h-[200px]">
            <Image
              src="/images/ImgSi/SI3.webp"
              alt="Image de l'offre : GAD® Detox Plus 1 séance"
              fill
              sizes="(max-width: 768px) 200px"
              className="object-contain"
            />
          </div>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify pt-[40px] lg:pt-[5px]">
            Au croisement du bien-être et de l&rsquo;harmonie entre le corps et
            l&rsquo;esprit, le Belly GAD® est bien plus qu&rsquo;un simple
            massage abdominal. Ce soin d&rsquo;exception associe les bienfaits
            du Chi Nei Tsang, issu de la médecine traditionnelle chinoise, à
            l&rsquo;efficacité drainante et amincissante unique du massage GAD®.
          </p>

          {/* 👉 Bouton desktop */}
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
        <div className="relative w-[300px] h-[300px] hidden lg:block">
          <Image
            src="/images/ImgSi/SI3.webp"
            alt="Image de l'offre : GAD® Detox Plus 1 séance"
            fill
            sizes="(min-width: 1024px) 300px"
            className="object-contain"
          />
        </div>
      </div>
    </Section>
  );
};
