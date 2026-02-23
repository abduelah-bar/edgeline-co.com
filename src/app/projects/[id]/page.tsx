'use client';

import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
import { useEffect, useState }from 'react';
import type { Metadata } from 'next';

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [project, setProject] = useState<ImagePlaceholder | undefined>(undefined);
  const [metadata, setMetadata] = useState<Metadata>({});

  useEffect(() => {
    if (id) {
      const foundProject = PlaceHolderImages.find(img => img.id === id);
      if (foundProject) {
        setProject(foundProject);
        
        const descriptionText = (foundProject.longDescription || foundProject.description)
          .replace(/<[^>]*>?/gm, '')
          .substring(0, 160);

        const newMeta: Metadata = {
          title: `${foundProject.description} | ELC Company (Edge Line)`,
          description: descriptionText,
          openGraph: {
            title: `${foundProject.description} | ELC Company (Edge Line)`,
            description: descriptionText,
            images: [
              {
                url: foundProject.imageUrl,
                width: 1200,
                height: 630,
                alt: foundProject.description,
              },
            ],
          },
        };

        setMetadata(newMeta);
        document.title = newMeta.title as string;
        
        const metaDescriptionTag = document.querySelector('meta[name="description"]');
        if (metaDescriptionTag) {
          metaDescriptionTag.setAttribute('content', descriptionText);
        }

      } else {
        notFound();
      }
    }
  }, [id]);

  if (!project) {
    return null; // Or a loading spinner
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ProjectDetailsClient project={project} />
      </main>
      <Footer />
    </div>
  );
}
