'use client';

import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type ProjectDetailsPageProps = {
    params: {
        id: string;
    }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = PlaceHolderImages.find(img => img.id === params.id);
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
                        <p>This is a sample description for the project. This text can be replaced with the actual project details. We focus on delivering high-quality results that exceed client expectations.</p>
                        <p>Our team of experts worked diligently to ensure every detail was perfect. The project was completed on time and within budget, showcasing our commitment to excellence and efficiency.</p>
                        <p>From initial concept to final execution, we managed every stage of the process. This holistic approach allows us to deliver turnkey solutions that are both innovative and sustainable, providing lasting value to our clients.</p>
                    </div>
                </AnimatedWrapper>
            </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
