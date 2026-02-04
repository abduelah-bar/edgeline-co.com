'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building, Wrench, HardHat, Scaling } from 'lucide-react';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';

const services = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Test-Service-1-Title',
    description: 'Test-Service-1-Desc',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Test-Service-2-Title',
    description: 'Test-Service-2-Desc',
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Test-Service-3-Title',
    description: 'Test-Service-3-Desc',
  },
  {
    icon: <Scaling className="h-10 w-10 text-primary" />,
    title: 'Test-Service-4-Title',
    description: 'Test-Service-4-Desc',
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-card pt-12">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Test-Services-Title</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Test-Services-Subtitle
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <AnimatedWrapper key={index} delay={index * 0.1}>
            <Card className="flex flex-col items-center text-center p-6 bg-background border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
              <CardHeader className="items-center p-0">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow text-muted-foreground">
                {service.description}
              </CardDescription>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
