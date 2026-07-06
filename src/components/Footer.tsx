"use client";

import { MapPin, Phone, Clock, Envelope, FacebookLogo, InstagramLogo, YoutubeLogo, WhatsappLogo } from "@phosphor-icons/react";
import { config } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-earth-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Aventuras Tour&Co</h3>
            <p className="text-sm leading-relaxed">
              Tours y actividades auténticas en Costa Rica. Conectamos viajeros con experiencias
              inolvidables desde 2015.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} /> {config.contact.phone}
              </li>
              <li className="flex items-center gap-2">
                <Envelope size={16} /> {config.contact.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> San José, Costa Rica
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Horario</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Clock size={16} /> Lun–Sáb: 8:00 – 19:00
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} /> Dom: 9:00 – 14:00
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-brand-400">
                <FacebookLogo size={22} />
              </a>
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-brand-400">
                <InstagramLogo size={22} />
              </a>
              <a href="#" aria-label="YouTube" className="transition-colors hover:text-brand-400">
                <YoutubeLogo size={22} />
              </a>
              <a href="#" aria-label="WhatsApp" className="transition-colors hover:text-brand-400">
                <WhatsappLogo size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-earth-700 pt-6 text-center text-xs text-earth-400">
          &copy; {new Date().getFullYear()} Aventuras Tour&Co. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
