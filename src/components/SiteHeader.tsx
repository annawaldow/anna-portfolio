"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, site } from "@/content/portfolio-content";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
        scrolled || open
          ? "border-b border-line/70 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display text-xl tracking-[0.18em] uppercase"
        >
          {site.name}
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group relative py-2 text-[0.72rem] font-normal tracking-[0.2em] uppercase"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-rose-deep transition-transform duration-500 ease-soft group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden className="relative block h-3 w-6">
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile Navigation"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto bg-cream md:hidden"
      >
        <ul className="container-page flex flex-col pt-6">
          {navigation.map((item) => (
            <li key={item.href} className="border-b border-line/70">
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="display block py-5 text-4xl"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
