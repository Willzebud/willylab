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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 px-6 left-0 w-full py-4 z-50 bg-[var(--background)]">
      <Section className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative flex items-center space-x-2">
          <Link href="/">
            <Image
              src="/images/Logo.webp"
              alt="Logo de la marque Nopheïa"
              width={100}
              height={100}
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
          ></a>
          {/* Menu items */}
          <div className="hidden ipadPro:flex relative items-center space-x-4">
            {/* Mon Offre / Services */}
            <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
              <Link href="">
                <p className="text-brand-dark group-hover:text-brand-primary font-sans">
                  Mon Offre / Services
                </p>
              </Link>
            </div>

            {/* Tarifs */}
            <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
              <Link href="/tarifs">
                <p className="text-brand-dark group-hover:text-brand-primary font-sans">
                  Tarifs
                </p>
              </Link>
            </div>

            {/* Qui je suis */}
            <div className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition group">
              <Link href="">
                <p className="text-brand-dark group-hover:text-brand-primary font-sans">
                  Qui je suis
                </p>
              </Link>
            </div>

            {/* Rendez-vous */}
            <a
              href="https://www.doctolib.fr/osteopathe/carnoux-en-provence/ophelie-ribiere/booking/places?specialityId=10&telehealth=false&bookingFunnelSource=profile"
              target="_blank"
              rel="noopener noreferrer"
              className="h-auto w-auto px-3 lg:px-4 py-1 rounded-full cursor-pointer transition text-brand-dark hover:text-brand-primary font-sans"
              onClick={() => {
                window.gtag?.("event", "conversion", {
                  send_to: "AW-388768948/XLW_CPzTw8gaELTJsLkB",
                });
              }}
            >
              Contacts
            </a>
          </div>

          {/* Bouton Burger Menu */}
          <div
            className="bg-transparent cursor-pointer flex items-center justify-center transition group ipadPro:hidden"
            onClick={toggleMenu}
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-[4px]">
              {Array.from({ length: 9 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 bg-brand-dark rounded-full transition group-hover:brand-primary"
                ></span>
              ))}
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
        className="fixed top-0 left-0 w-full h-[17rem] bg-brand-light shadow-lg z-40 ipadPro:hidden"
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
            <Link href="">
              <h2 className="text-lg font-bold text-brand-dark cursor-pointer transition hover:text-brand-primary font-sans">
                Mon Offre / Services
              </h2>
            </Link>
          </div>
          <div>
            <Link href="/tarifs">
              <h2 className="text-lg font-bold text-brand-dark cursor-pointer transition hover:text-brand-primary font-sans">
                Tarifs
              </h2>
            </Link>
          </div>
          <div>
            <Link href="">
              <h2 className="text-lg font-bold text-brand-dark cursor-pointer transition hover:text-brand-primary font-sans">
                Qui je suis
              </h2>
            </Link>
          </div>
          <div>
            <Link href="">
              <h2 className="text-lg font-bold text-brand-dark cursor-pointer transition hover:text-brand-primary font-sans">
                Contacts
              </h2>
            </Link>
          </div>
        </div>
      </motion.div>
    </header>
  );
};
