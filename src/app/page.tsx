import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
}
