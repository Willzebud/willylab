"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative w-full max-w-7xl mx-auto py-20 px-6 flex flex-col ipadPro:flex-row items-center justify-between bg-[var(--background)]">
      {/* Texte */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left font-sans relative z-10">
        <h1 className="text-2xl lg:text-4xl font-bold text-brand-dark text-justify hyphens-auto">
          J’aide les praticiennes du bien-être à transformer leur simple
          prestation en une offre signature… et à valider qu’elle attire des
          clientes.
        </h1>
        <p className="text-lg text-brand-dark font-sans text-justify hyphens-auto">
          Je suis Willyam, créateur d’offres et accompagnant stratégique. Je
          vous aide à clarifier ce que vous pouvez vraiment offrir, à structurer
          une offre plus complète et à la tester pour vérifier qu’elle plaît
          avant d’y investir du temps et de l’énergie.
        </p>
      </div>

      {/* Bloc central : icônes + photo */}
      <div className="w-full lg:w-[40%] mt-12 lg:mt-0 flex flex-row justify-between items-center justify-center relative z-10">
        {/* Bloc flottant des icônes */}
        <div className="flex flex-col items-center justify-center gap-10 w-[200px]">
          {/* Idée */}
          <motion.div
            animate={{ x: ["0%", "80%", "-80%", "0%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/images/imgHero/idee.webp"
              alt="Idée"
              width={70}
              height={70}
            />
          </motion.div>

          {/* Test */}
          <motion.div
            animate={{ x: ["0%", "-80%", "80%", "0%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/images/imgHero/test.webp"
              alt="Test"
              width={90}
              height={90}
            />
          </motion.div>

          {/* Check */}
          <motion.div
            animate={{ x: ["0%", "100%", "-100%", "0%"] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Image
              src="/images/imgHero/check.webp"
              alt="Check"
              width={50}
              height={50}
            />
          </motion.div>
        </div>

        {/* Photo */}
        <div className="overflow-hidden w-[220px] h-[220px] border-4 border-jaune-dynamique shadow-lg ml-10">
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
