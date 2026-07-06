"use client";

import { CalendarBlank, Users } from "@phosphor-icons/react";

type BookingFormData = {
  fecha: string;
  personas: string;
  nombre: string;
  email: string;
  telefono: string;
};

type BookingFormProps = {
  form: BookingFormData;
  setForm: (f: BookingFormData) => void;
  onSubmit: (e: React.FormEvent) => void;
};

export default function BookingForm({ form, setForm, onSubmit }: BookingFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-earth-700">
            <CalendarBlank size={14} className="inline" /> Fecha
          </label>
          <input
            type="date"
            required
            value={form.fecha}
            onChange={(e) => setForm({ ...form, fecha: e.target.value })}
            className="w-full rounded-xl border border-earth-200 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold text-earth-700">
            <Users size={14} className="inline" /> Personas
          </label>
          <select
            value={form.personas}
            onChange={(e) => setForm({ ...form, personas: e.target.value })}
            className="w-full rounded-xl border border-earth-200 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? "persona" : "personas"}</option>
            ))}
          </select>
        </div>
      </div>
      {form.fecha && form.personas && (
        <>
          <div className="border-t border-earth-100 pt-3">
            <p className="mb-3 text-xs font-semibold text-earth-700">Tus datos</p>
          </div>
          <input
            type="text" required placeholder="Nombre completo"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="w-full rounded-xl border border-earth-200 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <input
            type="email" required placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl border border-earth-200 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
          <input
            type="tel" required placeholder="Teléfono"
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className="w-full rounded-xl border border-earth-200 px-3 py-2.5 text-sm outline-none transition-all focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
          />
        </>
      )}
      <button
        type="submit"
        className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105 active:scale-[0.98]"
      >
        Reservar ahora
      </button>
      <p className="text-center text-xs text-earth-400">
        Sin cargo por adelantado. Te contactaremos para confirmar.
      </p>
    </form>
  );
}
