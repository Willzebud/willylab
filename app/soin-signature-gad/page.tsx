"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { Check } from "./Check";
import { Gad14Seance } from "./Gad14Seance";
import { Gad1Seance } from "./Gad1Seance";
import { Gad7Seance } from "./Gad7Seance";
import { HeroSignature } from "./HeroSignature";
import { Precision } from "./Precision";
import { WhatGad } from "./WhatGad";

export default function SoinSignatureGad() {
  return (
    <main>
      <Header />
      <Spacing />
      <HeroSignature />
      <Precision />
      <WhatGad />
      <Spacing />
      <Check />
      <Spacing />
      <Gad1Seance />
      <Spacing />
      <Gad7Seance />
      <Spacing />
      <Gad14Seance />
      <Footer />
    </main>
  );
}
