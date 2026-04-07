"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

interface CTABannerProps {
  heading?: string;
  bullets?: string[];
  primaryHref?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  heading = 'Ready to optimize your DHL shipping operations?',
  bullets = ['Fast global delivery options', 'Real-time shipment visibility', 'Dedicated enterprise support'],
  primaryHref = '#contact',
  secondaryHref = '#pricing',
}: Partial<CTABannerProps>) {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-[#1E3A5F] p-8 text-white md:p-12">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-8 border-[#0EA5E9]/40" />
          <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">{heading}</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {bullets.map((bullet) => (
              <p key={bullet} className="flex items-center gap-2 text-sm text-slate-100"><CheckCircle2 className="h-4 w-4 text-[#0EA5E9]" /> {bullet}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#0EA5E9] text-white hover:bg-[#0284c7]"><Link href={primaryHref}>Talk to Sales</Link></Button>
            <Button asChild variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-[#1E3A5F]"><Link href={secondaryHref}>View Pricing</Link></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
