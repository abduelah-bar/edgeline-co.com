'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import AnimatedNumber from './animated-number';
import * as React from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');
  const cardImage = PlaceHolderImages.find(img => img.id === 'residential-house-card');

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
    <section className="relative h-[90vh] min-h-[800px] flex items-end pb-24 justify-center text-center text-white overflow-hidden">
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

      <div className="relative z-10 container flex flex-col items-center">
        
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
                <p className="text-5xl lg:text-6xl font-bold text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <AnimatedNumber to={128} />+
                </p>
                <p className="text-muted-foreground mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Projects Completed</p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.6}>
              <div className="text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <AnimatedNumber to={4253} format={(v) => Math.floor(v).toLocaleString('en-US')} />
                </p>
                <p className="text-muted-foreground mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Happy Clients</p>
              </div>
            </AnimatedWrapper>
        </div>
      </div>
      
      {cardImage && (
        <AnimatedWrapper className="hidden md:block absolute bottom-12 right-16 z-20" delay={0.8}>
          <div className="bg-card/80 backdrop-blur-sm p-6 max-w-xs shadow-lg border border-border/20">
              <div className="flex gap-4">
                  <div>
                      <h3 className="font-bold text-lg">Residential Complex</h3>
                      <p className="text-primary font-bold text-2xl mt-2">78 000 M²</p>
                      <p className="text-muted-foreground text-sm">Completed residential project.</p>
                      <Link href="#" className="flex items-center gap-2 text-sm font-semibold text-primary mt-4">
                          View Details <ArrowRight className="w-4 h-4" />
                      </Link>
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
