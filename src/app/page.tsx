export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
          We&apos;re getting married
        </h1>
        <p className="mt-6 text-lg text-neutral-600">
          Date & location
        </p>
        <a
          href="/details"
          className="mt-10 inline-block rounded-full border border-black px-8 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
        >
          See details
        </a>
      </section>
    </main>
  );
}
