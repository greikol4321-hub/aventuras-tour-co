"use client";

import { usePathname } from "next/navigation";
import { WhatsappLogo } from "@phosphor-icons/react";
import { config } from "@/config";

export default function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname === "/contacto") return null;

  const number = config.whatsapp.number;
  const message = encodeURIComponent(config.whatsapp.message);
  const href = `https://wa.me/${number}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl active:scale-90"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
