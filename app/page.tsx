"use client";

import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { TrustGad } from "./_components/TrustGad";
import { Methode } from "./_components/Methode";
import { Spacing } from "./Spacing";
import { Magazine } from "./_components/Magazine";
import { AvisPatients } from "./_components/AvisPatients";
import { NosSoins } from "./_components/NosSoins";
import { QuiJeSuis } from "./_components/QuiJeSuis";
import { Lieu } from "./_components/Lieu";
import { FAQ } from "./_components/FAQ";
import { Footer } from "./_components/Footer";

export default function ToutSavoirSurLeGadPage() {
  return (
    <main>
      <Header />
      <Spacing />
      {/* Conteneur des cartes */}

      <Hero />

      <Spacing />

      <Magazine />

      <Spacing />

      <TrustGad />

      <Spacing />

      <Methode />

      <AvisPatients />

      <NosSoins />

      <QuiJeSuis />

      <Lieu />

      <Spacing />

      <FAQ />

      <Spacing />

      <Footer />
    </main>
  );
}
