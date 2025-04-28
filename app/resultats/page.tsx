import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { Spacing } from "../Spacing";
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
      <Spacing />
      <TemoiVideo />
      <AvisRe />
      <Footer />
    </main>
  );
}
