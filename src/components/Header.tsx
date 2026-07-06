"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { List, X, Compass } from "@phosphor-icons/react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/tours", label: "Tours" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleEscape);
      firstLinkRef.current?.focus();
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, handleEscape]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-earth-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 text-white shadow-md shadow-brand-500/25 transition-transform group-hover:scale-110">
            <Compass size={22} weight="fill" className="transition-transform group-hover:rotate-45" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-extrabold tracking-tight text-earth-900">
              Aventuras
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              Tour & Co
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-earth-700 transition-colors hover:text-brand-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-1 text-earth-700"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-earth-100 bg-white px-4 py-4 space-y-3"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-earth-700 transition-colors hover:text-brand-500"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
