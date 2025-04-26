"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { CheckDetox } from "./CheckDetox";
import { Detox1Seance } from "./Detox1Seance";
import { HeroDetox } from "./HeroDetox";
import { PrecisionDetox } from "./PrecisionDetox";
import { WhatDetox } from "./WhatDetox";
import { Detox7Seance } from "./Detox7Seance";
import { Detox14Seance } from "./Detox14Seance";

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
      <Spacing />
      <Detox7Seance />
      <Spacing />
      <Detox14Seance />
      <Footer />
    </main>
  );
}
