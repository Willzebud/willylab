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
  title: "Nopheïa | Yourself is More",
  description:
    "Nopheïa accompagne toutes les femmes qui souhaitent estomper leur cellulite, redessiner leur silhouette et retrouver une peau plus lisse et tonique avec une approche 100% naturelle et bienveillante.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/Logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/Logo.webp" />
        <link rel="canonical" href="https://www.nopheia.fr/" />
        <link rel="image_src" href="https://www.nopheia.fr/images/Logo.webp" />

        {/* Pré-chargement DNS pour Vercel */}
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Données structurées pour le SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nopheïa",
              url: "https://www.nopheia.fr",
              logo: "https://www.nopheia.fr/images/Logo.webp",
            }),
          }}
        />
      </head>
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
