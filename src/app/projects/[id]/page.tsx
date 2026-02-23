import { PlaceHolderImages } from '@/lib/placeholder-images';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
import type { Metadata } from 'next';

type Props = {
  params: { id: string }
}

const stripHtml = (html: string) => {
  // A simple and safe way to strip HTML on the server
  return html.replace(/<[^>]*>?/gm, '');
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const project = PlaceHolderImages.find(p => p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project could not be found.',
    };
  }

  // Use the stripped long description for metadata.
  const metaDescription = stripHtml(project.longDescription || project.description);

  const images = project.gallery ? [project.imageUrl, ...project.gallery.map(g => g.imageUrl)] : [project.imageUrl];
  // Filter out any empty or invalid image URLs
  const validImages = images.filter(img => img && typeof img === 'string');

  return {
    title: `${project.description}`,
    description: metaDescription.substring(0, 160),
    openGraph: {
        images: validImages.length > 0 ? validImages : undefined,
        title: project.description,
        description: metaDescription.substring(0, 160),
    },
    twitter: {
      card: 'summary_large_image',
      title: project.description,
      description: metaDescription.substring(0, 160),
      images: validImages.length > 0 ? validImages : undefined,
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
