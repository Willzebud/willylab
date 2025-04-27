"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { Tarifs } from "./Tarifs";
import { Tarifs2 } from "./Tarifs2";
import { Tarifs3 } from "./Tarifs3";

export default function TarifsPage() {
  return (
    <main>
      <Header />
      <Spacing />
      <Tarifs />
      <Spacing />
      <Tarifs2 />
      <Spacing />
      <Tarifs3 />
      <Footer />
    </main>
  );
}
