import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Section } from '@/components/landing/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { AnimatedWrapper } from '@/components/landing/animated-wrapper';

type ProjectDetailsPageProps = {
    params: {
        id: string;
    }
}

export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = PlaceHolderImages.find(img => img.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
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
                    <div className="relative aspect-video w-full max-w-4xl mx-auto mt-8 rounded-lg overflow-hidden">
                        <Image
                        src={project.imageUrl}
                        alt={project.description}
                        fill
                        className="object-cover"
                        data-ai-hint={project.imageHint}
                        />
                    </div>
                </AnimatedWrapper>

                <AnimatedWrapper delay={0.4}>
                    <div className="max-w-4xl mx-auto mt-8 space-y-4 text-muted-foreground text-lg">
                        <p>This is a sample description for the project. This text can be replaced with the actual project details. We focus on delivering high-quality results that exceed client expectations.</p>
                        <p>Our team of experts worked diligently to ensure every detail was perfect. The project was completed on time and within budget, showcasing our commitment to excellence and efficiency.</p>
                        <p>From initial concept to final execution, we managed every stage of the process. This holistic approach allows us to deliver turnkey solutions that are both innovative and sustainable, providing lasting value to our clients.</p>
                    </div>
                </AnimatedWrapper>
            </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
