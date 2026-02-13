'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from './section';
import { AnimatedWrapper } from './animated-wrapper';

const faqs = [
  {
    question: 'What types of services does ELC Company provide?',
    answer: 'We offer a comprehensive range of services including Architectural & Interior Design, Construction & Fit-out, Turnkey Solutions, Custom Furniture & Woodworks, Project Management, Signage & Wayfinding, and Exhibition Booth fabrication. Our goal is to provide a complete, \'Turnkey\' solution from concept to handover.',
  },
  {
    question: 'What is your approach to project management?',
    answer: 'We manage complex projects with high technical efficiency to ensure successful execution that meets the expectations of all stakeholders. Our holistic approach allows us to design, construct, oversee, and manage high-end projects effectively.',
  },
  {
    question: 'What sets ELC Company apart from other contractors?',
    answer: 'We strive to be partners in success and lifestyle companions for our clients, not just traditional contractors. We are dedicated to providing unique, imitation-free, and highly customized projects executed to impeccable international standards, focusing on creative solutions and consistent excellence.',
  },
   {
    question: 'Where are you located?',
    answer: 'While our headquarters are based in Saudi Arabia, we manage and execute projects across various locations. Please contact us to discuss your project\'s specific needs.',
  },
];

export default function Faq() {
  return (
    <Section id="faq" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedWrapper>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about our services and process.
            </p>
          </div>
        </AnimatedWrapper>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AnimatedWrapper key={index} delay={index * 0.1}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimatedWrapper>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
