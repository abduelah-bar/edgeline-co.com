import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Section } from './section';
import { Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { AnimatedWrapper } from './animated-wrapper';

const teamMembersData = [
  { id: 'team-member-1', name: 'Dr. Evelyn Reed', title: 'CEO & Chief Engineer' },
  { id: 'team-member-2', name: 'Marcus Chen', title: 'Head of Structural Design' },
  { id: 'team-member-3', name: 'Alina Petrova', title: 'Director of Process Engineering' },
  { id: 'team-member-4', name: 'David Lee', title: 'VP of Project Management' },
];

const teamMembers = teamMembersData.map(member => ({
  ...member,
  ...PlaceHolderImages.find(img => img.id === member.id)
}));

export default function Team() {
  return (
    <Section id="team">
      <AnimatedWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The brilliant minds turning vision into reality.
          </p>
        </div>
      </AnimatedWrapper>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => member.imageUrl && (
          <AnimatedWrapper key={member.id} delay={index * 0.1}>
            <Card className="text-center border-transparent bg-transparent shadow-none">
              <CardContent className="p-0">
                <div className="relative aspect-square w-full rounded-lg overflow-hidden mx-auto">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    data-ai-hint={member.imageHint}
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary">{member.title}</CardDescription>
                </CardHeader>
                <div className="flex justify-center gap-4 mt-2">
                  <Link href="#" aria-label={`${member.name} on LinkedIn`}>
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                  <Link href="#" aria-label={`${member.name} on Twitter`}>
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
