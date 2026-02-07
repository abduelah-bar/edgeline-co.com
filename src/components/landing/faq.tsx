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
    question: 'What types of projects do you handle?',
    answer: 'We handle a wide range of projects including commercial, residential, and industrial construction, as well as interior design, fit-outs, and project management.',
  },
  {
    question: 'What is your company’s approach to project management?',
    answer: 'We take a holistic approach, managing all aspects of a project from the initial concept to the final handover. We are committed to "Turnkey" solutions to ensure high quality and client satisfaction.',
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Yes, all our projects are highly customized to meet the unique needs and requirements of our clients. We pride ourselves on creating imitation-free designs and deliverables.',
  },
  {
    question: 'What standards do you follow?',
    answer: 'We are dedicated to providing our clients with the finest quality deliverables, executed to impeccable international standards to ensure excellence and durability.',
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
              Can't find the answer you're looking for? Reach out to our customer support team.
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
