import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MenuSection />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
