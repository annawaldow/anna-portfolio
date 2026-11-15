import Link from "next/link";
import { footer, site } from "@/content/portfolio-content";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="container-page flex flex-col gap-4 py-8 text-[0.7rem] tracking-[0.2em] uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>
          {footer.copyright} · {site.role}
        </p>
        <ul className="flex gap-6">
          {footer.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
