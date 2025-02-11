"use client";

import { useState } from "react";
import { Menu } from "./_components/Menu";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Sections } from "./_components/Sections";
import { NoticePatient } from "./_components/NoticePatient";
import { Spacing } from "./Spacing";
import { QuiJeSuis } from "./_components/QuiJeSuis";
import { Contacts } from "./_components/Contacts";

export default function Home() {
  // États pour stocker la hauteur et la largeur du Hero
  const [heroHeight, setHeroHeight] = useState(0);
  const [heroWidth, setHeroWidth] = useState(0);

  return (
    <main>
      <Header />
      <Spacing />
      <Menu heroHeight={heroHeight} heroWidth={heroWidth} />
      {/* Conteneur des cartes */}
      <div className="flex flex-col lg:flex-row lg:w-[500vw] overflow-hidden">
        <div className="w-screen  flex items-center justify-center">
          <Hero setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
        </div>
        <Spacing />
        <div className="w-screen  flex items-center justify-center">
          <Sections setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
        </div>
        <Spacing />
        <div className="w-screen  flex items-center justify-center">
          <NoticePatient />
        </div>
        <Spacing />
        <div className="w-screen  flex items-center justify-center">
          <QuiJeSuis />
        </div>
        <Spacing />
        <div className="w-screen  flex items-center justify-center">
          <Contacts setHeroHeight={setHeroHeight} setHeroWidth={setHeroWidth} />
        </div>
      </div>
    </main>
  );
}
