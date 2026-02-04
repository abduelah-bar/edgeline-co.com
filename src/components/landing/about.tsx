'use client';
import Image from 'next/image';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-story');

  return (
    <Section id="about" className="bg-background pb-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedWrapper>
          <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={0.2}>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">OUR STORY: FROM THE BEGINNING</h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-base">
              <p>
                ELC Company was established to provide unique, unmatched, and highly sought-after construction, interior design, fit-out, and project management services, in addition to our professional specialization in the fabrication of exhibition booths and signage. We are dedicated to providing our clients with the finest quality deliverables, executed to impeccable international standards.
              </p>
              <p>
                ELC Company’s holistic approach enables us to effectively design, construct, oversee, and manage high-end projects, with a full commitment to providing "Turnkey" solutions from the initial concept and idea through to the final handover. This ensures that each project is meticulously executed, highly customized, and imitation-free.
              </p>
              <p>
                Through our flexibility and high responsiveness, ELC Company’s elite services allow us to be partners in success and lifestyle companions for our clients, rather than just traditional contractors. We constantly strive to enhance our customers' experiences through the application of superior standards, the development of creative solutions, and consistent excellence in design.
              </p>
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </Section>
  );
}
