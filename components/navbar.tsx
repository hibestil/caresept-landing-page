'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border/40 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground focus:outline-none md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="text-primary text-2xl font-bold">
              Caresept
            </Link>
          </div>
          <nav className="hidden space-x-4 md:flex">
            <Link href="#features" className="text-foreground/80 hover:text-foreground">
              Features
            </Link>
            <Link href="#testimonials" className="text-foreground/80 hover:text-foreground">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-foreground/80 hover:text-foreground">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-black/90 text-white">Get Started</Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="h-4/5 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#features"
              className="text-foreground/80 hover:text-foreground block px-3 py-2"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground block px-3 py-2"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-foreground/80 hover:text-foreground block px-3 py-2"
            >
              Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
