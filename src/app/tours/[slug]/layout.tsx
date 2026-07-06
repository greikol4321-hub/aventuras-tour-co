import type { Metadata } from "next";
import { tours } from "@/data/tours";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return { title: "Tour no encontrado" };
  }

  return {
    title: `${tour.nombre} — Aventuras Tour&Co`,
    description: tour.descripcion.slice(0, 160),
    openGraph: {
      title: tour.nombre,
      description: tour.descripcion.slice(0, 160),
      images: tour.imagenes[0] ? [tour.imagenes[0]] : [],
    },
  };
}

export default function TourLayout({ children }: { children: React.ReactNode }) {
  return children;
}
