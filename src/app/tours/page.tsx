"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import { tours, categorias } from "@/data/tours";
import ScrollReveal from "@/components/ScrollReveal";

export default function ToursPage() {
  const [activa, setActiva] = useState("todas");

  const filtrados =
    activa === "todas" ? tours : tours.filter((t) => t.categoria === activa);

  return (
    <>
      <section className="bg-gradient-to-b from-brand-500 to-brand-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">Nuestros Tours</h1>
          <p className="text-brand-100">
            Explora todas las experiencias que tenemos para ti
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiva(cat.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activa === cat.id
                    ? "bg-brand-500 text-white shadow"
                    : "bg-earth-100 text-earth-700 hover:bg-earth-200"
                }`}
              >
                {cat.nombre}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((tour, i) => (
              <ScrollReveal key={tour.id} delay={i * 0.05}>
                <TourCard tour={tour} />
              </ScrollReveal>
            ))}
          </div>

          {filtrados.length === 0 && (
            <p className="py-20 text-center text-earth-500">
              No hay tours en esta categoría todavía.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
