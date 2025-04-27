"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { AvisRe } from "../resultats/AvisRe";
import { HeroBelly } from "./HeroBelly";
import { PrecisionBelly } from "./PrecisionBelly";
import { WhatBelly } from "./WhatBelly";
import { CheckBelly } from "./CheckBelly";
import { BellySeance } from "./BellySeance";
import { BellyXSeance } from "./BellyXSeance";

export default function BellyGadPage() {
  return (
    <main>
      <Header />
      <Spacing />
      <HeroBelly />
      <PrecisionBelly />
      <WhatBelly />
      <Spacing />
      <CheckBelly />
      <Spacing />
      <BellySeance />
      <Spacing />
      <BellyXSeance />
      <Spacing />
      <AvisRe />
      <Footer />
    </main>
  );
}
