"use client";

import "keen-slider/keen-slider.min.css";
import { Section } from "../_components/Section";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const TemoiVideo = () => {
  // Fonction pour ouvrir YouTube en plein écran (mobile) ou dans un nouvel onglet (desktop)
  const openYouTubeVideo = (url: string) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 1024) {
        window.location.href = url;
      } else {
        window.open(url, "_blank");
      }
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
        <div className="relative w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark">
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
          />
          {/* Clic au-dessus */}
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() =>
              openYouTubeVideo("https://www.youtube.com/watch?v=VjVdu-oY8sA")
            }
          ></div>
        </div>

        {/* Vidéo 2 */}
        <div className="relative w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark">
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
          />
          {/* Clic au-dessus */}
          <div
            className="absolute inset-0 z-10 cursor-pointer"
            onClick={() =>
              openYouTubeVideo("https://www.youtube.com/watch?v=gnSDpHjyP7Q")
            }
          ></div>
        </div>
      </div>
    </Section>
  );
};
