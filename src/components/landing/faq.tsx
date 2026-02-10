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
    question: 't',
    answer: 't',
  },
  {
    question: 'tsdfsdfsdf',
    answer: 't',
  },
  {
    question: 'Dt',
    answer: 't',
  },
  {
    question: 't',
    answer: 'Wt',
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
          head-line-2
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
