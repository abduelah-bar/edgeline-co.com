'use client';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { notFound, useParams } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
import { useEffect, useState } from 'react';

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const [project, setProject] = useState<ImagePlaceholder | undefined>(undefined);

  useEffect(() => {
    const foundProject = PlaceHolderImages.find(img => img.id === id);
    if (foundProject) {
      setProject(foundProject);

      const description = foundProject.longDescription || foundProject.description;
      document.title = `${foundProject.description}`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description.substring(0, 160));
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${foundProject.description}`);
      }

      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description.substring(0, 160));
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', foundProject.imageUrl);
      }
    } else {
      notFound();
    }
  }, [id]);

  if (!project) {
    // You can render a loading state here if you want
    return null;
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