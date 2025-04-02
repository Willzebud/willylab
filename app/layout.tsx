import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";

// Définir la police Anek Telugu avec une variable CSS personnalisée
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption", // Utilisée pour la légende (caption)
});

// Métadonnées de la page
export const metadata: Metadata = {
  title: "Ophélie Ribière Ostéopathe",
  description: "Ophélie Ribière Ostéopathe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          GeistSans.variable, // Applique la police GeistSans
          GeistMono.variable, // Applique la police GeistMono
          AnekTelugu.variable, // Applique la police AnekTelugu
          "font-sans h-full bg-brand-cream text-foreground" // Styles globaux pour le layout
        )}
      >
        {children}
      </body>
    </html>
  );
}
