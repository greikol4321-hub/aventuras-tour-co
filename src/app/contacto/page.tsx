"use client";

import { useState } from "react";
import {
  Phone,
  Envelope,
  MapPin,
  Clock,
  WhatsappLogo,
} from "@phosphor-icons/react";
import ScrollReveal from "@/components/ScrollReveal";
import Toast from "@/components/Toast";
import { useToast } from "@/hooks/useToast";
import { config } from "@/config";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const { toast, showToast, hideToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensaje de contacto:", form);
    // TODO: Conectar a backend real para enviar el mensaje
    showToast("¡Gracias por tu mensaje! Te responderemos a la brevedad.");
    setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <>
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
      <section className="bg-gradient-to-b from-brand-500 to-brand-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-2 text-4xl font-bold sm:text-5xl">Contacto</h1>
          <p className="text-brand-100">Estamos aquí para ayudarte a planear tu próxima aventura</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <h2 className="mb-6 text-2xl font-bold text-earth-900">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-earth-700">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full rounded-lg border border-earth-200 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-earth-700">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-earth-200 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-earth-700">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full rounded-lg border border-earth-200 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    placeholder="+506 8888 8888"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-semibold text-earth-700">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full resize-none rounded-lg border border-earth-200 px-4 py-3 text-sm outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
                >
                  Enviar mensaje
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="mb-6 text-2xl font-bold text-earth-900">Información de contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-earth-900">Teléfono</h3>
                    <p className="text-sm text-earth-600">
                      {config.contact.phone}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Envelope size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-earth-900">Email</h3>
                    <p className="text-sm text-earth-600">
                      {config.contact.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-earth-900">Dirección</h3>
                    <p className="text-sm text-earth-600">
                      Avenida Central, San José, Costa Rica
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-earth-900">Horario de atención</h3>
                    <p className="text-sm text-earth-600">
                      Lun–Sáb: 8:00 – 19:00
                      <br />
                      Dom: 9:00 – 14:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-earth-50 p-6">
                <h3 className="mb-3 text-lg font-bold text-earth-900">¿Hablamos directo?</h3>
                <p className="mb-4 text-sm text-earth-600">
                  Escríbenos por WhatsApp y te responderemos en menos de 5 minutos.
                </p>
                <a
                  href={`https://wa.me/${config.whatsapp.number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <WhatsappLogo size={20} weight="fill" /> WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
