"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { tours } from "@/data/tours";
import {
  Clock,
  MapPin,
  CurrencyDollar,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Star,
} from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollReveal from "@/components/ScrollReveal";
import BookingForm from "@/components/BookingForm";
import Toast from "@/components/Toast";
import { useToast } from "@/hooks/useToast";
import { config } from "@/config";
import { useState } from "react";

export default function TourDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find((t) => t.slug === slug);

  const [form, setForm] = useState({
    fecha: "",
    personas: "1",
    nombre: "",
    email: "",
    telefono: "",
  });

  const { toast, showToast, hideToast } = useToast();

  if (!tour) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-2xl font-bold text-earth-900">Tour no encontrado</h1>
        <p className="text-earth-500">El tour que buscas no existe o ha sido removido.</p>
        <Link
          href="/tours"
          className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white hover:bg-brand-600"
        >
          Volver a tours
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reserva solicitada:", { tour: tour.nombre, ...form });
    showToast("¡Gracias por tu interés! Te contactaremos pronto para confirmar tu reserva.");
    setForm({ fecha: "", personas: "1", nombre: "", email: "", telefono: "" });
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
      <section className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          className="aspect-[16/9] sm:aspect-[21/9]"
          loop
        >
          {tour.imagenes.map((img, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          href="/tours"
          className="absolute left-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-earth-800 shadow backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ArrowLeft size={18} /> Volver
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-brand-100 px-3 py-1 font-medium capitalize text-brand-700">
                  {tour.categoria}
                </span>
                <span className="flex items-center gap-1 text-amber-500">
                  <Star size={16} weight="fill" /> {tour.calificacion}
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-earth-900 sm:text-4xl">
                {tour.nombre}
              </h1>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center gap-1 rounded-[20px] bg-brand-50 p-3.5 text-center transition-transform hover:scale-105">
                  <CurrencyDollar size={22} className="text-brand-500" />
                  <span className="text-sm font-bold text-earth-900">${tour.precio}</span>
                  <span className="text-xs text-earth-500">USD / persona</span>
                </div>
                <div className="flex flex-col items-center gap-1 rounded-[20px] bg-brand-50 p-3.5 text-center transition-transform hover:scale-105">
                  <Clock size={22} className="text-brand-500" />
                  <span className="text-sm font-bold text-earth-900">{tour.duracion}</span>
                  <span className="text-xs text-earth-500">Duración</span>
                </div>
                <div className="flex flex-col items-center gap-1 rounded-[20px] bg-brand-50 p-3.5 text-center transition-transform hover:scale-105">
                  <MapPin size={22} className="text-brand-500" />
                  <span className="text-sm font-bold text-earth-900 leading-tight">
                    {tour.ubicacion.split(",")[0]}
                  </span>
                  <span className="text-xs text-earth-500">{tour.ubicacion.split(",").slice(1).join(",").trim()}</span>
                </div>
              </div>
            </ScrollReveal>

            <div className="lg:hidden">
              <ScrollReveal>
                <div className="overflow-hidden rounded-[20px] border border-earth-100 bg-white shadow-lg">
                  <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-4 text-white">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold">${tour.precio}</span>
                      <span className="text-sm text-brand-100">USD</span>
                    </div>
                    <p className="mt-0.5 text-sm text-brand-100">por persona</p>
                  </div>
                  <div className="p-4">
                    <BookingForm form={form} setForm={setForm} onSubmit={handleSubmit} />
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal>
              <h2 className="mb-4 text-xl font-bold text-earth-900">Descripción</h2>
              <div className="relative overflow-hidden rounded-[20px] bg-earth-50 p-6">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-200/40 animate-float-delayed" />
                <p className="leading-relaxed text-earth-700">{tour.descripcion}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 text-xl font-bold text-earth-900">Qué incluye</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-leaf-200 bg-leaf-50/50 p-5 transition-shadow hover:shadow-md">
                  <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold text-leaf-700">
                    <CheckCircle size={16} weight="fill" /> Incluye
                  </h3>
                  <ul className="space-y-2">
                    {tour.incluye.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-earth-700">
                        <CheckCircle size={18} className="mt-0.5 shrink-0 text-leaf-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[20px] border border-red-200 bg-red-50/50 p-5 transition-shadow hover:shadow-md">
                  <h3 className="mb-3 flex items-center gap-1.5 text-sm font-bold text-red-600">
                    <XCircle size={16} weight="fill" /> No incluye
                  </h3>
                  <ul className="space-y-2">
                    {tour.noIncluye.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-earth-700">
                        <XCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {tour.itinerario.length > 0 && (
              <ScrollReveal>
                <h2 className="mb-6 text-xl font-bold text-earth-900">Itinerario</h2>
                <div className="relative rounded-[20px] border border-earth-100 p-6">
                  <div className="pointer-events-none absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-brand-100/30 animate-float" />
                  {tour.itinerario.map((item, i) => (
                    <div key={i} className="flex gap-4 pb-6 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 text-xs font-bold text-white shadow-md transition-transform hover:scale-110">
                          {i + 1}
                        </div>
                        {i < tour.itinerario.length - 1 && (
                          <div className="mt-1 w-0.5 flex-1 rounded-full bg-gradient-to-b from-brand-300 to-brand-100" />
                        )}
                      </div>
                      <div className="flex-1 rounded-xl bg-earth-50 p-3">
                        <span className="inline-block rounded-lg bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
                          {item.hora}
                        </span>
                        <p className="mt-2 text-sm text-earth-700">{item.actividad}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 overflow-hidden rounded-[20px] border border-earth-100 bg-white shadow-lg">
              <div className="bg-gradient-to-r from-brand-500 to-brand-600 p-5 text-white">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">${tour.precio}</span>
                  <span className="text-sm text-brand-100">USD</span>
                </div>
                <p className="mt-0.5 text-sm text-brand-100">por persona</p>
              </div>
              <div className="p-5">
                <BookingForm form={form} setForm={setForm} onSubmit={handleSubmit} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-earth-900">Ubicación de encuentro</h2>
          <div className="overflow-hidden rounded-[20px] shadow-md">
            <iframe
              src={config.mapUrl}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del tour"
            />
          </div>
          <p className="mt-2 text-sm text-earth-500">
            <MapPin size={16} className="inline" /> {tour.ubicacion}
          </p>
        </div>
      </section>
    </>
  );
}
