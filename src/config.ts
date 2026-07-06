export const config = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "50688888888",
    message: process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "¡Hola! Quiero información sobre los tours.",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@ejemplo-tours.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+506 8888 8888",
  },
  mapUrl: process.env.NEXT_PUBLIC_MAP_URL || "",
} as const;
