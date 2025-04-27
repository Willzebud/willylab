"use client";

import "keen-slider/keen-slider.min.css";
import { Section } from "../_components/Section";

export const TemoiVideo = () => {
  // Fonction pour ouvrir YouTube en plein écran (dans un nouvel onglet)
  const openYouTubeVideo = (url: string) => {
    if (window.innerWidth < 1024) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <Section className="py-20 bg-cover bg-center bg-no-repeat">
      <div className="w-full flex flex-col justify-center mb-10">
        <h2 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
          Elles témoignent
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Vidéo 1 */}
        <div
          onClick={() =>
            openYouTubeVideo("https://www.youtube.com/watch?v=VjVdu-oY8sA")
          }
          className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark cursor-pointer"
        >
          <iframe
            src="https://www.youtube.com/embed/VjVdu-oY8sA"
            title="Avis patiente Nopheïa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover pointer-events-none" // << Attention ici
          />
        </div>

        {/* Vidéo 2 */}
        <div
          onClick={() =>
            openYouTubeVideo("https://www.youtube.com/watch?v=gnSDpHjyP7Q")
          }
          className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark cursor-pointer"
        >
          <iframe
            src="https://www.youtube.com/embed/gnSDpHjyP7Q"
            title="Avis patiente Nopheïa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full object-cover pointer-events-none" // << Pareil ici
          />
        </div>
      </div>
    </Section>
  );
};
