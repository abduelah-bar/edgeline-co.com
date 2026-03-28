

import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import projectData from '@/lib/project-summaries.json';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ProjectDetailsClient from '@/components/project-details-client';
import type { Metadata } from 'next';

// Statically generate routes at build time, ensuring they exist in the main data source
export async function generateStaticParams() {
  const allProjectIds = new Set(PlaceHolderImages.map(p => p.id));
  const validSummaries = projectData.projectSummaries.filter(summary => allProjectIds.has(summary.id));
  
  return validSummaries.map(project => ({
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

  const descriptionText = (project.longDescription || project.description)
    .replace(/<[^>]*>?/gm, '')
    .substring(0, 300);

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.edgeline-co.com/projects/${project.id}`,
    },
    headline: project.description,
    description: descriptionText,
    image: project.imageUrl,
    author: {
      '@type': 'Organization',
      name: 'ELC Company (Edge Line)',
      url: 'https://www.edgeline-co.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ELC Company (Edge Line)',
      logo: {
        '@type': 'ImageObject',
        url: 'https://i.imgur.com/6Y7gfdU.png',
      },
    },
    // Using a generic date as project-specific dates are not available
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0], // Current date
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
        />
        <ProjectDetailsClient project={project} />
      </main>
      <Footer />
    </div>
  );
}
