import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="Travel" />
      <section className="border-t border-border bg-bg px-8 py-12">
        <div className="mx-auto max-w-[960px]">
          <p className="font-body text-base leading-[22px] text-text">
            We&apos;re working on gathering some recommendations for our
            out-of-towner guests. Stay tuned!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
