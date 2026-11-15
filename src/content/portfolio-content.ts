import type { Category, ImageAsset, PortfolioVideo } from "./types";

/* ════════════════════════════════════════════════════════════════════
   PORTFOLIO-INHALTE – die einzige Datei, die du bearbeiten musst.

   • Texte:   einfach zwischen den Anführungszeichen ändern.
   • Bilder:  Datei in  public/images/  legen und Pfad hier eintragen.
   • Videos:  siehe Abschnitt „VIDEOS“ weiter unten.
   • Alles mit „PLATZHALTER“ bitte vor der Veröffentlichung ersetzen.
   ════════════════════════════════════════════════════════════════════ */

/* ── Allgemein & SEO ─────────────────────────────────────────────── */

export const site = {
  name: "Anna Waldow",
  role: "UGC & AI Content Creator",
  /** Adresse der Website. Bei einer eigenen Domain hier anpassen. */
  url: "https://anna-portfolio-alpha-five.vercel.app",
  seoTitle: "Anna Waldow | UGC & AI Content Creator",
  seoDescription:
    "Portfolio von Anna Waldow: authentischer UGC Content für Travel, Lifestyle, Beauty und Fashion, ergänzt durch Videoproduktion mit KI.",
};

/* ── Kontakt ─────────────────────────────────────────────────────── */

export const contact = {
  /** Aus deiner Canva-Vorlage übernommen – bitte kurz prüfen. */
  email: "collab.annawaldow@gmail.com",
  instagram: { handle: "@annawaldow", url: "https://www.instagram.com/annawaldow" },
  tiktok: { handle: "@annawaldow", url: "https://www.tiktok.com/@annawaldow" },
  /** Kontaktformular ein-/ausblenden (öffnet das E-Mail-Programm, es werden keine Daten gespeichert). */
  showForm: true,
};

/* ── Navigation ──────────────────────────────────────────────────── */

/** Anschrift für Impressum und Datenschutz. */
export const legal = {
  name: "Anna Waldow",
  street: "Selma-Bruch-Str. 9",
  city: "47906 Kempen",
  country: "Deutschland",
};

export const navigation = [
  { label: "Über mich", href: "/#about" },
  { label: "Portfolio", href: "/#work" },
  { label: "Leistungen", href: "/#services" },
  { label: "Kontakt", href: "/#contact" },
];

/* ── 01 Hero ─────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: "Anna Waldow",
  headline: ["UGC & AI", "Content Creator"],
  intro:
    "Ich erstelle Videos, die sich wie eine Empfehlung anfühlen und nicht wie Werbung. Echt gefilmt, sauber geschnitten und bei Bedarf mit KI weitergedacht.",
  tags: "Travel · Lifestyle · Beauty · AI",
  note: "Let's create value for your socials!",
  primaryCta: { label: "Portfolio ansehen", href: "/#work" },
  secondaryCta: { label: "Let's work together", href: "/#contact" },
  image: {
    src: "/images/hero-pool.jpg",
    alt: "Anna Waldow steht im Abendlicht an einem Pool und blickt über das Wasser auf die Berge",
  } satisfies ImageAsset,
};

/* ── 02 About ────────────────────────────────────────────────────── */

