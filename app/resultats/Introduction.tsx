"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Section } from "../_components/Section";
import Image from "next/image";

export const Introduction = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: "snap",
    slides: { perView: 1 },
  });

  const images = [
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant1.webp",
        alt: "Photo avant massage GAD - Patiente 1",
      },
      apres: {
        src: "/images/ImgRe/Après/Après1.webp",
        alt: "Photo après massage GAD - Patiente 1",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant2.webp",
        alt: "Photo avant massage GAD - Patiente 2",
      },
      apres: {
        src: "/images/ImgRe/Après/Après2.webp",
        alt: "Photo après massage GAD - Patiente 2",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant3.webp",
        alt: "Photo avant massage GAD - Patiente 3",
      },
      apres: {
        src: "/images/ImgRe/Après/Après3.webp",
        alt: "Photo après massage GAD - Patiente 3",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant4.webp",
        alt: "Photo avant massage GAD - Patiente 4",
      },
      apres: {
        src: "/images/ImgRe/Après/Après4.webp",
        alt: "Photo après massage GAD - Patiente 4",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant5.webp",
        alt: "Photo avant massage GAD - Patiente 5",
      },
      apres: {
        src: "/images/ImgRe/Après/Après5.webp",
        alt: "Photo après massage GAD - Patiente 5",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant6.webp",
        alt: "Photo avant massage GAD - Patiente 6",
      },
      apres: {
        src: "/images/ImgRe/Après/Après6.webp",
        alt: "Photo après massage GAD - Patiente 6",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant7.webp",
        alt: "Photo avant massage GAD - Patiente 7",
      },
      apres: {
        src: "/images/ImgRe/Après/Après7.webp",
        alt: "Photo après massage GAD - Patiente 7",
      },
    },
    {
      avant: {
        src: "/images/ImgRe/Avant/Avant8.webp",
        alt: "Photo avant massage GAD - Patiente 8",
      },
      apres: {
        src: "/images/ImgRe/Après/Après8.webp",
        alt: "Photo après massage GAD - Patiente 8",
      },
    },
  ];

  const slides = images.flatMap((img) => [img.avant, img.apres]);

  return (
    <Section className="pt-[100px]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between lg:gap-8 pt-[50px]">
        {/* Texte à gauche */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-6 font-afrah">
            Les résultats du massage GAD
          </h1>

          <p className="text-lg md:text-xl text-brand-dark leading-relaxed text-justify font-playfair">
            Accompagnés d&rsquo;une activité physique modérée ainsi qu&rsquo;une
            alimentation équilibrée (recommandée par le Programme National
            Nutrition Santé), l&rsquo;étude clinique démontre bien que le
            massage GAD est efficace pour la réduction localisée des cellules
            graisseuses et les diminutions de circonférence de la taille, des
            cuisses et des hanches par son action drainante.
          </p>
        </div>

        {/* Slider d'images */}
        <div className="relative max-w-xl w-full px-4 mx-auto mt-10 lg:mt-0">
          {/* Slides */}
          <div ref={sliderRef} className="keen-slider">
            {slides.map((img, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center gap-4"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  className="rounded-[40px] object-contain w-[300px] md:w-[400px] lg:w-[500px] h-auto"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                  priority={index === 0} // priorité pour charger la 1ère image plus vite
                />
              </div>
            ))}
          </div>

          {/* Flèches */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-6xl text-brand-primary px-2"
          >
            ‹
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-4xl md:text-6xl text-brand-primary px-2"
          >
            ›
          </button>
        </div>
      </div>
    </Section>
  );
};
