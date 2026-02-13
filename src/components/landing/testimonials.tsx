'use client';

import { Star } from 'lucide-react';
import { AnimatedWrapper } from './animated-wrapper';
import { Section } from './section';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';

const testimonials = [
    {
        name: 'Ahmad Abdullah',
        role: 'CEO, Tech Solutions',
        comment: 'Working with ELC was a game-changer for our new headquarters. Their professionalism, attention to detail, and commitment to deadlines were exceptional. The final result exceeded our expectations!',
        rating: 5,
    },
    {
        name: 'Fatima Al-Jamil',
        role: 'Founder, Creative Hub',
        comment: 'ELC brought our vision for a modern, collaborative workspace to life. Their design team is incredibly talented, and the construction crew executed flawlessly. We couldn\'t be happier.',
        rating: 5,
    },
    {
        name: 'Youssef El-Masri',
        role: 'Restaurant Owner',
        comment: 'From the initial concept to the final fit-out, ELC handled our restaurant project with utmost care. Their ability to blend aesthetics with functionality is truly remarkable. Our customers love the new space!',
        rating: 5,
    },
     {
        name: 'Layla Haddad',
        role: 'Homeowner',
        comment: 'We entrusted ELC with our dream home, and they delivered beyond our wildest dreams. The craftsmanship is impeccable, and the team was a pleasure to work with throughout the entire process.',
        rating: 4,
    },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-card">
      <div className="flex flex-col gap-12">
        <AnimatedWrapper>
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Hear what our satisfied clients have to say about their experience with ELC Company.
                </p>
            </div>
        </AnimatedWrapper>
        
        <AnimatedWrapper delay={0.2}>
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <Card className="bg-background h-full flex flex-col justify-between">
                                    <CardContent className="p-6 flex flex-col gap-6">
                                        <div className="flex">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/50'}`} />
                                            ))}
                                        </div>
                                        <p className="text-muted-foreground italic">"{testimonial.comment}"</p>
                                    </CardContent>
                                    <div className="flex items-center gap-4 p-6 pt-0">
                                        <Avatar>
                                            <AvatarFallback>
                                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className='flex flex-col'>
                                            <p className="font-bold">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden lg:flex"/>
                <CarouselNext className="hidden lg:flex"/>
            </Carousel>
        </AnimatedWrapper>
      </div>
    </Section>
  );
}
