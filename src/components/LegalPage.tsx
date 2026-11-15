import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

/** Gemeinsamer Rahmen für Impressum und Datenschutz. */
export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main id="inhalt" className="container-page pb-24 pt-32 md:pt-40">
        <h1 className="display text-5xl md:text-7xl">{title}</h1>
        <div className="mt-10 max-w-2xl space-y-6 text-ink-soft [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

/** Deutlich markierter Platzhalter, der vor der Veröffentlichung ersetzt werden muss. */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-blush px-1.5 py-0.5 font-normal text-rose-deep">
      [PLATZHALTER: {children}]
    </span>
  );
}

export function DraftNotice() {
  return (
    <p className="border border-rose/60 bg-blush/60 p-4 text-sm text-ink">
      <strong className="font-medium">Entwurf.</strong> Diese Seite enthält
      Platzhalter und ist keine Rechtsberatung. Bitte vor der Veröffentlichung
      vollständig ausfüllen und rechtlich prüfen lassen.
    </p>
  );
}
