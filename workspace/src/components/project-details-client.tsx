'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import { cn } from '@/lib/utils';
import type { ImagePlaceholder } from '@/lib/placeholder-images';


export default function ProjectDetailsClient({ project }: { project: ImagePlaceholder }) {
  const [selectedImage, setSelectedImage] = useState(project.imageUrl);

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
                <div className="relative aspect-video w-full max-w-5xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
                    <Image
                    src={selectedImage}
                    alt={project.description}
                    fill
                    className="object-cover transition-all duration-300"
                    data-ai-hint={project.imageHint}
                    key={selectedImage}
                    sizes='(max-width: 1024px) 100vw, 1280px'
                    />
                </div>
            </AnimatedWrapper>

            {galleryImages.length > 1 && (
                <AnimatedWrapper delay={0.3}>
                    <div className="max-w-5xl mx-auto mt-8">
                         <h3 className="text-xl font-semibold mb-4 text-center">Project Gallery</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
                            {galleryImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "relative aspect-video w-32 md:w-40 flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-4 transition-all",
                                        selectedImage === image.imageUrl ? "border-primary" : "border-transparent hover:border-primary/50"
                                    )}
                                    onClick={() => setSelectedImage(image.imageUrl)}
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={`Project image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                        sizes="(max-width: 768px) 128px, 160px"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedWrapper>
            )}


            <AnimatedWrapper delay={0.4}>
                <div className="max-w-4xl mx-auto mt-8 space-y-4 text-muted-foreground text-lg">
                    <p>
                        {project.longDescription || project.description}
                  </p>
                </div>
            </AnimatedWrapper>
        </article>
    </Section>
  );
}