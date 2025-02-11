"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import ContactForm from "../components/ui/contactForm";
import { Phone } from "lucide-react";

type HeroProps = {
  setHeroHeight: React.Dispatch<React.SetStateAction<number>>;
  setHeroWidth: React.Dispatch<React.SetStateAction<number>>;
};

export const Contacts = ({ setHeroHeight, setHeroWidth }: HeroProps) => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      const height = heroRef.current.offsetHeight;
      const width = heroRef.current.offsetWidth;
      setHeroHeight(height);
      setHeroWidth(width);
    }
  }, [setHeroHeight, setHeroWidth]);

  return (
    <div
      ref={heroRef}
      className="relative z-0 w-full h-auto mx-auto mt-5 lg:mt-0 overflow-hidden xl:w-[80%] lg:h-[600px] max-w-[95%]"
    >
      {/* Image de fond */}
      <div className="absolute inset-0 h-full w-full z-0 overflow-hidden">
        <Image
          src="/images/FondCartes/Fond3.webp"
          alt="Fond coloré avec des dessins de plantes"
          fill
          sizes="100vw"
          priority
          className="z-0 object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 pb-20 px-4 sm:px-12 flex flex-col h-full">
        {/* Titre "Contact" */}
        <div className="inline-block bg-white px-6 py-2 rounded-md mt-10 ml-4 max-w-fit">
          <h2 className="font-bold text-5xl text-left text-[#023333] leading-none">
            Contact
          </h2>
        </div>

        {/* Contenu du formulaire et des icônes */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 space-y-4 lg:space-y-0 lg:h-full">
          {/* Section gauche : Message et icônes */}
          <div className="flex flex-col items-center justify-center space-y-6 lg:w-1/3 lg:h-full">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-black font-medium text-justify p-4 hyphens-auto">
                Si vous souhaitez échanger autour de vos projets
                d&apos;aménagement paysager ou simplement discuter de vos idées,
                vous pouvez me contacter en m&apos;envoyant un message ou nous
                appeler directement. Je serai ravi de vous répondre !
              </p>
            </div>

            {/* Icônes Téléphone & Email */}
            <div className="flex space-x-4">
              <div className="w-14 h-14 bg-white flex items-center justify-center rounded-full cursor-pointer transition hover:border-primary hover:bg-black hover:text-white">
                <Phone className="hover:text-white" />
              </div>
            </div>
          </div>

          {/* Section droite : Formulaire */}
          <div className="w-full md:w-[600px] p-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
