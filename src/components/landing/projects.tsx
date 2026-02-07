'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projectIds = ['project-1', 'project-2', 'project-3', 'project-4'];
const projects = PlaceHolderImages.filter(img => projectIds.includes(img.id));

export default function Projects() {
  return (
    <Section id="projects">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Test-Projects-Title</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Test-Projects-Subtitle
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedWrapper key={project.id} delay={index * 0.1}>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white">{project.description}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/projects">
            <Button size="lg">
                شاهد المزيد
                <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
        </Link>
      </div>
    </Section>
  );
}
