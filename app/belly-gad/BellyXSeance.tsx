"use client";
import Image from "next/image";
import { Section } from "../_components/Section";

export const BellyXSeance = () => {
  return (
    <Section className="pt-[100px]">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-7xl mx-auto px-4 gap-8">
        {/* Premier bloc */}
        <div className="w-full md:w-[45%] flex flex-col items-center">
          <h1 className="font-afrah text-2xl lg:font-bold text-center text-brand-primary mb-[50px]">
            Cure Belly GAD® express en 7 séances
          </h1>
          <div className="flex justify-center md:mb-[40px]">
            <Image
              src="/images/ImgSi/SI4.webp"
              alt="Image de l'offre : Cure Belly GAD® 7 séance"
              width={400}
              height={400}
              className="w-[150px] md:w-[150px] lg:w-[200px] h-auto object-contain"
            />
          </div>

          {/* Groupe prix + bouton */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-playfair text-brand-primary font-bold">
                125€ PAR SÉANCE
                <span className="font-normal text-lg font-playfair">
                  {" "}
                  / Économisez 105€ au total
                </span>
              </p>
              <p className="text-brand-dark text-sm text-center font-playfair">
                * Possibilité de payer en plusieurs fois sans frais
              </p>
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition whitespace-nowrap">
                  Rendez-vous
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Deuxième bloc */}
        <div className="w-full md:w-[45%] flex flex-col items-center pt-[100px] md:pt-0">
          <h1 className="font-afrah text-2xl lg:font-bold text-center text-brand-primary mb-[50px]">
            Cure Belly GAD® signature en 14 séances
          </h1>
          <div className="flex justify-center md:mb-[40px]">
            <Image
              src="/images/ImgSi/SI5.webp"
              alt="Image de l'offre : Cure Belly GAD® 14 séances"
              width={400}
              height={400}
              className="w-[150px] md:w-[150px] lg:w-[200px] h-auto object-contain"
            />
          </div>

          {/* Groupe prix + bouton */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-playfair text-brand-primary font-bold">
                110€ PAR SÉANCE
                <span className="font-playfair font-normal text-lg">
                  {" "}
                  / Économisez 420€ au total
                </span>
              </p>
              <p className="font-playfair text-brand-dark text-sm text-center">
                * Possibilité de payer en plusieurs fois sans frais
              </p>
              <a
                href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="font-playfair bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition whitespace-nowrap">
                  Rendez-vous
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
