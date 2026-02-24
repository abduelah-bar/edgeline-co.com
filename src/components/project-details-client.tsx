'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import type { ImagePlaceholder } from '@/lib/placeholder-images';


export default function ProjectDetailsClient({ project }: { project: ImagePlaceholder }) {
  const galleryImages = [
      { imageUrl: project.imageUrl, imageHint: project.imageHint },
      ...(project.gallery || [])
  ];

  return (
    <Section>
        <AnimatedWrapper>
            <Link href="/projects">
                <Button variant="outline">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Projects
                </Button>
            </Link>
        </AnimatedWrapper>

        <article className="mt-12">
            <AnimatedWrapper>
                <h1 className="text-4xl md:text-5xl font-bold text-center">{project.description}</h1>
            </AnimatedWrapper>

            <AnimatedWrapper delay={0.2}>
                 <div
                    className="max-w-4xl mx-auto mt-8 space-y-4 text-muted-foreground text-base md:text-lg px-4"
                    dangerouslySetInnerHTML={{ __html: project.longDescription || project.description }}
                />
            </AnimatedWrapper>

            {galleryImages.length > 0 && (
                <div className="max-w-5xl mx-auto mt-12">
                     <h3 className="text-2xl font-semibold mb-8 text-center">Project Gallery</h3>
                    <div className="flex flex-col gap-8">
                        {galleryImages.map((image, index) => (
                            <AnimatedWrapper key={index} delay={0.3 + index * 0.1}>
                                <div
                                    className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl"
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={`Project image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                        sizes="(max-width: 1024px) 100vw, 1024px"
                                        priority={index < 2}
                                        loading={index < 2 ? 'eager' : 'lazy'}
                                    />
                                </div>
                            </AnimatedWrapper>
                        ))}
                    </div>
                </div>
            )}

        </article>
    </Section>
  );
}
