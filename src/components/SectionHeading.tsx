import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  id: string;
  align?: "left" | "center";
}

/** Einheitlicher Abschnittskopf: Nummer, kleine Zeile, große Serifen-Überschrift. */
export function SectionHeading({
  number,
  label,
  title,
  id,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <p className="eyebrow flex items-center gap-3">
        {align === "center" ? null : (
          <span aria-hidden className="h-px w-8 bg-line" />
        )}
        <span className={align === "center" ? "mx-auto" : ""}>
          <span className="text-rose-deep">{number}</span>
          <span aria-hidden> · </span>
          {label}
        </span>
      </p>
      <h2 id={id} className="display mt-5 text-[2.6rem] sm:text-6xl lg:text-7xl">
        {title}
      </h2>
    </Reveal>
  );
}
