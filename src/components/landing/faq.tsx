import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Section } from './section';

const faqs = [
  {
    question: 'What types of engineering services do you offer?',
    answer: 'We provide a comprehensive range of services including Civil, Structural, and Process Engineering, as well as full-scope Project Management. Our expertise covers everything from initial concept design to final project delivery.',
  },
  {
    question: 'Which industries does EnVision Engineering serve?',
    answer: 'Our diverse portfolio includes projects in infrastructure, energy, manufacturing, commercial real estate, and public works. We adapt our solutions to meet the unique challenges of each sector.',
  },
  {
    question: 'How do you ensure project quality and safety?',
    answer: 'Quality and safety are our top priorities. We adhere to stringent international standards, employ rigorous quality control processes, and foster a culture of safety-first on all our project sites.',
  },
  {
    question: 'Can you handle projects outside of your primary locations?',
    answer: 'Absolutely. While we have major hubs globally, our team is equipped for remote and international project execution. We have successfully completed projects on 6 continents.',
  },
];

export default function Faq() {
  return (
    <Section id="faq" className="bg-card">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find quick answers to common inquiries about our services and process.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
