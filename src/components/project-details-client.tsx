'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';
import type { ImagePlaceholder, ProjectSection } from '@/lib/placeholder-images';
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";

export default function ProjectDetailsClient({ project }: { project: ImagePlaceholder }) {
  const [selectedSection, setSelectedSection] = useState<ProjectSection | null>(
    project.sections && project.sections.length > 0 ? project.sections[0] : null
  );
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const originalGalleryImages = [
      { imageUrl: project.imageUrl, imageHint: project.imageHint },
      ...(project.gallery || [])
  ].filter(image => image.imageUrl);

  const hasSections = project.sections && project.sections.length > 0;

  const activeImages = hasSections
    ? selectedSection?.images || []
    : originalGalleryImages;

  const slides = activeImages.map(image => ({ src: image.imageUrl }));

  const openLightbox = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

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

        {hasSections && (
          <div className="max-w-5xl mx-auto mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-8">Project Sections</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.sections!.map((section, index) => (
                <AnimatedWrapper key={section.title} delay={0.3 + index * 0.1}>
                  <Button
                    variant={selectedSection?.title === section.title ? 'default' : 'outline'}
                    onClick={() => setSelectedSection(section)}
                  >
                    {section.title}
                  </Button>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-5xl mx-auto mt-12">
            {activeImages.length > 0 && (
              <>
                 {hasSections && selectedSection && (
                    <h3 className="text-2xl font-semibold mb-8 text-center">
                    {selectedSection.title}
                    </h3>
                )}
                {!hasSections && (
                    <h3 className="text-2xl font-semibold mb-8 text-center">Project Gallery</h3>
                )}
                <div className="flex flex-col gap-8">
                  {activeImages.map((image, idx) => (
                    <AnimatedWrapper key={image.imageUrl} delay={0.1 + idx * 0.1}>
                      <div 
                        className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer"
                        onClick={() => openLightbox(idx)}
                        >
                        <Image
                          src={image.imageUrl}
                          alt={`Image for ${hasSections ? selectedSection?.title : 'Project Gallery'} ${idx + 1}`}
                          width={1024}
                          height={768}
                          className="w-full h-auto"
                          data-ai-hint={image.imageHint}
                          sizes="100vw"
                          priority={idx < 2}
                          loading={idx < 2 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </AnimatedWrapper>
                  ))}
                </div>
              </>
            )
          }
        </div>
      </article>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </Section>
  );
}
