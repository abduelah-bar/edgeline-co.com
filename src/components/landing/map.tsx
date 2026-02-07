'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';
import { useState } from 'react';
import AnimatedNumber from './animated-number';
import { Button } from '../ui/button';

const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');

const locations = [
  { top: '40%', left: '18%', details: 'North America Office' },
  { top: '60%', left: '28%', details: 'South America Office' },
  { top: '35%', left: '50%', details: 'Europe Office' },
  { top: '45%', left: '70%', details: 'Asia Office' },
  { top: '75%', left: '55%', details: 'Africa Office' },
  { top: '80%', left: '80%', details: 'Australia Office' },
];

type Location = typeof locations[number];

export default function Map() {
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);

  const handleLocationClick = (location: Location) => {
    if (activeLocation && activeLocation.top === location.top) {
      setActiveLocation(null);
    } else {
      setActiveLocation(location);
    }
  };

  return (
    <Section id="locations" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedWrapper>
          <div className="relative aspect-square md:aspect-[4/3] w-full">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-contain"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            {locations.map((loc, index) => (
              <div
                key={index}
                className="absolute"
                style={{ top: loc.top, left: loc.left }}
              >
                <button
                  onClick={() => handleLocationClick(loc)}
                  className="relative flex h-4 w-4 transform -translate-x-1/2 -translate-y-1/2"
                  aria-label={`Location ${index + 1}`}
                >
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${activeLocation === loc ? 'bg-accent' : 'bg-primary'} opacity-75`}></span>
                  <span className={`relative inline-flex rounded-full h-4 w-4 ${activeLocation === loc ? 'bg-accent' : 'bg-primary'}`}></span>
                </button>
                {activeLocation === loc && (
                   <div className="absolute top-full left-1/2 mt-3 w-48 -translate-x-1/2 bg-accent text-accent-foreground p-4 rounded-md shadow-lg z-10">
                      <p className="text-sm">{loc.details}</p>
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-accent"></div>
                   </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
          <div className="flex flex-col gap-8">
              <div>
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-0.5 bg-primary" />
                     <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">OUR REACH</p>
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Global <span className="text-accent">Presence</span></h2>
                   <p className="mt-4 text-base text-muted-foreground">
                      We have a presence in multiple locations to serve our clients better across the globe.
                   </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                  <div className="text-left">
                      <p className="text-5xl lg:text-6xl font-bold text-accent">
                        <AnimatedNumber to={200} />+
                      </p>
                      <p className="text-muted-foreground mt-1 font-medium">Locations Worldwide</p>
                  </div>
                  <div className="text-left">
                      <p className="text-5xl lg:text-6xl font-bold text-accent">
                        <AnimatedNumber to={99} />%
                      </p>
                      <p className="text-muted-foreground mt-1 font-medium">Client Satisfaction</p>
                  </div>
              </div>
              <Button size="lg" className="mt-4 rounded-none self-start">
                Learn More About Us
              </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </Section>
  );
}
