'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building, Wrench, HardHat, Scaling } from 'lucide-react';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';

const services = [
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: 'Civil Engineering',
    description: 'Creating the backbone of modern society with robust infrastructure and sustainable design.',
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: 'Process Engineering',
    description: 'Optimizing industrial processes for efficiency, safety, and environmental compliance.',
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Structural Engineering',
    description: 'Designing resilient and innovative structures that stand the test of time and nature.',
  },
  {
    icon: <Scaling className="h-10 w-10 text-primary" />,
    title: 'Project Management',
    description: 'Guiding projects from concept to completion with expert planning and execution.',
  },
];

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Delivering excellence and innovation in every project.
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <AnimatedWrapper key={index} delay={index * 0.1}>
            <Card className="flex flex-col items-center text-center p-6 bg-gray-50 border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
              <CardHeader className="items-center p-0">
                {service.icon}
                <CardTitle className="mt-4 text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base flex-grow text-gray-600">
                {service.description}
              </CardDescription>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
