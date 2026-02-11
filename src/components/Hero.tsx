import Link from "next/link";

// Unsplash: a-black-and-white-photo-of-a-city-street-I2p-QDcGyic
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1705389668967-7a291d8cf2b9?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-start justify-center overflow-hidden bg-text px-6 py-16">
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div
        className="absolute inset-0 z-[1] bg-black/20"
        aria-hidden
      />
      <div className="relative z-10 flex max-w-[566px] flex-col items-start gap-3 text-left">
        <h1 className="font-heading text-heading-l max-w-2xl text-bg">
          Chloe Hutton & Greg Wilson are about to get married!
        </h1>
        <p className="font-body text-body-m text-bg">New York, NY</p>
        <p className="font-body text-body-m text-bg">Sat. Oct 10, 2026</p>
        <Link
          href="/rsvp"
          className="mt-2 rounded-full border border-white bg-transparent px-8 py-3 font-body text-body-m text-white hover:bg-white/10"
        >
          RSVP
        </Link>
      </div>
    </section>
  );
}
