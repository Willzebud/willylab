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
    quote: <VoiciLogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <GalaLogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <GraziaLogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <LeFigaroLogoIcon size={130} />,
    name: "",
    title: "",
  },
  {
    quote: <LeMondeLogoIcon size={100} />,
    name: "",
    title: "",
  },
  {
    quote: <LePointLogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <LesEchosLogoIcon size={120} />,
    name: "",
    title: "",
  },
  {
    quote: <ElleLogoIcon size={110} />,
    name: "",
    title: "",
  },
];