export const about = {
  label: "Über mich",
  headline: "Echte Momente, klar erzählt.",
  paragraphs: [
    "Hey, ich bin Anna. Ich bin im digitalen Bereich selbstständig und beschäftige mich jeden Tag mit Social Media, Content Creation, Marketing und KI.",
    "Weil meine Geschäftsprozesse weitgehend automatisiert laufen, habe ich viel Freiraum für kreative Projekte und bin regelmäßig auf Reisen. Dort entsteht ein großer Teil meines Contents rund um Lifestyle und Travel.",
    "Für Marken heißt das: Ich drehe dort, wo dein Produkt wirklich benutzt wird, spreche offen in die Kamera und kenne die Plattformen aus eigener Erfahrung.",
  ],
  facts: [
    { label: "Schwerpunkte", value: "Travel, Lifestyle, Beauty & Fashion" },
    { label: "Sprachen", value: "Deutsch & Englisch" },
    { label: "Arbeitsweise", value: "Ortsunabhängig, flexibel, zuverlässig" },
  ],
  images: [
    {
      src: "/images/about-cafe.jpg",
      alt: "Anna Waldow sitzt in einem Café vor einer Backsteinwand und lächelt in die Kamera",
    },
    {
      src: "/images/about-strand.jpg",
      alt: "Anna sitzt mit Cap im Sand am Strand, von oben fotografiert",
    },
    {
      src: "/images/about-coworking.jpg",
      alt: "Holzschild mit der Aufschrift Coworking Space an einem Baum unter Palmen",
    },
  ] satisfies ImageAsset[],
};

/* ── 03 My Work ──────────────────────────────────────────────────── */

export const work = {
  label: "Portfolio",
  headline: "My Work",
  intro:
    "Eine Auswahl echter Arbeitsproben. Tippe auf ein Video, um es mit Ton anzusehen.",
  allLabel: "Alle",
};

/**
 * Kategorien der Galerie. Eine Kategorie erscheint automatisch nur dann
 * als Filter, wenn mindestens ein veröffentlichtes Video dazugehört.
 */
export const categories: Category[] = [
  { id: "lifestyle-travel", label: "Lifestyle & Travel" },
  { id: "beauty-fashion", label: "Beauty & Fashion" },
  { id: "product", label: "Product Videos" },
  { id: "talking-voiceover", label: "Talking & Voiceover" },
  { id: "ai-tech", label: "AI & Tech" },
];

/* ── VIDEOS ──────────────────────────────────────────────────────────

   MÖGLICHKEIT A – eigene Videodatei
   1. MP4 nach   public/videos/   kopieren  (hochkant 9:16, am besten < 15 MB)
   2. Coverbild nach   public/covers/   kopieren  (JPG, 9:16)
   3. Hier einen Eintrag mit  type: "file"  ergänzen.

   MÖGLICHKEIT B – Link zu deinem TikTok-Video oder Instagram-Reel
   Eintrag mit  type: "tiktok"  bzw.  type: "instagram"  und dem
   vollständigen Link ergänzen. Das Video wird über den offiziellen
   Player der Plattform eingebettet und erst nach einem Klick geladen.
   Ein Coverbild ist optional, sieht aber deutlich schöner aus.

   Mit  published: false  bleibt ein Eintrag als Entwurf unsichtbar.
   Die Reihenfolge hier ist die Reihenfolge auf der Website.
   ──────────────────────────────────────────────────────────────────── */

