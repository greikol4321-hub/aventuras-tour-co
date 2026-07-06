"use client";

import Link from "next/link";
import { Clock, MapPin, Star } from "@phosphor-icons/react";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/tours/${tour.slug}`} className="relative h-52 overflow-hidden">
        <img
          src={tour.imagenes[0]}
          alt={tour.nombre}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-earth-800 shadow">
          ${tour.precio} USD
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center gap-1 text-xs font-medium text-earth-500">
          <span className="rounded-full bg-earth-100 px-2 py-0.5 capitalize">
            {tour.categoria}
          </span>
          <span className="flex items-center gap-1 ml-auto">
            <Star size={14} weight="fill" className="text-amber-400" />
            {tour.calificacion}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold text-earth-900">{tour.nombre}</h3>

        <div className="mt-auto flex items-center gap-3 text-xs text-earth-500">
          <span className="flex items-center gap-1">
            <Clock size={14} /> {tour.duracion}
          </span>
          <span className="flex items-center gap-1 truncate">
            <MapPin size={14} /> {tour.ubicacion.split(",")[0]}
          </span>
        </div>

        <Link
          href={`/tours/${tour.slug}`}
          className="mt-4 inline-block text-center rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
}
