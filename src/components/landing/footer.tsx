import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Building } from 'lucide-react';
import { Section } from './section';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-card border-t border-border/50">
      <Section className="py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Building className="h-8 w-8 text-primary" />
              <span className="font-bold text-lg">ELC COMPANY</span>
            </Link>
            <p className="text-muted-foreground">
              Construction, Design & Execution. Your vision, our mission. We deliver excellence from concept to completion.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link href="#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
                <li><Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
             <div>
              <h3 className="font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>test@example.com</li>
                <li>+966 0501175465</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ELC COMPANY. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} aria-label={link.name}>
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
}
