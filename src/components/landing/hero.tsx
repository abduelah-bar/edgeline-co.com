'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import AnimatedNumber from './animated-number';
import * as React from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const cardImage = PlaceHolderImages.find(img => img.id === 'residential-house-card');
  const logoImage = PlaceHolderImages.find(img => img.id === 'hero-logo');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const headerOffset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center text-center pt-20 text-white overflow-hidden">
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

      <div className="relative z-10 container flex flex-col items-center">
        <AnimatedWrapper>
          {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={400}
              height={400}
              className="object-contain"
              priority
              data-ai-hint={logoImage.imageHint}
            />
          )}
        </AnimatedWrapper>

        <AnimatedWrapper delay={0.2}>
           <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>
            <Button size="lg" className="mt-8 rounded-none">
              About Us
            </Button>
          </a>
        </AnimatedWrapper>
        
        <div className="mt-12 grid grid-cols-2 gap-8 w-full max-w-md">
            <AnimatedWrapper delay={0.4}>
              <div className="text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary">
                  <AnimatedNumber to={128} />+
                </p>
                <p className="text-muted-foreground mt-1">Test-Stat-1</p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.6}>
              <div className="text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary">
                  <AnimatedNumber to={4253} format={(v) => Math.floor(v).toLocaleString('de-DE')} />
                </p>
                <p className="text-muted-foreground mt-1">Test-Stat-2</p>
              </div>
            </AnimatedWrapper>
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
