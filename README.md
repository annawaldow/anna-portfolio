# Anna Waldow – UGC & AI Creator Portfolio

Next.js 16 · TypeScript · Tailwind CSS 4 · Motion

## Lokal starten

```bash
npm install
npm run dev
```

Danach im Browser <http://localhost:3000> öffnen.

## Inhalte bearbeiten

Alles Inhaltliche steht in **einer** Datei:

`src/content/portfolio-content.ts`

Dort findest du Texte, Kontaktdaten, Bilder, Kategorien und die Videoliste.
Suche nach `PLATZHALTER`, um alles zu finden, was noch ersetzt werden muss.

### Neues Video als Datei (Möglichkeit A)

1. MP4 (hochkant 9:16, möglichst unter 15 MB) nach `public/videos/` kopieren.
2. Coverbild (JPG, 9:16) nach `public/covers/` kopieren.
3. In `portfolio-content.ts` in der Liste `videos` einen Eintrag ergänzen:

```ts
{
  id: "mein-neues-video",            // eindeutig, klein, ohne Leerzeichen
  type: "file",
  title: "Titel des Videos",
  category: "beauty-fashion",        // siehe Liste `categories`
  description: "Optionaler kurzer Text.",
  src: "/videos/mein-neues-video.mp4",
  cover: "/covers/mein-neues-video.jpg",
},
```

Große Handy-Videos vorher verkleinern (einmalig `brew install ffmpeg`):

```bash
ffmpeg -i eingabe.mov -vf "scale=720:-2" -c:v libx264 -crf 25 -c:a aac -movflags +faststart public/videos/mein-neues-video.mp4
```

```bash
ffmpeg -ss 2 -i eingabe.mov -frames:v 1 -vf "scale=720:-2" public/covers/mein-neues-video.jpg
```

### TikTok-Video oder Instagram-Reel verlinken (Möglichkeit B)

```ts
{
  id: "mein-tiktok",
  type: "tiktok",                    // oder "instagram"
  title: "Titel",
  category: "lifestyle-travel",
  url: "https://www.tiktok.com/@annawaldow/video/1234567890123456789",
  cover: "/covers/mein-tiktok.jpg",  // optional
},
```

Bitte den vollständigen Link verwenden (kein Kurzlink wie `vm.tiktok.com`).
Der offizielle Player wird erst nach einem Klick auf „Video laden“ geladen.
Der Ton läuft über den TikTok-Player. TikTok liefert kein Coverbild mit: Ohne
`cover` zeigt die Galerie eine Titelkarte. Für ein Cover einen Screenshot des
Videos (9:16) nach `public/covers/` legen und bei `cover` eintragen.

### Entwürfe und Kategorien

- `published: false` blendet einen Eintrag aus, ohne ihn zu löschen.
- Eine Kategorie erscheint nur als Filter, wenn sie mindestens ein sichtbares Video hat.

### Bilder austauschen

Bild nach `public/images/` kopieren und den Pfad sowie den Beschreibungstext
(`alt`) in `portfolio-content.ts` anpassen (`hero.image`, `about.images`,
`contactSection.image`).

### Bildergalerie „Lifestyle & Travel“

Foto (Hochformat 3:4, ca. 1200 px breit) nach `public/images/gallery/` kopieren
und in `portfolio-content.ts` bei `gallery.images` einen Eintrag mit `src`, `alt`
und `caption` ergänzen. Die Reihenfolge dort ist die Reihenfolge auf der Seite.

## Vor der Veröffentlichung

- `site.url` in `portfolio-content.ts` auf deine echte Adresse setzen.
- Impressum und Datenschutz ausfüllen: `src/app/impressum/page.tsx`, `src/app/datenschutz/page.tsx`.
- Kontaktdaten und Social-Links prüfen.

## Aufbau

```
src/content/portfolio-content.ts   Alle Inhalte
src/content/types.ts               Datentypen
src/lib/videos.ts                  Video-Quelle (hier ließe sich später eine API ergänzen)
src/lib/embeds.ts                  TikTok-/Instagram-Einbettung
src/components/                    Abschnitte der Seite
src/components/work/               Galerie, Videokarte, Lightbox
src/app/                           Seiten, Layout, Designsystem (globals.css)
public/videos · covers · images    Mediendateien
```
