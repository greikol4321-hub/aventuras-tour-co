"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { testimonios } from "@/data/testimonials";
import {
  Users,
  ShieldCheck,
  ArrowsClockwise,
  Heart,
  Star,
  Phone,
  MapPin,
} from "@phosphor-icons/react";

const destacados = tours.slice(0, 6);

const razones = [
  {
    icon: ShieldCheck,
    title: "Guías Certificados",
    desc: "Todos nuestros guías cuentan con certificaciones oficiales y años de experiencia local.",
    largo: false,
  },
  {
    icon: Users,
    title: "Grupos Reducidos",
    desc: "Máximo 8 personas por grupo para una experiencia personalizada y auténtica.",
    largo: true,
  },
  {
    icon: ArrowsClockwise,
    title: "Cancelación Flexible",
    desc: "Cambia o cancela sin costo hasta 48 horas antes de tu tour.",
    largo: false,
  },
  {
    icon: Heart,
    title: "Turismo Responsable",
    desc: "Trabajamos con comunidades locales y minimizamos el impacto ambiental.",
    largo: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Descubre Costa Rica"
        subtitle="Vive experiencias únicas con guías locales expertos. Aventura, naturaleza, playa y gastronomía te esperan."
        ctaText="Ver tours"
        ctaHref="/tours"
      />

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand-200/20 animate-float" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-300/15 animate-float-delayed" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-2 text-center text-3xl font-bold text-earth-900 sm:text-4xl">
              Tours Destacados
            </h2>
            <p className="mb-12 text-center text-earth-500">
              Las experiencias favoritas de nuestros viajeros
            </p>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((tour, i) => (
              <ScrollReveal key={tour.id} delay={i * 0.1}>
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-earth-50 py-20">
        <div className="pointer-events-none absolute -right-10 top-1/3 h-48 w-48 rounded-full bg-brand-100/40 animate-spin-slow" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-brand-200/30 animate-float" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-4 text-center text-3xl font-bold text-earth-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
            <p className="mb-12 text-center text-sm text-earth-500">
              Lo que nos hace diferentes
            </p>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {razones.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <div className={`flex h-full flex-col items-center rounded-[20px] p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${i === 3 ? "bg-gradient-to-br from-brand-500 to-brand-600 text-white" : "bg-white"}`}>
                  <r.icon size={32} className={`mb-3 ${i === 3 ? "text-brand-100" : "text-brand-600"}`} weight="fill" />
                  <h3 className="mb-2 text-lg font-bold">{r.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 3 ? "text-brand-100" : "text-earth-600"}`}>{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-brand-100/20 animate-float-delayed" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-3xl font-bold text-earth-900 sm:text-4xl">
              Lo que dicen nuestros viajeros
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonios.slice(0, 3).map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-[20px] border border-earth-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                  <div className="mb-3 flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={18}
                        weight={j < t.estrellas ? "fill" : "regular"}
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-earth-700">
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand-100 text-xs font-bold text-brand-600">
                      {t.nombre.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-earth-900">{t.nombre}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
            <div className="sm:col-span-2 lg:col-span-1">
              <ScrollReveal delay={0.24}>
                <div className="flex h-full flex-col justify-center rounded-[20px] bg-earth-50 p-6">
                  <MapPin size={24} className="mb-2 text-brand-500" />
                  <p className="mb-3 text-sm leading-relaxed text-earth-700">
                    Más de <strong className="text-earth-900">500 viajeros</strong> nos han acompañado. Cada opinión nos impulsa a seguir ofreciendo experiencias auténticas.
                  </p>
                  <span className="text-xs font-bold text-brand-600">Aventuras Tour&Co</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {testimonios.slice(3).map((t, i) => (
                <div key={i + 3} className="flex items-start gap-4 rounded-[16px] border border-earth-100 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-xs font-bold text-brand-600">
                    {t.nombre.charAt(0)}
                  </div>
                  <div>
                    <div className="mb-1 flex gap-0.5 text-amber-400">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} weight={j < t.estrellas ? "fill" : "regular"} />
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-earth-700">
                      &ldquo;{t.texto}&rdquo;
                    </p>
                    <span className="mt-1 text-xs font-semibold text-earth-900">{t.nombre}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-brand-600 to-brand-500 py-20 text-white">
        <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-white/5 animate-float" />
        <div className="pointer-events-none absolute -bottom-10 right-10 h-24 w-24 rounded-full bg-white/10 animate-float-delayed" />
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              ¿Listo para tu próxima aventura?
            </h2>
            <p className="mb-8 text-brand-100">
              Contáctanos hoy y te ayudaremos a encontrar el tour perfecto para ti.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/tours"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-600 shadow-lg transition-all hover:bg-earth-50 active:scale-95"
              >
                Explorar tours
              </Link>
              <a
                href="/contacto"
                className="flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10 active:scale-95"
              >
                <Phone size={18} /> Contáctanos
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