export const videos: PortfolioVideo[] = [
  {
    id: "travel-golden-bridge",
    type: "file",
    title: "Golden Bridge, Vietnam",
    category: "lifestyle-travel",
    description: "Travel Vlog mit Drohnenaufnahmen und gesprochenen Parts vor Ort.",
    src: "/videos/travel-golden-bridge.mp4",
    cover: "/covers/travel-golden-bridge.jpg",
  },
  {
    id: "beauty-makeup-routine",
    type: "tiktok",
    title: "Makeup Routine",
    category: "beauty-fashion",
    description: "Get ready with me: Produkte Schritt für Schritt in der Anwendung.",
    url: "https://www.tiktok.com/@annawaldow/video/7644602285909134625",
    cover: "/covers/beauty-makeup-routine.jpg",
  },
  {
    id: "product-blumen",
    type: "tiktok",
    title: "Blumen Unboxing",
    category: "product",
    description: "Kurzes Unboxing mit Schnitt von vorher zu nachher.",
    url: "https://www.tiktok.com/@annawaldow/video/7688740580746087712",
    cover: "/covers/product-blumen.jpg",
  },
  {
    id: "talk-work-pants",
    type: "tiktok",
    title: "Work Pants im Alltagstest",
    category: "talking-voiceover",
    description: "Talking to Camera: ehrliche Einschätzung zu Passform und Größe.",
    url: "https://www.tiktok.com/@annawaldow/video/7667614311350635809",
    cover: "/covers/talk-work-pants.jpg",
  },
  {
    id: "fashion-jeans-review",
    type: "tiktok",
    title: "Jeans Review",
    category: "beauty-fashion",
    description: "Try on mit Text Overlays zu Passform und Größe.",
    url: "https://www.tiktok.com/@annawaldow/video/7667613710180994336",
    cover: "/covers/fashion-jeans-review.jpg",
  },
  {
    id: "travel-rainforest-cafe",
    type: "tiktok",
    title: "Café-Tipp auf Reisen",
    category: "lifestyle-travel",
    description: "Kurzer Location Vlog: Ankommen, Atmosphäre, Details.",
    url: "https://www.tiktok.com/@annawaldow/video/7673876325177756961",
    cover: "/covers/travel-rainforest-cafe.jpg",
  },
  {
    id: "product-esim",
    type: "tiktok",
    title: "eSIM App erklärt",
    category: "product",
    description: "Screen Recording mit Untertiteln: eine eSIM für die Reise in wenigen Schritten buchen.",
    url: "https://www.tiktok.com/@annawaldow/video/7670668800366267680",
    cover: "/covers/product-esim.jpg",
  },
  {
    id: "beauty-tanning-oil",
    type: "tiktok",
    title: "Tanning Oil in drei Schritten",
    category: "beauty-fashion",
    description: "Anwendung und Ergebnis Schritt für Schritt im Video.",
    url: "https://www.tiktok.com/@annawaldow/video/7664609700092087584",
    cover: "/covers/beauty-tanning-oil.jpg",
  },
  {
    id: "talk-zahnbleaching",
    type: "tiktok",
    title: "Erfahrungsbericht Zahnbleaching",
    category: "talking-voiceover",
    description: "Storytelling in die Kamera, vom Termin bis zum Ergebnis.",
    url: "https://www.tiktok.com/@annawaldow/video/7695596179781979424",
    cover: "/covers/talk-zahnbleaching.jpg",
  },
  {
    id: "product-sandalen",
    type: "tiktok",
    title: "Sandalen Try on",
    category: "product",
    description: "Outfit Check aus der eigenen Perspektive.",
    url: "https://www.tiktok.com/@annawaldow/video/7662022029196987681",
    cover: "/covers/product-sandalen.jpg",
  },
  {
    id: "fashion-leinenhose",
    type: "tiktok",
    title: "Sommerhose im Try on",
    category: "beauty-fashion",
    description: "Zwei Farben, ein Schnitt, mit Hinweisen zur Größe.",
    url: "https://www.tiktok.com/@annawaldow/video/7667614099282480417",
    cover: "/covers/fashion-leinenhose.jpg",
  },
  {
    id: "travel-mindset",
    type: "file",
    title: "Reise Reel mit Text Overlay",
    category: "lifestyle-travel",
    description: "Ruhiges Reel mit Kernaussage in wenigen Zeilen.",
    src: "/videos/travel-mindset.mp4",
    cover: "/covers/travel-mindset.jpg",
  },
  {
    id: "ai-faceless",
    type: "file",
    title: "Reel mit KI generiert",
    category: "ai-tech",
    description: "Szenen und Bildwelt vollständig mit KI Tools erstellt.",
    src: "/videos/ai-faceless.mp4",
    cover: "/covers/ai-faceless.jpg",
    published: false, // auf Wunsch ausgeblendet
  },

  /* ── Nur auf TikTok (noch ohne Coverbild – siehe README) ─────────── */
  {
    id: "tiktok-tuktuk-bangkok",
    type: "tiktok",
    title: "Tuk Tuk Fahrt durch Bangkok",
    category: "lifestyle-travel",
    url: "https://www.tiktok.com/@annawaldow/video/7704812485844503840",
  },
  {
    id: "tiktok-iconsiam-vlog",
    type: "tiktok",
    title: "Mall Vlog aus Bangkok",
    category: "lifestyle-travel",
    url: "https://www.tiktok.com/@annawaldow/video/7701781419156081953",
  },
  {
    id: "tiktok-marble-mountains",
    type: "tiktok",
    title: "Marble Mountains, Da Nang",
    category: "lifestyle-travel",
    url: "https://www.tiktok.com/@annawaldow/video/7689835416236674336",
  },
  {
    id: "tiktok-lip-stain",
    type: "tiktok",
    title: "Lip Stain im Test",
    category: "beauty-fashion",
    url: "https://www.tiktok.com/@annawaldow/video/7638389257249279264",
  },
  {
    id: "tiktok-lashes",
    type: "tiktok",
    title: "Get ready with me: Lashes",
    category: "beauty-fashion",
    url: "https://www.tiktok.com/@annawaldow/video/7530611098630753558",
  },

  /* ── Entwürfe / Platzhalter (unsichtbar, bis du sie ausfüllst) ──── */
  {
    id: "platzhalter-tiktok",
    type: "tiktok",
    title: "PLATZHALTER: Titel deines TikTok-Videos",
    category: "lifestyle-travel",
    url: "https://www.tiktok.com/@annawaldow/video/0000000000000000000",
    published: false,
  },
  {
    id: "platzhalter-instagram",
    type: "instagram",
    title: "PLATZHALTER: Titel deines Instagram-Reels",
    category: "beauty-fashion",
    url: "https://www.instagram.com/reel/XXXXXXXXXXX/",
    published: false,
  },
  {
    id: "platzhalter-ai-avatar",
    type: "file",
    title: "PLATZHALTER: AI-Avatar-Video (HeyGen)",
    category: "ai-tech",
    src: "/videos/DATEINAME.mp4",
    cover: "/covers/DATEINAME.jpg",
    published: false,
  },
];

