import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import Projects from '@/components/landing/projects';
import Map from '@/components/landing/map';
import Team from '@/components/landing/team';
import Faq from '@/components/landing/faq';
import Blog from '@/components/landing/blog';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Projects />
        <Map />
        <Team />
        <Faq />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
