"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "./Section";
import Link from "next/link";
import { useState } from "react";

export const AvisPatients = () => {
  const [, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const data = [
    { name: "Nicole", quote: "Nicole a perdu 1 taille de vêtement" },
    { name: "Sylvie", quote: "Sylvie a vu sa silhouette s’affiner" },
    { name: "Karine", quote: "Karine a retrouvé confiance en elle" },
  ];

  return (
    <Section className="py-20 bg-cover bg-center bg-no-repeat">
      <div className="w-full flex flex-col justify-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
          Elles partagent leur expérience
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Vidéo YouTube */}
        <div className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark">
          <iframe
            src="https://www.youtube.com/embed/VjVdu-oY8sA"
            title="Avis patiente Nopheïa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Témoignages (slider) */}
        <div className="relative max-w-2xl w-full px-4">
          {/* Flèches */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-brand-primary px-2"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-3xl text-brand-primary px-2"
          >
            ›
          </button>

          {/* Slides */}
          <div ref={sliderRef} className="keen-slider">
            {data.map((avis, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center gap-4"
              >
                <div className="text-brand-primary text-lg font-semibold">
                  {avis.name}
                </div>
                <p className="text-2xl italic text-brand-dark max-w-xl">
                  “{avis.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👉 Bouton "Consultez les résultats" */}
      <div className="mt-16 lg:mt-20 flex justify-center">
        <Link href="/resultats">
          <button className="bg-brand-primary hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-md transition">
            Consultez les résultats
          </button>
        </Link>
      </div>
    </Section>
  );
};
