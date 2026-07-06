/*
  DATOS DE PRUEBA — REEMPLAZAR POR FUENTE REAL (BD / CMS)
  Este archivo simula una base de datos de tours.
  Cuando se implemente el backend real (Supabase, Strapi, etc.),
  reemplazar las funciones de este archivo manteniendo los tipos
  para que los componentes no requieran cambios.
*/

export type Tour = {
  id: string;
  slug: string;
  nombre: string;
  categoria: "aventura" | "cultural" | "playa" | "gastronomico" | "naturaleza";
  precio: number;
  duracion: string;
  imagenes: string[];
  descripcion: string;
  incluye: string[];
  noIncluye: string[];
  itinerario: { hora: string; actividad: string }[];
  ubicacion: string;
  calificacion: number;
};

export const tours: Tour[] = [
  {
    id: "1",
    slug: "buceo-isla-cano",
    nombre: "Buceo en Isla del Caño",
    categoria: "aventura",
    precio: 139,
    duracion: "7 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&q=80",
    ],
    descripcion:
      "Explora el arrecife de Isla del Caño, una de las reservas marinas más ricas del Pacífico costarricense. Bucea entre formaciones coralinas, rayas, tortugas marinas y bancos de peces tropicales en aguas de visibilidad espectacular. Ideal para buceadores certificados y principiantes con instructores bilingües certificados.",
    incluye: [
      "Transporte ida y vuelta desde el hotel",
      "Equipo completo de buceo",
      "Instructor bilingüe certificado",
      "Snacks y bebidas",
      "Fotos subacuáticas digitales",
      "Seguro de accidentes",
    ],
    noIncluye: [
      "Certificación de buceo (si aplica)",
      "Toallas",
      "Propinas",
    ],
    itinerario: [
      { hora: "06:00", actividad: "Recogida en el hotel" },
      { hora: "07:00", actividad: "Salida en lancha desde Bahía Drake" },
      { hora: "07:45", actividad: "Llegada a Isla del Caño y briefing" },
      { hora: "08:00", actividad: "Primera inmersión (45 min)" },
      { hora: "10:00", actividad: "Descanso y snorkel superficial" },
      { hora: "10:30", actividad: "Segunda inmersión" },
      { hora: "12:00", actividad: "Comida en la playa" },
      { hora: "13:00", actividad: "Regreso" },
    ],
    ubicacion: "Bahía Drake, Puntarenas, Costa Rica",
    calificacion: 4.8,
  },
  {
    id: "2",
    slug: "volcan-arenal",
    nombre: "Volcán Arenal y Aguas Termales",
    categoria: "cultural",
    precio: 95,
    duracion: "10 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80",
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    descripcion:
      "Descubre el majestuoso Volcán Arenal, el coloso de Costa Rica. Camina por senderos de lava petrificada con un guía naturalista, aprende sobre la historia eruptiva del volcán y relájate en aguas termales de origen volcánico. Un imperdible de la zona norte del país.",
    incluye: [
      "Transporte redondo con aire acondicionado",
      "Guía naturalista certificado",
      "Entrada al Parque Nacional Volcán Arenal",
      "Entrada a aguas termales",
      "Comida buffet típica",
      "Agua embotellada",
    ],
    noIncluye: [
      "Bebidas alcohólicas",
      "Propinas",
      "Recuerdos y artesanías",
    ],
    itinerario: [
      { hora: "06:00", actividad: "Salida desde La Fortuna" },
      { hora: "07:00", actividad: "Llegada al Parque Nacional" },
      { hora: "07:30", actividad: "Senderismo por coladas de lava" },
      { hora: "10:00", actividad: "Avistamiento de fauna y fotos" },
      { hora: "11:30", actividad: "Comida buffet típica" },
      { hora: "13:00", actividad: "Aguas termales y descanso" },
      { hora: "15:30", actividad: "Regreso" },
    ],
    ubicacion: "La Fortuna, Alajuela, Costa Rica",
    calificacion: 4.9,
  },
  {
    id: "3",
    slug: "playa-conchal",
    nombre: "Playa Conchal & Snorkel",
    categoria: "playa",
    precio: 75,
    duracion: "6 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
      "https://images.unsplash.com/photo-1537956965359-757c8980c5e4?w=800&q=80",
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&q=80",
    ],
    descripcion:
      "Escápate a Playa Conchal, una de las playas más hermosas de Guanacaste, famosa por su arena de conchas marinas que le da un tono blanco brillante único. Practica snorkel en aguas cristalinas, relájate en hamacas y disfruta del sol guanacasteco.",
    incluye: [
      "Transporte en lancha",
      "Equipo de snorkel (careta, aletas, snorkel)",
      "Guía naturalista",
      "Comida marina fresca",
      "Hamacas y sombrillas",
      "Bebidas (agua, jugos, cerveza)",
    ],
    noIncluye: [
      "Toallas",
      "Protector solar (se recomienda biodegradable)",
      "Propinas",
    ],
    itinerario: [
      { hora: "09:00", actividad: "Salida desde Playa Flamingo" },
      { hora: "09:30", actividad: "Llegada a Playa Conchal" },
      { hora: "09:45", actividad: "Sesión de snorkel guiada" },
      { hora: "11:30", actividad: "Tiempo libre en la playa" },
      { hora: "13:00", actividad: "Comida marina" },
      { hora: "15:00", actividad: "Regreso" },
    ],
    ubicacion: "Guanacaste, Costa Rica",
    calificacion: 4.7,
  },
  {
    id: "4",
    slug: "tour-gastronomico",
    nombre: "Sabores de Costa Rica: Tour Gastronómico",
    categoria: "gastronomico",
    precio: 69,
    duracion: "4 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    descripcion:
      "Un recorrido culinario por los sabores auténticos de Costa Rica. Desde el mercado central hasta cocinas tradicionales, probarás gallo pinto, casado, ceviche, chifrijo, patacones y los mejores postres de la abuela. Incluye clase breve de cocina con una chef costarricense.",
    incluye: [
      "Guía gastronómico experto",
      "8 paradas de degustación",
      "Clase breve de cocina tradicional",
      "Bebidas típicas (fresco de cas, pipa fría)",
      "Recetario digital",
    ],
    noIncluye: [
      "Bebidas alcohólicas",
      "Transporte al punto de encuentro",
      "Propinas",
    ],
    itinerario: [
      { hora: "09:00", actividad: "Encuentro en el Mercado Central" },
      { hora: "09:15", actividad: "Recorrido por puestos de comida típica" },
      { hora: "10:00", actividad: "Clase de cocina con chef local" },
      { hora: "11:00", actividad: "Degustación de ceviche y chifrijo" },
      { hora: "12:00", actividad: "Parada de postres y café" },
      { hora: "13:00", actividad: "Fin del tour" },
    ],
    ubicacion: "San José, Costa Rica",
    calificacion: 4.6,
  },
  {
    id: "5",
    slug: "canopy-monteverde",
    nombre: "Canopy en Monteverde: Tirolesa y Puentes Colgantes",
    categoria: "aventura",
    precio: 89,
    duracion: "6 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800&q=80",
    ],
    descripcion:
      "Vuela entre las copas del bosque nuboso de Monteverde en una red de tirolesas de última generación. Este tour combina canopy, puentes colgantes y una caminata interpretativa entre niebla, helechos gigantes y una biodiversidad única en el mundo.",
    incluye: [
      "Transporte redondo",
      "Equipo de seguridad profesional",
      "Guías certificados en canopy",
      "Caminata interpretativa por el bosque nuboso",
      "Comida tipo picnic",
      "Fotografías del recorrido",
      "Seguro de accidentes",
    ],
    noIncluye: [
      "Ropa especial (se recomienda deportiva)",
      "Zapatos cerrados",
      "Propinas",
    ],
    itinerario: [
      { hora: "07:30", actividad: "Recogida en hoteles" },
      { hora: "08:30", actividad: "Llegada al parque de aventura" },
      { hora: "08:45", actividad: "Briefing y equipo de seguridad" },
      { hora: "09:00", actividad: "Circuito de 10 tirolesas" },
      { hora: "11:00", actividad: "Puentes colgantes sobre el bosque" },
      { hora: "12:00", actividad: "Caminata interpretativa" },
      { hora: "13:00", actividad: "Comida picnic con vista al Golfo" },
      { hora: "14:00", actividad: "Regreso" },
    ],
    ubicacion: "Monteverde, Puntarenas, Costa Rica",
    calificacion: 4.8,
  },
  {
    id: "6",
    slug: "observacion-aves",
    nombre: "Observación de Aves en Monteverde",
    categoria: "naturaleza",
    precio: 55,
    duracion: "4 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    ],
    descripcion:
      "Recorre los senderos de la Reserva Biológica Bosque Nuboso Monteverde con un biólogo experto. Observa más de 80 especies: el resplandeciente quetzal, tucanes, colibríes, pavones y la legendaria rana de ojos rojos. Uno de los mejores destinos de birdwatching del planeta.",
    incluye: [
      "Guía biólogo especializado",
      "Binoculares profesionales",
      "Guía de aves impresa",
      "Transporte desde el hotel",
      "Refrigerio con café de altura",
    ],
    noIncluye: [
      "Cámara fotográfica profesional",
      "Ropa de lluvia (se recomienda traer)",
      "Propinas",
    ],
    itinerario: [
      { hora: "05:30", actividad: "Salida (mejor hora para avistamiento)" },
      { hora: "06:15", actividad: "Inicio de recorrido por senderos" },
      { hora: "06:30", actividad: "Avistamiento en el amanecer del bosque" },
      { hora: "08:30", actividad: "Descanso con café de altura" },
      { hora: "09:00", actividad: "Recorrido por el dosel del bosque" },
      { hora: "10:00", actividad: "Cierre y regreso" },
    ],
    ubicacion: "Monteverde, Puntarenas, Costa Rica",
    calificacion: 4.5,
  },
  {
    id: "7",
    slug: "ruta-colonial",
    nombre: "Ruta Colonial: Cartago y Valle de Orosi",
    categoria: "cultural",
    precio: 85,
    duracion: "8 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    ],
    descripcion:
      "Un viaje por la cuna de la historia costarricense. Recorre la Basílica de los Ángeles, las ruinas de la Parroquia Santiago Apóstol, los pintorescos pueblos del Valle de Orosi y una plantación de café de altura. Arquitectura colonial, tradición y el mejor café del mundo.",
    incluye: [
      "Transporte ejecutivo",
      "Guía historiador",
      "Entradas a museos y ruinas",
      "Degustación de café de altura",
      "Comida en restaurante típico",
      "Seguro de viajero",
    ],
    noIncluye: [
      "Compras personales",
      "Bebidas adicionales",
      "Propinas",
    ],
    itinerario: [
      { hora: "07:00", actividad: "Salida desde San José" },
      { hora: "08:00", actividad: "Basílica de los Ángeles y ruinas" },
      { hora: "09:30", actividad: "Mirador de Ujarrás y lago Cachí" },
      { hora: "11:00", actividad: "Recorrido por plantación de café" },
      { hora: "12:30", actividad: "Comida típica en Orosi" },
      { hora: "14:00", actividad: "Visita a iglesia colonial de Orosi" },
      { hora: "15:00", actividad: "Regreso" },
    ],
    ubicacion: "Cartago, Costa Rica",
    calificacion: 4.7,
  },
  {
    id: "8",
    slug: "cena-atardecer",
    nombre: "Cena al Atardecer en la Playa",
    categoria: "gastronomico",
    precio: 125,
    duracion: "3 horas",
    imagenes: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    ],
    descripcion:
      "Una experiencia gastronómica única al caer el sol sobre el Pacífico costarricense. Disfruta de un menú de cinco tiempos con productos locales y maridaje de vinos, con los pies en la arena frente a una de las playas más hermosas de Costa Rica. Música en vivo y velas para una velada inolvidable.",
    incluye: [
      "Menú de 5 tiempos con maridaje",
      "Vino espumoso de bienvenida",
      "Mesa privada en la orilla",
      "Iluminación ambiental",
      "Música en vivo",
      "Fotografía profesional (3 edits)",
    ],
    noIncluye: [
      "Transporte al punto de encuentro",
      "Bebidas adicionales fuera del maridaje",
      "Propinas",
    ],
    itinerario: [
      { hora: "17:00", actividad: "Recepción con espumoso" },
      { hora: "17:30", actividad: "Primer tiempo: Ceviche de corvina" },
      { hora: "18:00", actividad: "Segundo tiempo: Arroz con camarones" },
      { hora: "18:30", actividad: "Tercer tiempo: Sorbete de maracuyá" },
      { hora: "19:00", actividad: "Cuarto tiempo: Pescado a la parrilla" },
      { hora: "19:30", actividad: "Quinto tiempo: Tres leches" },
      { hora: "20:00", actividad: "Cierre con café de Tarrazú" },
    ],
    ubicacion: "Manuel Antonio, Puntarenas, Costa Rica",
    calificacion: 4.9,
  },
];

export const categorias = [
  { id: "todas", nombre: "Todos" },
  { id: "aventura", nombre: "Aventura" },
  { id: "cultural", nombre: "Cultural" },
  { id: "playa", nombre: "Playa" },
  { id: "gastronomico", nombre: "Gastronómico" },
  { id: "naturaleza", nombre: "Naturaleza" },
] as const;
