import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage = "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1600&q=80",
}: HeroProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-earth-900/80 via-earth-900/60 to-transparent" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg text-earth-200 sm:text-xl">{subtitle}</p>
        {ctaText && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-block rounded-full bg-brand-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-600 hover:shadow-xl active:scale-95"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
