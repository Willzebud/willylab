"use client";

import { useState } from "react";
import { Menu } from "./_components/Menu";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Sections } from "./_components/Sections";
import { Spacing } from "./Spacing";

export default function Home() {
  // États pour stocker la hauteur et la largeur du Hero
  const [heroHeight, setHeroHeight] = useState(0);
  const [heroWidth, setHeroWidth] = useState(0);

  return (
    <main>
      <Header />
      <Spacing />
      <Menu heroHeight={heroHeight} heroWidth={heroWidth} />
      <Hero setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
      <Spacing />
      <Sections setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
    </main>
  );
}
