"use client";

import "keen-slider/keen-slider.min.css";
import { Section } from "../_components/Section";
import { useRef, useState } from "react";

export const TemoiVideo = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [isPlaying1, setIsPlaying1] = useState(false);
  const [isPlaying2, setIsPlaying2] = useState(false);

  const toggleVideo = (
    ref: React.RefObject<HTMLVideoElement>,
    setPlaying: (v: boolean) => void
  ) => {
    const video = ref.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <Section className="py-20 bg-cover bg-center bg-no-repeat">
      <div className="w-full flex flex-col justify-center mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-brand-primary mb-12">
          Elles témoignent
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Vidéo 1 */}
        <div className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark">
          <video
            ref={videoRef1}
            src=""
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => toggleVideo(videoRef1, setIsPlaying1)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-brand-dark transition"
          >
            {isPlaying1 ? "Pause" : "Lecture"}
          </button>
        </div>

        {/* Vidéo 2 */}
        <div className="relative group w-[280px] md:w-[320px] aspect-[9/16] overflow-hidden shadow-lg rounded-xl bg-brand-dark">
          <video
            ref={videoRef2}
            src=""
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => toggleVideo(videoRef2, setIsPlaying2)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-brand-primary text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-brand-dark transition"
          >
            {isPlaying2 ? "Pause" : "Lecture"}
          </button>
        </div>
      </div>
    </Section>
  );
};