/* ── Bildergalerie: Lifestyle & Travel ───────────────────────────────
   Fotos liegen in  public/images/gallery/  (Hochformat 3:4).
   Neues Bild: Datei dort ablegen und hier einen Eintrag ergänzen.
   `caption` ist die kleine Zeile unter dem Bild, `alt` beschreibt das
   Bild für Screenreader und Suchmaschinen.
   ──────────────────────────────────────────────────────────────────── */

export const gallery = {
  label: "Momente",
  headline: "Lifestyle & Travel",
  intro:
    "Eindrücke von unterwegs. So sehen Orte, Licht und Stimmung in meinem Content aus.",
  linkLabel: "Mehr auf Instagram",
  images: [
    {
      src: "/images/gallery/palmen-da-nang.jpg",
      alt: "Anna vor Palmen an der Strandpromenade von Da Nang",
      caption: "Da Nang, Vietnam",
    },
    {
      src: "/images/gallery/golden-bridge.jpg",
      alt: "Anna vor der Golden Bridge mit den steinernen Händen",
      caption: "Golden Bridge, Vietnam",
    },
    {
      src: "/images/gallery/ksar-tunesien.jpg",
      alt: "Anna sitzt auf einer Treppe vor Lehmbauten in Tunesien",
      caption: "Tunesien",
    },
    {
      src: "/images/gallery/strand-da-nang.jpg",
      alt: "Anna läuft über einen weiten Sandstrand",
      caption: "My Khe Beach, Vietnam",
    },
    {
      src: "/images/gallery/georgien-cafe.jpg",
      alt: "Anna sitzt in einem Café zwischen Pflanzen",
      caption: "Georgien",
    },
    {
      src: "/images/gallery/resort.jpg",
      alt: "Anna auf einer Terrasse mit Blick über eine Hotelanlage",
      caption: "Sommertage",
    },
    {
      src: "/images/gallery/georgien-fluss.jpg",
      alt: "Anna an einem Geländer über einem Fluss, im Hintergrund die Altstadt",
      caption: "Georgien",
    },
    {
      src: "/images/gallery/sonnenuntergang.jpg",
      alt: "Anna im Abendlicht über dem Meer",
      caption: "Golden Hour",
    },
  ] satisfies (ImageAsset & { caption: string })[],
};

