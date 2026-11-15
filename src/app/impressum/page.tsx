import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact, legal } from "@/content/portfolio-content";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {legal.name}
        <br />
        {legal.street}
        <br />
        {legal.city}
        <br />
        {legal.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <h2>Umsatzsteuer</h2>
      <p>
        Als Kleinunternehmerin im Sinne von § 19 Abs. 1 UStG wird keine
        Umsatzsteuer berechnet und ausgewiesen.
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {legal.name}, Anschrift wie oben
      </p>

      <h2>Verbraucherstreitbeilegung</h2>
      <p>
        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalPage>
  );
}
