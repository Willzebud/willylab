"use client";

import { useState } from "react";
import { Menu } from "./_components/Menu";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";

export default function Home() {
  // États pour stocker la hauteur et la largeur du Hero
  const [heroHeight, setHeroHeight] = useState(0);
  const [heroWidth, setHeroWidth] = useState(0);

  return (
    <main>
      <Header />
      {/* Passer heroHeight et heroWidth à Menu */}
      <Menu heroHeight={heroHeight} heroWidth={heroWidth} />
      {/* Passer setHeroHeight et setHeroWidth à Hero */}
      <Hero setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
    </main>
  );
}
