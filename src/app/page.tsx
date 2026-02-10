import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ScheduleSection from "@/components/ScheduleSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="Schedule" />
      <ScheduleSection />
      <Footer />
    </main>
  );
}
