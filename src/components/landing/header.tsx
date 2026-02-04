'use client';
import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Building } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'Test-About' },
  { href: '#services', label: 'Test-Services' },
  { href: '#projects', label: 'Test-Projects' },
  { href: '#team', label: 'Test-Team' },
  { href: '#faq', label: 'Test-FAQ' },
  { href: '#blog', label: 'Test-Blog' },
  { href: '#contacts', label: 'Test-Contacts' },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        const headerOffset = 80; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center gap-3">
          <Building className="h-7 w-7 text-primary" />
          <span className="font-bold sm:inline-block text-xl">
            ELC COMPANY
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium ml-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="transition-colors hover:text-primary text-foreground/80 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
          <div className="container py-4">
            <nav className="grid gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium transition-colors hover:text-primary cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
