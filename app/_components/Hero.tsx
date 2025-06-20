"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-20 px-6 flex flex-col lg:flex-row items-center justify-between bg-[var(--background)]">
      {/* Texte */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left font-sans">
        <h1 className="text-4xl md:text-2xl font-bold text-brand-dark">
          J’aide les praticiennes du bien-être à transformer leur simple
          prestation en une offre signature… et à valider qu’elle attire des
          clientes
        </h1>
        <p className="text-lg text-brand-dark font-sans">
          Je suis Willyam, créateur d’offres et accompagnant stratégique. Je
          vous aide à clarifier ce que vous pouvez vraiment offrir, à structurer
          une offre plus complète et à la tester pour vérifier qu’elle plaît
          avant d’y investir du temps et de l’énergie.
        </p>
      </div>

      {/* Photo */}
      <div className="w-full lg:w-[35%] mt-12 lg:mt-0 flex justify-center">
        <div className="overflow-hidden w-[220px] h-[220px] border-4 border-jaune-dynamique shadow-lg">
          <Image
            src="/images/will.webp"
            alt="Photo de Willyam"
            width={220}
            height={220}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};
