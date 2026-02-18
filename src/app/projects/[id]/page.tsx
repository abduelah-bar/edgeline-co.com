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
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const project = PlaceHolderImages.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project could not be found.',
    };
  }

  const description = project.longDescription || project.description;

  return {
    title: `${project.description}`,
    description: description.substring(0, 160),
    openGraph: {
        images: [project.imageUrl],
    },
  };
}

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const project = PlaceHolderImages.find(img => img.id === id);
  const [selectedImage, setSelectedImage] = useState(project?.imageUrl);

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

            <article className="mt-12">
                <AnimatedWrapper>
                    <h1 className="text-4xl md:text-5xl font-bold text-center">{project.description}</h1>
                </AnimatedWrapper>

                <AnimatedWrapper delay={0.2}>
                    <div className="relative aspect-video w-full max-w-5xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
                        <Image
                        src={selectedImage || project.imageUrl}
                        alt={project.description}
                        fill
                        className="object-cover transition-all duration-300"
                        data-ai-hint={project.imageHint}
                        key={selectedImage}
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
      </main>
      <Footer />
    </div>
  );
}
