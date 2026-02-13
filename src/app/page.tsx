'use client';
import About from "@/components/landing/about";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Projects from "@/components/landing/projects";
import Services from "@/components/landing/services";
import OurProcess from "@/components/landing/our-process";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <OurProcess />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
