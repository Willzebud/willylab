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
  title:
    "Nopheïa | Massage GAD® drainant et anticellulite – Aubagne & Aix-en-Provence",
  description:
    "Nopheïa vous propose le massage GAD® : une méthode 100% manuelle, drainante et anticellulite pour lisser la peau, redessiner la silhouette et relancer la circulation. À Aubagne et Mimet - Aix-en-Provence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href="/images/Logo.webp"
          type="image/webp"
          sizes="48x48"
        />
        <link rel="shortcut icon" href="/images/Logo.webp" />
        <link rel="apple-touch-icon" href="/images/Logo.webp" />

        <link rel="canonical" href="https://www.nopheia.fr/" />
        <link rel="image_src" href="https://www.nopheia.fr/images/Logo.webp" />

        <meta
          property="og:image"
          content="https://www.nopheia.fr/images/Logo.webp"
        />

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
              logo: {
                "@type": "ImageObject",
                url: "https://www.nopheia.fr/images/Logo.webp",
                width: 192,
                height: 192,
              },
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
