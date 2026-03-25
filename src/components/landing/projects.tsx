'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
const projectIds = ['test', 'project-al-arid-villa-2', 'project-3', 'project-4'];
const projects = PlaceHolderImages.filter(img => projectIds.includes(img.id));

export default function Projects() {
  return (
    <Section id="projects">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Our Featured Turnkey Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">
          A glimpse into our portfolio of successful projects.
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
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
                            <span className="font-semibold">View Project</span>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedWrapper>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/projects">
            <Button size="lg">
                View More Projects
                <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
        </Link>
      </div>
    </Section>
  );
}
