import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-4xl font-bold text-brand-600">
        404
      </div>
      <h1 className="text-3xl font-bold text-earth-900">Página no encontrada</h1>
      <p className="max-w-md text-earth-500">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
