"use client";

import { Vague } from "./icons/Vague";
import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <div className="relative z-0 w-full mx-auto overflow-hidden xl:w-[100%] max-w-[100%]">
      {/* Vague décorative */}
      <div className="h-[200px]">
        <Vague className="w-full h-full" />
      </div>

      {/* Bloc Footer */}
      <div className="relative bg-brand-dark py-8 px-4 flex flex-col items-start text-left text-brand-cream text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-6 font-afrah">
          Contacts
        </h3>

        <div className="space-y-4 text-base md:text-lg">
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:0633278363" className="hover:underline font-playfair">
              06 33 27 83 63
            </a>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:nopheia.contact@gmail.com"
              className="hover:underline font-playfair"
            >
              nopheia.contact@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
