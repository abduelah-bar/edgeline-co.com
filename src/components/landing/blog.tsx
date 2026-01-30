'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { AnimatedWrapper } from './animated-wrapper';

const blogPostsData = [
  { 
    id: 'blog-1', 
    title: 'Test-Blog-Post-1-Title', 
    description: 'Test-Blog-Post-1-Desc' 
  },
  { 
    id: 'blog-2', 
    title: 'Test-Blog-Post-2-Title', 
    description: 'Test-Blog-Post-2-Desc' 
  },
  { 
    id: 'blog-3', 
    title: 'Test-Blog-Post-3-Title', 
    description: 'Test-Blog-Post-3-Desc'
  },
];

const blogPosts = blogPostsData.map(post => ({
  ...post,
  ...PlaceHolderImages.find(img => img.id === post.id)
}));

export default function Blog() {
  return (
    <Section id="blog">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Test-Blog-Title</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Test-Blog-Subtitle
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => post.imageUrl && (
          <AnimatedWrapper key={post.id} delay={index * 0.1}>
            <Card className="overflow-hidden group flex flex-col h-full">
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
                  Test-Read-More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
