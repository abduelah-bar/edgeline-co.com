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
    question: 'Test-FAQ-Q1',
    answer: 'Test-FAQ-A1',
  },
  {
    question: 'Test-FAQ-Q2',
    answer: 'Test-FAQ-A2',
  },
  {
    question: 'Test-FAQ-Q3',
    answer: 'Test-FAQ-A3',
  },
  {
    question: 'Test-FAQ-Q4',
    answer: 'Test-FAQ-A4',
  },
];

export default function Faq() {
  return (
    <Section id="faq" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12">
        <AnimatedWrapper>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Test-FAQ-Title</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Test-FAQ-Subtitle
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