/* ── AI Content Creation (derzeit nicht auf der Seite; zum Einblenden
   <AiSection /> in src/app/page.tsx wieder einfügen) ──────────────────────────────────────── */

export const ai = {
  label: "AI Content Creation",
  headline: "Wo echte Aufnahmen auf KI treffen.",
  intro:
    "KI ersetzt bei mir keine echten Aufnahmen. Sie erweitert, was möglich ist: zusätzliche Varianten, neue Bildwelten und Formate, die ohne Dreh auskommen. Mein Wissen dazu gebe ich auch in einem eigenen Coaching zur KI-Avatar-Erstellung weiter.",
  areas: [
    {
      title: "AI Avatar Creation",
      text: "Digitale Avatare, die natürlich sprechen und zur Marke passen.",
    },
    {
      title: "HeyGen",
      status: "Mein Hauptwerkzeug",
      text: "Damit habe ich bisher die meisten meiner Avatar Videos umgesetzt.",
    },
    {
      title: "Higgsfield",
      status: "Im Aufbau",
      text: "Arbeite ich mich gerade intensiv ein, für bewegte, filmische KI Szenen.",
    },
    {
      title: "AI Video Production",
      text: "Von der Idee über Skript und Bildwelt bis zum fertigen Schnitt.",
    },
    {
      title: "Creative AI Workflows",
      text: "Abläufe, die Echtmaterial und KI sinnvoll und effizient verbinden.",
    },
  ],
  cta: { label: "AI Beispiel im Portfolio ansehen", href: "/#work" },
};

/* ── 04 Services ─────────────────────────────────────────────────── */

export const services = {
  label: "Leistungen",
  headline: "Was ich für deine Marke umsetze.",
  items: [
    {
      title: "UGC Video Creation",
      text: "Authentische Videos aus Nutzersicht, für Ads und organische Kanäle.",
    },
    {
      title: "Short Form Video Content",
      text: "Reels, TikToks und Shorts mit starkem Einstieg und klarem Aufbau.",
    },
    {
      title: "Product Demonstrations",
      text: "Dein Produkt in der Anwendung, verständlich und nah gezeigt.",
    },
    {
      title: "Lifestyle Content",
      text: "Produkte eingebettet in Alltag und Reisen statt im Studio.",
    },
    {
      title: "Voiceover Content",
      text: "Eingesprochene Texte auf Deutsch oder Englisch, passend zum Bild.",
    },
    {
      title: "AI Assisted Video Creation",
      text: "Videos und Avatare mit KI als Ergänzung zum Echtdreh.",
    },
  ],
};

/* ── 05 Kontakt-Sektion ──────────────────────────────────────────── */

export const contactSection = {
  label: "Kontakt",
  headline: "Let's work together",
  text: "Du hast ein Produkt, eine Kampagne oder erst einmal nur eine Idee? Schreib mir, ich melde mich zeitnah mit einem Vorschlag zurück.",
  note: "let's get in touch!",
  emailButton: "Mail schreiben",
  image: {
    src: "/images/anna-ksar.jpg",
    alt: "Anna Waldow im Abendlicht vor einer Lehmarchitektur",
  } satisfies ImageAsset,
};

/* ── Footer ──────────────────────────────────────────────────────── */

export const footer = {
  copyright: "© Anna Waldow",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
};
