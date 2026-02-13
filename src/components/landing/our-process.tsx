'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  ClipboardList,
  PencilRuler, 
  HardHat, 
  KeyRound, 
} from 'lucide-react';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';

const processSteps = [
  {
    icon: <ClipboardList className="h-10 w-10 text-primary" />,
    title: '1. Consultation & Planning',
    description: 'We start by understanding your vision, requirements, and budget to create a detailed project plan.',
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-primary" />,
    title: '2. Design & Engineering',
    description: 'Our expert architects and engineers craft innovative and functional designs tailored to your needs.',
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: '3. Construction & Execution',
    description: 'With meticulous project management, we bring the design to life, ensuring quality and timelines.',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
    title: '4. Handover & Support',
    description: 'We deliver the completed project and provide ongoing support to ensure your satisfaction.',
  },
];

export default function OurProcess() {
  return (
    <Section id="process" className="bg-card">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Process</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A streamlined approach to bring your vision to reality.
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <AnimatedWrapper key={index} delay={index * 0.1}>
            <Card className="flex flex-col items-center text-center p-6 bg-background border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
              <CardHeader className="items-center p-0">
                {step.icon}
                <CardTitle className="mt-4 text-xl text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow text-muted-foreground">
                {step.description}
              </CardDescription>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
