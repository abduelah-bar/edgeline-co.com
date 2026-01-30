'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import AnimatedNumber from './animated-number';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const cardImage = PlaceHolderImages.find(img => img.id === 'residential-house-card');

  return (
    <section className="relative h-screen min-h-[800px] flex items-center text-white overflow-hidden">
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
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/944/833/original/blueprint-technical-drawing-background-vector.jpg')",
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative z-10 container grid md:grid-cols-2 gap-8 items-center">
        <AnimatedWrapper>
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-foreground/70 uppercase">Test-Hero-Subtitle</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 !leading-tight">
              Test H1 Main text
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Test-Hero-Description
            </p>
            <Button size="lg" className="mt-8 rounded-none">
              Test-Button
            </Button>
          </div>
        </AnimatedWrapper>
        <div className="relative flex flex-col items-start md:items-end justify-end h-full pt-20">
          <div className="text-left md:text-right space-y-8">
            <AnimatedWrapper delay={0.2}>
              <div>
                <p className="text-5xl lg:text-6xl font-bold text-primary">
                  <AnimatedNumber to={128} />+
                </p>
                <p className="text-muted-foreground mt-1">Test-Stat-1</p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.4}>
              <div>
                <p className="text-5xl lg:text-6xl font-bold text-primary">
                  <AnimatedNumber to={4253} format={(v) => Math.floor(v).toLocaleString('de-DE')} />
                </p>
                <p className="text-muted-foreground mt-1">Test-Stat-2</p>
              </div>
            </AnimatedWrapper>
          </div>
        </div>
      </div>
      
      {cardImage && (
        <AnimatedWrapper className="hidden md:block absolute bottom-12 right-16 z-20" delay={0.6}>
          <div className="bg-card/80 backdrop-blur-sm p-6 max-w-xs shadow-lg border border-border/20">
              <div className="flex gap-4">
                  <div>
                      <h3 className="font-bold text-lg">Abdul-SectionAlpha-Card1</h3>
                      <p className="text-primary font-bold text-2xl mt-2">78 000 M²</p>
                      <p className="text-muted-foreground text-sm">Test-Card-Description</p>
                      <a href="#" className="flex items-center gap-2 text-sm font-semibold text-primary mt-4">
                          Test-Details <ArrowRight className="w-4 h-4" />
                      </a>
                  </div>
                  <Image 
                      src={cardImage.imageUrl}
                      alt={cardImage.description}
                      width={100}
                      height={100}
                      className="object-cover"
                      data-ai-hint={cardImage.imageHint}
                  />
              </div>
          </div>
        </AnimatedWrapper>
      )}
    </section>
  );
}
