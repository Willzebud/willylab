"use client";

import { Section } from "./Section";
import { X } from "lucide-react";
import { InstaIcon } from "./icons/Insta";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openNosMethodes, setOpenNosMethodes] = useState(false);
  const [openMesSoins, setOpenMesSoins] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNosMethodes = () => {
    setOpenNosMethodes((prev) => !prev);
    setOpenMesSoins(false); // Fermer l'autre menu si ouvert
  };

  const toggleMesSoins = () => {
    setOpenMesSoins((prev) => !prev);
    setOpenNosMethodes(false); // Fermer l'autre menu si ouvert
  };

  return (
    <header className="fixed top-0 left-0 w-full py-4 z-50 bg-brand-cream">
      <Section className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/Logo.webp"
              alt="Logo de la marque Nopheïa"
              width={120}
              height={120}
              priority
              sizes="224px"
              className="object-cover"
            />
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="relative flex items-center space-x-2">
          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/nopheia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="group w-16 h-16 md:w-16 md:h-4 lg:w-12 lg:h-12 rounded-full bg-transparent flex items-center justify-center cursor-pointer transition">
              <InstaIcon
                size={30}
                className="text-brand-background transition group-hover:text-brand-primary"
              />
            </div>
          </a>

          <a
            href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              window.gtag?.("event", "conversion", {
                send_to: "AW-388768948/XLW_CPzTw8gaELTJsLkB",
              });
            }}
          >
            <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group ipadPro:hidden">
              <p className="text-brand-dark group-hover:text-brand-primary font-playfair">
                Rendez-vous
              </p>
            </div>
          </a>
          {/* Menu items */}
          <div className="hidden ipadPro:flex relative items-center space-x-4">
            {/* Nos méthodes */}
            <div className="relative">
              <div
                onClick={toggleNosMethodes}
                className="px-3 lg:px-4 py-1 rounded-full cursor-pointer transition flex flex-col items-start group"
              >
                <p
                  className={`transition ${
                    openNosMethodes
                      ? "text-brand-primary font-playfair" // Menu ouvert ➔ couleur dark fixe
                      : "text-brand-dark group-hover:text-brand-primary font-playfair" // Menu fermé ➔ couleur normale
                  }`}
                >
                  Nos méthodes
                </p>
              </div>
              {openNosMethodes && (
                <div className="absolute left-0 top-full mt-2 flex flex-col bg-brand-cream shadow-lg rounded-md w-56 py-2">
                  <Link href="/tout-savoir-sur-le-gad">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Qu&apos;est ce que le GAD® ?
                    </p>
                  </Link>
                  <Link href="/nopheia">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Nopheïa
                    </p>
                  </Link>
                  <Link href="/resultats">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Les Résultats
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* Mes soins */}
            <div className="relative">
              <div
                onClick={toggleMesSoins}
                className="px-3 lg:px-4 py-1 rounded-full cursor-pointer transition flex flex-col items-start group"
              >
                <p
                  className={`transition ${
                    openMesSoins
                      ? "text-brand-primary font-playfair" // Menu ouvert ➔ couleur dark
                      : "text-brand-dark group-hover:text-brand-primary font-playfair" // Menu fermé ➔ couleur normale
                  }`}
                >
                  Nos soins
                </p>
              </div>
              {openMesSoins && (
                <div className="absolute left-0 top-full mt-2 flex flex-col bg-brand-cream shadow-lg rounded-md w-56 py-2">
                  <Link href="/soin-signature-gad">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Massage Drainant GAD®
                    </p>
                  </Link>
                  <Link href="/gad-detox-plus">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Massage Drainant & Detox +
                    </p>
                  </Link>
                  <Link href="/belly-gad">
                    <p className="px-4 py-2 text-brand-dark hover:text-brand-primary transition cursor-pointer font-playfair">
                      Stomac Lift
                    </p>
                  </Link>
                </div>
              )}
            </div>

            {/* Tarifs */}
            <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
              <Link href="/tarifs">
                <p className="text-brand-dark group-hover:text-brand-primary font-playfair">
                  Tarifs
                </p>
              </Link>
            </div>

            {/* Rendez-vous */}
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group"
              onClick={() => {
                window.gtag?.("event", "conversion", {
                  send_to: "AW-388768948/XLW_CPzTw8gaELTJsLkB",
                });
              }}
            >
              <p className="text-brand-dark group-hover:text-brand-primary font-playfair">
                Rendez-vous
              </p>
            </a>
          </div>

          {/* Burger Icon Mobile */}
          <div className="relative flex items-center ipadPro:hidden">
            <div
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border border-brand-dark bg-brand-background cursor-pointer transition hover:border-brand-primary hover:bg-brand-primary flex items-center justify-center group"
              onClick={toggleMenu}
            >
              <div className="space-y-[2px] flex flex-col items-center group-hover:bg-brand-primary">
                <span className="w-1 h-1 bg-brand-dark rounded-full group-hover:bg-brand-light"></span>
                <span className="w-1 h-1 bg-brand-dark rounded-full group-hover:bg-brand-light"></span>
                <span className="w-1 h-1 bg-brand-dark rounded-full group-hover:bg-brand-light"></span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Barre animée mobile */}
      <motion.div
        initial={{ top: "4rem", opacity: 0 }}
        animate={{
          top: isMenuOpen ? "30rem" : "4rem",
          opacity: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className="block h-[1px] bg-transparent z-50 mx-auto"
        style={{
          maxWidth: "95%",
          left: 0,
          right: 0,
          position: "absolute",
        }}
      />

      {/* Menu mobile */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isMenuOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-full h-[26rem] bg-brand-light shadow-lg z-40 ipadPro:hidden"
      >
        {/* Bouton fermer */}
        <div className="flex justify-end p-4">
          <button
            className="text-brand-primary text-2xl cursor-pointer transition hover:text-brand-dark"
            onClick={toggleMenu}
          >
            <X />
          </button>
        </div>

        {/* Contenu mobile */}
        <div className="p-4 space-y-6 ml-4">
          <div>
            <h2 className="text-lg font-bold text-brand-dark font-playfair">
              Nos méthodes
            </h2>
            <ul className="space-y-2">
              <Link href="/tout-savoir-sur-le-gad">
                <li className="cursor-pointer text-brand-dark cursor-pointer transition hover:text-brand-primary pt-2 font-playfair">
                  Qu&apos;est ce que le GAD® ?
                </li>
              </Link>
              <Link href="/nopheia">
                <li className="cursor-pointer text-brand-dark cursor-pointer transition hover:text-brand-primary pt-2 font-playfair">
                  Nopheïa
                </li>
              </Link>
              <Link href="/resultats">
                <li className="cursor-pointer text-brand-dark cursor-pointer transition hover:text-brand-primary pt-2 font-playfair">
                  Les résultats
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-brand-dark font-playfair">
              Nos soins
            </h2>
            <ul className="space-y-2">
              <Link href="/soin-signature-gad">
                <li className="cursor-pointer text-brand-dark transition hover:text-brand-primary pt-2 font-playfair">
                  MAssage Drainant GAD®
                </li>
              </Link>
              <Link href="/gad-detox-plus">
                <li className="cursor-pointer text-brand-dark transition hover:text-brand-primarybrand-dark pt-2 font-playfair">
                  MAssage Drainant & Detox +
                </li>
              </Link>
              <Link href="/belly-gad">
                <li className="cursor-pointer text-brand-dark transition hover:text-brand-primary pt-2 font-playfair">
                  Stomac Lift
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <Link href="/tarifs">
              <h2 className="text-lg font-bold text-brand-dark cursor-pointer transition hover:text-brand-primary font-playfair">
                Tarifs
              </h2>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
