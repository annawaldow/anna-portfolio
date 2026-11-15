"use client";

import { useState } from "react";

const fieldClass =
  "mt-2 w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-base text-ink placeholder:text-taupe/70 focus:border-ink focus:outline-none focus-visible:outline-none";

/**
 * Kontaktformular ohne Server: Beim Absenden öffnet sich das Mailprogramm
 * der Besucherin/des Besuchers mit der vorbereiteten Nachricht.
 * Es werden keine Daten auf der Website gespeichert oder an Dritte gesendet.
 */
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const brand = String(data.get("brand") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Kooperationsanfrage${brand ? `: ${brand}` : ""}`;
    const body = `${message}\n\n${name}${brand ? `\n${brand}` : ""}`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow">Name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="eyebrow">Marke / Unternehmen</span>
          <input
            name="brand"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow">Nachricht</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Worum geht es bei eurem Projekt?"
          className={`${fieldClass} resize-y`}
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-solid">
          Anfrage vorbereiten
        </button>
        <p className="text-sm text-taupe" role="status">
          {sent
            ? "Dein Mailprogramm sollte sich jetzt geöffnet haben."
            : "Öffnet dein Mailprogramm. Hier wird nichts gespeichert."}
        </p>
      </div>
    </form>
  );
}
