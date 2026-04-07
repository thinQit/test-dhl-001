"use client";

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  companyName?: string;
  className?: string;
}

export default function Footer({
  companyName = 'DHL Express Logistics',
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('border-t border-border bg-muted', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{companyName}</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Global express delivery, freight, and supply chain solutions for growing businesses.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-foreground">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/services#express-worldwide">Express Worldwide</Link>
            </li>
            <li>
              <Link href="/services#ecommerce">eCommerce Shipping</Link>
            </li>
            <li>
              <Link href="/services#customs">Customs & Compliance</Link>
            </li>
            <li>
              <Link href="/services#pickup">Pickup & Drop-off</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground">Business</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-foreground">Support</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link href="/tracking">Track Shipment</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/resources">Shipping guidelines</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground md:px-6">
        © {new Date().getFullYear()} {companyName}. All rights reserved. Terms · Privacy · Cookies
      </div>
    </footer>
  );
}
