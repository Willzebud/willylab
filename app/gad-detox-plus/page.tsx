"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { CheckDetox } from "./CheckDetox";
import { Detox1Seance } from "./Detox1Seance";
import { HeroDetox } from "./HeroDetox";
import { PrecisionDetox } from "./PrecisionDetox";
import { WhatDetox } from "./WhatDetox";

export default function DetoxPlusPage() {
  return (
    <main>
      <Header />
      <Spacing />
      <HeroDetox />
      <PrecisionDetox />
      <WhatDetox />
      <Spacing />
      <CheckDetox />
      <Spacing />
      <Detox1Seance />
      <Footer />
    </main>
  );
}
