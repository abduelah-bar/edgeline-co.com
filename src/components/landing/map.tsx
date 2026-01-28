import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { Globe, MapPin, Flag } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';

const mapImage = PlaceHolderImages.find(img => img.id === 'map-background');

const stats = [
    { icon: <Globe className="w-8 h-8 text-primary" />, value: '6', label: 'Continents' },
    { icon: <Flag className="w-8 h-8 text-primary" />, value: '20+', label: 'Countries' },
    { icon: <MapPin className="w-8 h-8 text-primary" />, value: '75+', label: 'Major Cities' },
]

// Example project locations (in percentages for responsiveness)
const locations = [
  { top: '40%', left: '18%' }, // North America
  { top: '60%', left: '28%' }, // South America
  { top: '35%', left: '50%' }, // Europe
  { top: '45%', left: '70%' }, // Asia
  { top: '75%', left: '55%' }, // Africa
  { top: '80%', left: '80%' }, // Australia
];

export default function Map() {
  return (
    <Section id="map" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedWrapper>
          <div className="relative aspect-[2/1] w-full rounded-lg overflow-hidden">
            {mapImage && (
              <Image
                src={mapImage.imageUrl}
                alt={mapImage.description}
                fill
                className="object-cover"
                data-ai-hint={mapImage.imageHint}
              />
            )}
            {locations.map((loc, index) => (
              <div key={index} className="absolute" style={{ top: loc.top, left: loc.left }}>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary/80"></span>
                </span>
              </div>
            ))}
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
          <div className="flex flex-col gap-8">
              <div>
                   <h2 className="text-3xl md:text-4xl font-bold">A Global Footprint</h2>
                   <p className="mt-4 text-lg text-muted-foreground">
                      Our expertise knows no borders. We deliver world-class engineering solutions to clients across the globe.
                   </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                  {stats.map(stat => (
                      <div key={stat.label} className="text-center p-4 bg-background/50 rounded-lg">
                          {stat.icon}
                          <p className="text-3xl font-bold mt-2">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </div>
                  ))}
              </div>
          </div>
        </AnimatedWrapper>
      </div>
    </Section>
  );
}
