import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Building, Wrench, HardHat, Scaling } from 'lucide-react';
import { Section } from './section';

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
    <Section id="services" className="bg-card">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Delivering excellence and innovation in every project.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 border-transparent hover:border-primary/50 hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader className="items-center p-0">
              {service.icon}
              <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 text-base">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </Section>
  );
}
