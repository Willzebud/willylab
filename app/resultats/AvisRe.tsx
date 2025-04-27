"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "../_components/Section";
import { useState } from "react";

export const AvisRe = () => {
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
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
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
                <div className="font-afrah text-brand-primary text-lg font-semibold text-4xl">
                  {avis.name}
                </div>
                <p className="font-playfair text-2xl italic text-brand-dark max-w-xl mt-10">
                  “{avis.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
