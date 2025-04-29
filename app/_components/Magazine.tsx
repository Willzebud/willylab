"use client";

import { InfiniteMovingCards } from "../components/ui/MovingCards";
import { Europe1LogoIcon } from "../_components/icons/Europe1LogoIcon";
import { GraziaLogoIcon } from "../_components/icons/GraziaLogoIcon";
import { LeFigaroLogoIcon } from "../_components/icons/LeFigaroLogoIcon";
import { LeMondeLogoIcon } from "../_components/icons/LeMondeLogoIcon";
import { LePointLogoIcon } from "../_components/icons/LePointLogoIcon";
import { LesEchosLogoIcon } from "../_components/icons/LesEchosLogoIcon";
import { M6LogoIcon } from "../_components/icons/M6LogoIcone";
import { ElleLogoIcon } from "../_components/icons/ElleLogoIcon";
import { GalaLogoIcon } from "../_components/icons/GalaLogoIcon";
import { VoiciLogoIcon } from "./icons/VoiciLogoIcon";

export function Magazine() {
  return (
    <div className="flex flex-col items-center h-auto antialiased bg-brand-cream overflow-hidden">
      <h2 className="text-xl font-playfair text-brand-dark md:text-3xl lg:text-xl font-bold text-center mb-4">
        Ils parlent du GAD®
      </h2>
      <InfiniteMovingCards items={logos} direction="right" speed="slow" />
    </div>
  );
}

const logos = [
  {
    quote: <VoiciLogoIcon size={120} />,
    name: "",
    title: "",
    href: "https://www.voici.fr/beaute/minceur-ces-3-methodes-permettent-daffiner-votre-silhouette-et-de-diminuer-la-cellulite-efficacement-753811",
  },
  {
    quote: <GalaLogoIcon size={120} />,
    name: "",
    title: "",
    href: " https://www.gala.fr/beaute/tendances_beaute/comment-combattre-les-graisses-apres-60-ans_531643#",
  },
  {
    quote: <GraziaLogoIcon size={120} />,
    name: "",
    title: "",
    href: "https://www.grazia.fr/beaute/adresses-beaute/methode-anne-cali-voici-la-technique-de-massage-revolutionnaire-pour-une-silhouette-tonique-et-debarrassee-de-la-cellulite-709624.html",
  },
  {
    quote: <LeFigaroLogoIcon size={130} />,
    name: "",
    title: "",
    href: "https://madame.lefigaro.fr/bien-etre/massages-palper-rouler-madotherapie-trois-techniques-pour-remodeler-sa-silhouette-220221-195189",
  },

  {
    quote: <LeMondeLogoIcon size={100} />,
    name: "",
    title: "",
  },
  {
    quote: <Europe1LogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <M6LogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <LePointLogoIcon size={120} />,
    name: "",
    title: "",
    href: "https://www.lepoint.fr/art-de-vivre/paris-ci-par-la-pourquoi-tout-le-monde-se-presse-chez-anne-cali-08-09-2022-2489146_4.php#11",
  },
  {
    quote: <LesEchosLogoIcon size={120} />,
    name: "",
    title: "",
    href: "https://serielimitee.lesechos.fr/beaute/soins-beaute/healthy-monday-bien-choisir-son-massage-1901647",
  },
  {
    quote: <ElleLogoIcon size={110} />,
    name: "",
    title: "",
    href: " https://www.elle.fr/Minceur/Dossiers-minceur/Le-massage-anti-cellulite-pourquoi-ca-marche-2700957",
  },
];
