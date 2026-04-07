'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PackageCheck, Menu, X } from 'lucide-react';
import * as React from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';

interface NavbarProps {
  logoText?: string;
  links?: { label: string; href: string }[];
  trackHref?: string;
  className?: string;
}

export default function Navbar({
  logoText = 'DHL Express',
  links = [
    { label: 'Services', href: '#services' },
    { label: 'Tracking', href: '#tracking' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  trackHref = '#tracking',
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-foreground">
          <PackageCheck className="h-6 w-6 text-accent" />
          <span className="text-lg font-semibold">{logoText}</span>
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-accent" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <div className="flex items-center justify-between px-6 py-4 border-b border-border">
                  <span className="flex items-center gap-2 text-lg font-semibold text-foreground">
                    <PackageCheck className="h-6 w-6 text-accent" />
                    {logoText}
                  </span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-1 px-6 pt-3">
                  {links.map((link) => (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.href}
                        className="block rounded-lg px-2 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="px-6 pt-4 pb-6">
                  <SheetClose asChild>
                    <Button className="w-full" variant="default" asChild>
                      <Link href={trackHref}>Track</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Desktop CTA button */}
          <div className="hidden md:block">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href={trackHref}>Track</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
