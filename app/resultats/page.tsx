import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { AvisRe } from "./AvisRe";
import { Details } from "./Details";
import { Drainage } from "./Drainage";
import { Introduction } from "./Introduction";
import { TemoiVideo } from "./TemoiVideo";

export default function ResultatsPage() {
  return (
    <main>
      <Header />
      <Introduction />
      <Details />
      <Drainage />
      <TemoiVideo />
      <AvisRe />
      <Footer />
    </main>
  );
}
