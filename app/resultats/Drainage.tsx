"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "../_components/Section";
import Image from "next/image";

export const Drainage = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
  });

  const images = [
    {
      titre: "/images/ImgRe/Ecart/IME1.webp",
      alt: "Image patitente plusieurs mois après la fin de la cure GAD®",
    },
    {
      titre: "/images/ImgRe/Ecart/IME2.webp",
      alt: "Image patitente 2 mois après la fin de la cure GAD®",
    },
    {
      titre: "/images/ImgRe/Ecart/IME3.webp",
      alt: "Image patitente 6 mois après la fin de la cure GAD®",
    },
  ];

  return (
    <Section>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between lg:gap-8">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6">
            Reprend-on tout après un drainage ?
          </h1>

          <p className="font-playfair text-lg md:text-xl text-brand-dark leading-relaxed text-justify">
            Le GAD® continue d&rsquo;agir jusqu&rsquo;à 3 mois après la dernière
            séance. Il faut bien évidemment entretenir les résultats en venant
            faire des séances d&rsquo;entretien ou, comme certaines, reprendre
            une cure quand vous le souhaitez. Mais nous vous assurons, vous ne
            reprenez pas tout après une cure ! Le GAD agit en profondeur et ses
            effets sont durables.
          </p>
        </div>

        <div className="relative max-w-xl w-full px-4 mx-auto">
          {/* Flèches */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-6xl text-brand-primary"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-6xl text-brand-primary"
          >
            ›
          </button>

          {/* Slides */}
          <div ref={sliderRef} className="keen-slider">
            {images.map((img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center gap-4"
              >
                <Image
                  src={img.titre} // Chemin d'image valide
                  alt={img.alt} // Texte alternatif
                  width={800}
                  height={800}
                  className="rounded-[40px] object-contain w-[400px] h-[500px] md:w-[500px] md:h-[700px] lg:w-[600px] lg:h-[700px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
