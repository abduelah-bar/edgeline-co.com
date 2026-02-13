import Link from 'next/link';
import { Instagram, Building } from 'lucide-react';
import { Section } from './section';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.371c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.289.173-1.414z" />
    </svg>
);  

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/elc_contracting?igsh=cmQyNTBzNGFyZzUw' },
  { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/966501175465' },
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
            <div className="text-muted-foreground">
              <p className="font-semibold tracking-wider text-foreground">CONSTRUCTION,DESIGN & ESECUTION</p>
              <p className="mt-2">let's build your dream</p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#services" className="text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link href="#projects" className="text-muted-foreground hover:text-primary">Projects</Link></li>
                <li><Link href="#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
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
                <li>King Khalid Branch Road, Umm Al-Hamam Al-Gharbi, Riyadh 12329, Saudi Arabia</li>
                <li>info@edgeline-co.com</li>
                <li>+966 50 117 5465</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} ELC COMPANY. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by <Link href="#" className="font-semibold text-primary hover:underline">BAZ DEVELOPMENT</Link>
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
}
