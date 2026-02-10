'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const project = PlaceHolderImages.find(img => img.id === id);

  if (!project) {
    notFound();
  }

  const galleryImages = [
      { imageUrl: project.imageUrl, imageHint: project.imageHint },
      ...(project.gallery || [])
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Section>
            <AnimatedWrapper>
                <Link href="/projects">
                    <Button variant="outline">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Projects
                    </Button>
                </Link>
            </AnimatedWrapper>

            <article className="mt-12 max-w-5xl mx-auto">
                <AnimatedWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground">{project.description}</h1>
                </AnimatedWrapper>

                <AnimatedWrapper delay={0.2}>
                    <div className="max-w-4xl mx-auto mt-8 space-y-4 text-muted-foreground text-lg text-center">
                        <p>
                            {project.longDescription}
                        </p>
                    </div>
                </AnimatedWrapper>
            </article>

            {galleryImages.length > 0 && (
                <div className="mt-16 space-y-8">
                    {galleryImages.map((image, index) => (
                        <AnimatedWrapper key={index} delay={0.3 + index * 0.1}>
                            <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src={image.imageUrl}
                                    alt={`Project image ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                    sizes="(max-width: 1400px) 100vw, 1400px"
                                />
                            </div>
                        </AnimatedWrapper>
                    ))}
                </div>
            )}
        </Section>
      </main>
      <Footer />
    </div>
  );
}
