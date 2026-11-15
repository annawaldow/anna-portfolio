import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { contact, legal } from "@/content/portfolio-content";

export const metadata: Metadata = {
  title: "Datenschutz",
  robots: { index: false },
  alternates: { canonical: "/datenschutz" },
};

/*
 * Hinweis: Dieser Text ist auf das Hosting bei Vercel zugeschnitten und
 * keine Rechtsberatung. Bei einem anderen Anbieter den Abschnitt „Hosting“
 * anpassen. Vor der Veröffentlichung rechtlich prüfen lassen.
 */
export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutz">
      <h2>Verantwortliche</h2>
      <p>
        {legal.name}, {legal.street}, {legal.city}, {legal.country}
        <br />
        E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei Vercel Inc., 440 N Barranca Avenue #4133,
        Covina, CA 91723, USA, gehostet. Beim Aufruf der Seite verarbeitet
        Vercel technisch notwendige Daten in Server-Logfiles, insbesondere
        IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
        Browsertyp und Betriebssystem.
      </p>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        Mein berechtigtes Interesse liegt in der sicheren und zuverlässigen
        Bereitstellung dieser Website. Die Logdaten werden nur so lange
        gespeichert, wie es für den Betrieb und die Sicherheit der Website
        erforderlich ist.
      </p>
      <p>
        Mit Vercel besteht ein Vertrag zur Auftragsverarbeitung nach Art. 28
        DSGVO. Dabei können Daten in die USA übermittelt werden. Vercel ist
        nach dem EU-U.S. Data Privacy Framework zertifiziert; die Übermittlung
        stützt sich auf den Angemessenheitsbeschluss der EU-Kommission nach
        Art. 45 DSGVO. Weitere Informationen:{" "}
        <a
          href="https://vercel.com/legal/privacy-notice"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzhinweise von Vercel
        </a>
        .
      </p>

      <h2>Cookies und Tracking</h2>
      <p>
        Diese Website setzt keine Cookies zu Analyse- oder Werbezwecken und
        verwendet keine Tracking-Tools. Schriften werden von der eigenen Domain
        geladen; es besteht dabei keine Verbindung zu Google.
      </p>

      <h2>Eingebettete Videos von TikTok und Instagram</h2>
      <p>
        Einzelne Videos im Portfolio sind über die offiziellen Player von
        TikTok oder Instagram eingebunden. Diese Inhalte werden erst geladen,
        nachdem du auf „Video laden“ geklickt hast. Erst dann werden Daten
        (unter anderem deine IP-Adresse) an den jeweiligen Anbieter übertragen,
        und der Anbieter kann eigene Cookies setzen. Eine Übermittlung in
        Länder außerhalb der EU, insbesondere in die USA, ist dabei möglich.
      </p>
      <p>
        Rechtsgrundlage ist deine Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO
        und § 25 Abs. 1 TDDDG, die du mit dem Klick auf „Video laden“ erteilst.
        Du kannst sie für die Zukunft widerrufen, indem du die Seite neu lädst
        und den Player nicht erneut aktivierst.
      </p>
      <p>
        Anbieter von TikTok ist für Nutzerinnen und Nutzer in der EU die TikTok
        Technology Limited, 10 Earlsfort Terrace, Dublin, D02 T380, Irland (
        <a
          href="https://www.tiktok.com/legal/privacy-policy-eea"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von TikTok
        </a>
        ). Anbieter von Instagram ist die Meta Platforms Ireland Limited,
        Merrion Road, Dublin 4, D04 X2K5, Irland (
        <a
          href="https://privacycenter.instagram.com/policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzrichtlinie von Meta
        </a>
        ).
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Das Kontaktformular öffnet lediglich dein eigenes E-Mail-Programm; auf
        dieser Website werden dabei keine Daten gespeichert. Wenn du mir eine
        E-Mail schreibst, verarbeite ich deine Angaben (Name, E-Mail-Adresse,
        Inhalt der Nachricht) zur Bearbeitung deiner Anfrage.
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit deine Anfrage auf
        eine Zusammenarbeit gerichtet ist, im Übrigen Art. 6 Abs. 1 lit. f
        DSGVO. Ich lösche die Daten, sobald deine Anfrage abschließend
        bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>

      <h2>Deine Rechte</h2>
      <p>
        Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
        der Verarbeitung, Datenübertragbarkeit und Widerspruch gegen
        Verarbeitungen, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen. Eine
        erteilte Einwilligung kannst du jederzeit für die Zukunft widerrufen.
        Schreib mir dafür an die oben genannte E-Mail-Adresse.
      </p>
      <p>
        Außerdem kannst du dich bei einer Datenschutzaufsichtsbehörde
        beschweren. Für mich zuständig ist die Landesbeauftragte für
        Datenschutz und Informationsfreiheit Nordrhein-Westfalen,
        Kavalleriestraße 2-4, 40213 Düsseldorf.
      </p>
    </LegalPage>
  );
}
