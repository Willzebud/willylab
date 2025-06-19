// layout.tsx
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Anek_Telugu } from "next/font/google";

// Font principale : Playfair Display
const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption", // Utilisée pour la légende (caption)
});

export const metadata: Metadata = {
  title: "Nopheïa | Drainage Lymphatique – Aubagne & Aix en Provence",
  description:
    "Nopheïa vous propose le massage GAD® : une méthode drainante, anticellulite pour lisser la peau, redessiner la silhouette et relancer la circulation. À Aubagne et Mimet - Aix-en-Provence.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/images/LogoGoogle.png" type="image/png" />

        {/* Canonical & SEO */}
        <link rel="canonical" href="https://nopheia.fr/" />
        <link rel="image_src" href="https://nopheia.fr/images/LogoGoogle.png" />
        <meta
          property="og:image"
          content="https://nopheia.fr/images/LogoGoogle.png"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nopheïa",
              url: "https://nopheia.fr",
              logo: {
                "@type": "ImageObject",
                url: "https://nopheia.fr/images/LogoGoogle.png",
                width: 48,
                height: 48,
              },
            }),
          }}
        />

        {/* Preload DNS for Vercel */}
        <link rel="preconnect" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.variable,
          "font-playfair h-full bg-[hsl(var(--background))] text-[hsl(var(--foreground))]"
        )}
      >
        {children}
        {/* Google Ads Conversion Tracking */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-388768948"
        ></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-388768948');
            `,
          }}
        />
      </body>
    </html>
  );
}
