export type Testimonial = {
  nombre: string;
  texto: string;
  estrellas: number;
};

export const testimonios: Testimonial[] = [
  { nombre: "María G.", texto: "El tour al Volcán Arenal fue lo más increíble que he visto. Pura vida total.", estrellas: 5 },
  { nombre: "Carlos R.", texto: "Increíble atención al detalle. Se nota que aman lo que hacen.", estrellas: 5 },
  { nombre: "Ana L.", texto: "El tour gastronómico es imperdible. Probé comidas que jamás imaginé.", estrellas: 5 },
  { nombre: "Pedro M.", texto: "Viajé sola y me sentí segura todo el tiempo. Guías muy profesionales.", estrellas: 5 },
  { nombre: "Laura F.", texto: "Las playas de Guanacaste son un paraíso. Volvería mil veces.", estrellas: 4 },
];
