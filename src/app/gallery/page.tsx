import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col bg-bg font-body text-text">
      <Hero />
      <Nav activeLabel="Gallery" />
      <Gallery />
      <Footer />
    </main>
  );
}
