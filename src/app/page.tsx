import About from "@/components/landing/about";
import Blog from "@/components/landing/blog";
import Faq from "@/components/landing/faq";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import OurProcess from "@/components/landing/our-process";
import Projects from "@/components/landing/projects";
import Services from "@/components/landing/services";
import Team from "@/components/landing/team";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <OurProcess />
        <Projects />
        <Testimonials />
        <Team />
        <Blog />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
