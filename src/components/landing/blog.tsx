import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPostsData = [
  { 
    id: 'blog-1', 
    title: 'The Future of Sustainable Infrastructure', 
    description: 'Exploring the innovative materials and methods shaping the green cities of tomorrow.' 
  },
  { 
    id: 'blog-2', 
    title: 'AI in Process Engineering: A Revolution in Efficiency', 
    description: 'How artificial intelligence is optimizing complex industrial processes for unprecedented results.' 
  },
  { 
    id: 'blog-3', 
    title: 'Seismic Retrofitting: Protecting Our Cities', 
    description: 'A deep dive into the engineering marvels that help buildings withstand earthquakes.' 
  },
];

const blogPosts = blogPostsData.map(post => ({
  ...post,
  ...PlaceHolderImages.find(img => img.id === post.id)
}));

export default function Blog() {
  return (
    <Section id="blog">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">From Our Blog</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Insights and innovations from our team of experts.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => post.imageUrl && (
          <Card key={post.id} className="overflow-hidden group flex flex-col">
            <CardContent className="p-0">
              <div className="relative aspect-video">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={post.imageHint}
                />
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardDescription className="px-6 flex-grow">
              {post.description}
            </CardDescription>
            <div className="p-6 mt-4">
              <Link href="#" className="font-semibold text-primary inline-flex items-center gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
