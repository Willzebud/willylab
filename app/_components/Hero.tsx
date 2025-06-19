"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative z-0 w-full h-auto mx-auto overflow-hidden bg-brand-cream mt-10">
      {/* Contenu du Hero */}
      <div className="relative z-10 flex flex-row lg:flex-row mx-10">
        {/* Bloc logo + carte */}
        <div className="flex flex-row md:flex-row lg:flex-row-reverse items-center justify-center w-full lg:max-w-[45%]">
          {/* Logo */}
          <div className="flex-shrink-0 md:mb-0 rounded-full border border-brand-primary overflow-hidden w-[224px] h-[224px]">
            <Image
              src="/images/will.webp"
              alt="Photo de Willyam"
              width={224}
              height={224}
              priority
              sizes="224px"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Carte info */}
          <div
            className="bg-brand-primary w-[300px] md:w-[400px] lg:w-[600px] h-[200px] mx-2 flex items-center justify-center px-6"
            style={{
              borderRadius: "66% 34% 67% 33% / 40% 65% 35% 60%",
            }}
          >
            <h1 className="text-brand-cream font-sans text-lg md:text-2xl font-lg text-center">
              J’aide les praticiennes du bien-être à transformer leur simple
              prestation en une offre signature désirable… et à décrocher leurs
              premières clientes (avant d’y investir des mois).
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
