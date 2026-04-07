"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Building2, Phone, MapPin } from 'lucide-react';

interface AboutSectionProps {
  imageSrc?: string;
  className?: string;
}

export default function AboutSection({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/1251842.jpg',
  className = '',
}: Partial<AboutSectionProps>) {
  return (
    <section id="about" className={cn('bg-slate-50 py-20 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-[#0EA5E9]">About DHL Business</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Mission-driven logistics for modern global commerce</h2>
          <p className="mt-4 text-slate-600">We help enterprises and mid-market teams simplify shipping operations with intelligent routing, transparent pricing, and dependable last-mile execution.</p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <Card className="p-4"><p className="text-2xl font-semibold text-[#1E3A5F]">220+</p><p className="text-xs text-slate-500">Countries</p></Card>
            <Card className="p-4"><p className="text-2xl font-semibold text-[#1E3A5F]">99.2%</p><p className="text-xs text-slate-500">On-time</p></Card>
            <Card className="p-4"><p className="text-2xl font-semibold text-[#1E3A5F]">24/7</p><p className="text-xs text-slate-500">Support</p></Card>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2"><Building2 className="h-4 w-4 text-[#0EA5E9]" /> DHL Business Center, New York, NY</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#0EA5E9]" /> Regional hubs across EMEA, APAC, and Americas</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#0EA5E9]" /> +1 (800) 225-5345</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Image src={imageSrc} alt="DHL operations team" width={1200} height={800} unoptimized className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}
