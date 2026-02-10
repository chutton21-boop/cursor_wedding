import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-text px-6 py-16">
      {/* Background image can be added here via next/image; using bg-text as fallback */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="font-heading text-heading-l max-w-2xl text-bg">
          Chloe Hutton & Greg Wilson are about to get married!
        </h1>
        <p className="font-body text-body-m text-bg">New York, NY</p>
        <p className="font-body text-body-m text-bg">Sat. Oct 10, 2026</p>
        <Link
          href="/rsvp"
          className="mt-2 rounded-full border border-border bg-accent px-8 py-3 font-body text-body-m text-bg hover:bg-accentHover"
        >
          RSVP
        </Link>
      </div>
    </section>
  );
}
