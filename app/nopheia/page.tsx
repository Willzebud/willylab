"use client";

import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
import { NotreApproche } from "./NotreApproche";
import { NotrePromesse } from "./NotrePromesse";
import { QuiJeSuis1 } from "./QuiJeSuis1";
import { QuiJeSuis2 } from "./QuiJeSuis2";

export default function NopheiaPage() {
  return (
    <main>
      <Header />
      <QuiJeSuis1 />
      <Spacing />
      <NotreApproche />
      <NotrePromesse />
      <QuiJeSuis2 />
      <Footer />
    </main>
  );
}
