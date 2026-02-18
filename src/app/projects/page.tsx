import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore a collection of our best work in construction and design. See how ELC Company delivers excellence in Saudi Arabia.',
};

export default function ProjectsPage() {
  const allProjects = PlaceHolderImages.filter(img => img.id.startsWith('project-'));

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Section>
            <div className="flex justify-between items-center">
                <AnimatedWrapper>
                    <div className="text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
                        <p className="mt-4 text-xl text-muted-foreground">
                            A collection of our best work in construction and design.
                        </p>
                    </div>
                </AnimatedWrapper>
                <AnimatedWrapper>
                    <Link href="/">
                        <Button variant="outline">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </AnimatedWrapper>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {allProjects.map((project, index) => (
                <AnimatedWrapper key={project.id} delay={index * 0.1}>
                    <Link href={`/projects/${project.id}`}>
                        <Card className="overflow-hidden group">
                        <CardContent className="p-0">
                            <div className="relative aspect-video">
                            <Image
                                src={project.imageUrl}
                                alt={project.description}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={project.imageHint}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:bg-black/50 transition-all duration-300" />
                            <div className="absolute bottom-0 left-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                                <h3 className="text-xl font-bold text-white">{project.description}</h3>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="text-white flex flex-col items-center gap-2">
                                    <Eye className="w-8 h-8" />
                                    <span className="font-semibold">View Details</span>
                                </div>
                            </div>
                            </div>
                        </CardContent>
                        </Card>
                    </Link>
                </AnimatedWrapper>
                ))}
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
