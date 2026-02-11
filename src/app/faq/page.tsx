import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="FAQ" />
      <FaqSection />
      <Footer />
    </main>
  );
}
