import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import WhatToDoSection from "@/components/WhatToDoSection";

export const metadata = {
  title: "What to do | Wedding",
  description: "Our favorite places to try while you're in town.",
};

export default function WhatToDoPage() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="What to do" />
      <WhatToDoSection />
      <Footer />
    </main>
  );
}
