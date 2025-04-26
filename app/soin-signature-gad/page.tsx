"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { Check } from "./Check";
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
      <Footer />
    </main>
  );
}
