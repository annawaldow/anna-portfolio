import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";
import { contact, hero, site } from "@/content/portfolio-content";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  // Strukturierte Daten, damit Suchmaschinen die Seite als Personenprofil verstehen.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.url,
    image: `${site.url}${hero.image.src}`,
    email: `mailto:${contact.email}`,
    sameAs: [contact.instagram.url, contact.tiktok.url],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main id="inhalt">
        <Hero />
        <About />
        <Work />
        <Gallery />
        <Services />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
