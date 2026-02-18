'use client';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  PencilRuler, 
  HardHat, 
  KeyRound, 
  Armchair, 
  ClipboardCheck, 
  Signpost, 
  Store 
} from 'lucide-react';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';

const services = [
  {
    icon: <PencilRuler className="h-10 w-10 text-primary" />,
    title: 'Architectural & Interior Design',
    description: 'Creating innovative design concepts and executing them with high precision, while providing detailed drawings and 3D visualizations for every aspect of the project.',
  },
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: 'Construction & Fit-out Works',
    description: 'Providing professional execution services for luxury projects, with a steadfast commitment to the highest standards of quality, cost-efficiency, and strict timelines.',
  },
  {
    icon: <KeyRound className="h-10 w-10 text-primary" />,
    title: 'Turnkey Solutions',
    description: 'Providing comprehensive construction and engineering solutions covering all project stages from initial concept to final handover. This includes the execution of all electrical works, HVAC (Heating, Ventilation, and Air Conditioning) systems, plumbing, and mechanical works, ensuring the delivery of a fully operational project at the highest standards.',
  },
  {
    icon: <Armchair className="h-10 w-10 text-primary" />,
    title: 'Furniture & Woodworks',
    description: 'Manufacturing premium wood products and bespoke furniture according to international specifications, with high customization capabilities to meet all client requirements.',
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
    title: 'Project Management',
    description: 'Managing complex projects with high technical efficiency to ensure successful execution and to meet the expectations of all stakeholders.',
  },
  {
    icon: <Signpost className="h-10 w-10 text-primary" />,
    title: 'Signage & Wayfinding Systems',
    description: 'Designing, manufacturing, and installing high-impact interior and exterior signage using weather-resistant materials and cutting-edge technology.',
  },
  {
    icon: <Store className="h-10 w-10 text-primary" />,
    title: 'Exhibition Booths & Trade Shows',
    description: 'Creating immersive brand environments through the design, fabrication, and installation of unique, bespoke exhibition stands and booths.',
  },
];

export default function Services() {
  const mainServices = services.slice(0, 6);
  const lastService = services.length > 6 ? services[6] : null;

  return (
    <Section id="services" className="bg-card pt-12">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Comprehensive Contracting Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From initial design to final handover, we deliver excellence at every stage of your project.
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mainServices.map((service, index) => (
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
      {lastService && (
        <div className="mt-8 flex justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <AnimatedWrapper delay={0.6}>
              <Card className="flex flex-col items-center text-center p-6 bg-background border-none hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardHeader className="items-center p-0">
                  {lastService.icon}
                  <CardTitle className="mt-4 text-xl text-foreground">{lastService.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mt-2 text-base flex-grow text-muted-foreground">
                  {lastService.description}
                </CardDescription>
              </Card>
            </AnimatedWrapper>
          </div>
        </div>
      )}
    </Section>
  );
}