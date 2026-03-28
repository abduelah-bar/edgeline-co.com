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
    <section className="relative h-[90vh] min-h-[800px] flex items-center pb-12 justify-center text-center text-white overflow-hidden">
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

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container flex flex-col items-center">
        <AnimatedWrapper>
            <p
                className="sr-only"
            >
                ELC Company: Premier Construction & Design in Saudi Arabia
            </p>
            <p 
                className="sr-only"
            >
                Your trusted partner for turnkey solutions, from architectural vision to flawless execution. Let's build your dream.
            </p>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay={0.2}>
           <a href="#contacts" onClick={(e) => handleNavClick(e, '#contacts')}>
            <Button size="lg" className="mt-24">
              Contact Us
            </Button>
          </a>
        </AnimatedWrapper>
        
        <div className="mt-16 grid grid-cols-2 gap-8 w-full max-w-lg">
            <AnimatedWrapper delay={0.4}>
              <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-5xl lg:text-6xl font-bold text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <AnimatedNumber to={77} />+
                </p>
                <p className="text-white mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Projects Completed</p>
              </div>
            </AnimatedWrapper>
            <AnimatedWrapper delay={0.6}>
              <div className="text-center bg-black/30 backdrop-blur-sm p-6 rounded-lg">
                <p className="text-5xl lg:text-6xl font-bold text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}>
                  <AnimatedNumber to={327} format={(v) => Math.floor(v).toLocaleString('en-US')} />
                </p>
                <p className="text-white mt-1 font-semibold" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>Happy Clients</p>
              </div>
            </AnimatedWrapper>
        </div>
      </div>
    </section>
  );
}
