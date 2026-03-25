
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import projectData from '@/lib/project-summaries.json';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
import type { Metadata } from 'next';

// Statically generate routes at build time
export async function generateStaticParams() {
  return projectData.projectSummaries.map(project => ({
    id: project.id,
  }));
}

async function getProject(id: string): Promise<ImagePlaceholder | undefined> {
  return PlaceHolderImages.find(img => img.id === id);
}

export async function generateMetadata({ params }: { params: { id:string } }): Promise<Metadata> {
  const project = await getProject(params.id);

  if (!project) {
    return {};
  }

  const descriptionText = (project.longDescription || project.description)
    .replace(/<[^>]*>?/gm, '')
    .substring(0, 160);

  return {
    title: `${project.description} | ELC Company (Edge Line)`,
    description: descriptionText,
    openGraph: {
      title: `${project.description} | ELC Company (Edge Line)`,
      description: descriptionText,
      images: [
        {
          url: project.imageUrl,
          width: 1200,
          height: 630,
          alt: project.description,
        },
      ],
    },
  };
}

export default async function ProjectDetailsPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);

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
