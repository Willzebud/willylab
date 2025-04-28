"use client";

import "keen-slider/keen-slider.min.css";
import { Section } from "../_components/Section";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
    <Section className="bg-cover bg-center bg-no-repeat">
      <div className="w-full flex flex-col justify-center mb-10">
        <h2 className="font-afrah text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary lg:mb-12">
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
          <LiteYouTubeEmbed
            id="VjVdu-oY8sA"
            title="Avis patiente Nopheïa 1"
            poster="hqdefault"
            adNetwork={false}
            cookie={false}
            webp
            wrapperClass="yt-lite rounded-xl w-full h-full"
            playerClass="lty-playbtn"
            iframeClass=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute inset-0 z-10"></div>
        </div>

        {/* Vidéo 2 */}
        <div
          onClick={() =>
            openYouTubeVideo("https://www.youtube.com/watch?v=gnSDpHjyP7Q")
          }
          className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark cursor-pointer"
        >
          <LiteYouTubeEmbed
            id="gnSDpHjyP7Q"
            title="Avis patiente Nopheïa 2"
            poster="hqdefault"
            adNetwork={false}
            cookie={false}
            webp
            wrapperClass="yt-lite rounded-xl w-full h-full"
            playerClass="lty-playbtn"
            iframeClass=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div className="absolute inset-0 z-10"></div>
        </div>
      </div>
    </Section>
  );
};
