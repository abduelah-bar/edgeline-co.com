import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import HeroStats from '@/components/landing/hero-stats';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container flex flex-col items-center gap-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter !leading-tight">
            Pioneering the Future of <span className="text-primary">Engineering</span> Solutions
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
            EnVision Engineering delivers innovative and sustainable solutions across a spectrum of industries, turning complex challenges into landmarks of progress.
          </p>
        </div>

        <div className="max-w-md w-full">
            <HeroStats />
        </div>

        <Button size="lg" className="mt-4">
          Explore Our Work
        </Button>
      </div>
    </section>
  );
}
