import type { Metadata, Viewport } from "next";
import { Caveat, Cormorant_Garamond, Jost } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { hero, site } from "@/content/portfolio-content";
import "./globals.css";

// Schriften werden beim Build heruntergeladen und von der eigenen Domain
// ausgeliefert – es gehen keine Besucherdaten an Google.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s | ${site.name}`,
  },
  description: site.seoDescription,
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: site.seoTitle,
    description: site.seoDescription,
    url: "/",
    images: [{ url: hero.image.src, alt: hero.image.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    images: [hero.image.src],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf8f4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${jost.variable} ${caveat.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Zum Inhalt springen
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
