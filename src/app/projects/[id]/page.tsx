import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
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
  // Strip HTML tags for metadata
  const plainTextDescription = description.replace(/<[^>]+>/g, ' ').replace(/\s\s+/g, ' ').trim();

  return {
    title: `${project.description}`,
    description: plainTextDescription.substring(0, 160),
    openGraph: {
        images: project.gallery ? [project.imageUrl, ...project.gallery.map(g => g.imageUrl)] : [project.imageUrl],
        title: project.description,
        description: plainTextDescription.substring(0, 160),
    },
    twitter: {
      title: project.description,
      description: plainTextDescription.substring(0, 160),
      images: project.gallery ? [project.imageUrl, ...project.gallery.map(g => g.imageUrl)] : [project.imageUrl],
    }
  };
}

export default function ProjectDetailsPage({ params }: Props) {
  const id = params.id;
  const project = PlaceHolderImages.find(img => img.id === id);

  if (!project) {
    notFound();
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
