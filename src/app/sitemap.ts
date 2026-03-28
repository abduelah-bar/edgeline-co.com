import { MetadataRoute } from 'next';
import projectData from '@/lib/project-summaries.json';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://www.edgeline-co.com';

  const allProjectIds = new Set(PlaceHolderImages.map(p => p.id));
  const validSummaries = projectData.projectSummaries.filter(summary => allProjectIds.has(summary.id));

  // Get all project routes from the summaries file
  const projectRoutes = validSummaries.map(project => ({
    url: `${siteUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Define static routes
  const staticRoutes = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  return [...staticRoutes, ...projectRoutes];
}
