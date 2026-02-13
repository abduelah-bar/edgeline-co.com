'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedWrapper } from './animated-wrapper';
import AnimatedNumber from './animated-number';
import * as React from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

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
                <p className="text-primary mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Projects Completed</p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.6}>
              <div className="text-center">
                <p className="text-5xl lg:text-6xl font-bold text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <AnimatedNumber to={4253} format={(v) => Math.floor(v).toLocaleString('en-US')} />
                </p>
                <p className="text-primary mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Happy Clients</p>
              </div>
            </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
