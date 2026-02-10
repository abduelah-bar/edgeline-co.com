'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Maximize } from 'lucide-react';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
                    <Dialog>
                        <DialogTrigger asChild>
                            <div className="relative group aspect-video w-full max-w-5xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg cursor-pointer">
                                <Image
                                    src={selectedImage || project.imageUrl}
                                    alt={project.description}
                                    fill
                                    className="object-cover transition-all duration-300"
                                    data-ai-hint={project.imageHint}
                                    key={selectedImage}
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <Maximize className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-7xl w-full p-2 bg-transparent border-none shadow-none">
                             <DialogTitle className="sr-only">{project.description}</DialogTitle>
                             <div className="relative aspect-video">
                                <Image
                                    src={selectedImage || project.imageUrl}
                                    alt={project.description}
                                    fill
                                    className="object-contain"
                                    data-ai-hint={project.imageHint}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>
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
                            {project.longDescription}
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
