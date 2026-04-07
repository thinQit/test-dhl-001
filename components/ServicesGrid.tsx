'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight, Globe, Plane, Boxes, ShieldCheck, Truck, type LucideIcon } from 'lucide-react';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  href: string;
  highlight: string;
}

interface ServicesGridProps {
  title?: string;
  services?: ServiceItem[];
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Plane,
  Boxes,
  ShieldCheck,
  Truck,
};

export default function ServicesGrid({
  title = 'Logistics Services Built for Speed and Reliability',
  services = [
    { title: 'International Express', description: 'Door-to-door cross-border shipping with guaranteed transit windows.', icon: 'Plane', href: '#tracking', highlight: '220+ countries' },
    { title: 'Road & Domestic Delivery', description: 'Time-definite domestic and regional transport for B2B and D2C.', icon: 'Truck', href: '#pricing', highlight: 'Same-day options' },
    { title: 'Freight Solutions', description: 'Air, ocean, and multimodal freight coordination with proactive updates.', icon: 'Boxes', href: '#case-studies', highlight: 'Flexible capacity' },
    { title: 'Customs Brokerage', description: 'Clearance support, compliance checks, and tariff optimization.', icon: 'ShieldCheck', href: '#contact', highlight: 'Reduced delays' },
    { title: 'Global Fulfillment', description: 'Warehousing, pick-pack, returns, and omnichannel inventory flow.', icon: 'Globe', href: '#services', highlight: 'Scalable operations' },
  ],
  className = '',
}: Partial<ServicesGridProps>) {
  return (
    <section id="services" className={cn('py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="max-w-3xl text-3xl font-semibold text-[#1E3A5F] md:text-4xl">{title}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Globe;
            return (
              <Card key={service.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <Icon className="h-8 w-8 text-[#0EA5E9]" />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[#1E3A5F]">{service.highlight}</p>
                <Link href={service.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#1E3A5F]">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
