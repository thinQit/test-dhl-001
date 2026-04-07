"use client";

import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

interface TestimonialsGridProps {
  items?: Testimonial[];
}

export default function TestimonialsGrid({
  items = [
    { quote: 'DHL helped us reduce late shipments by 38% in our EU lanes within one quarter.', name: 'Rachel Bennett', title: 'VP Operations', company: 'Northline Retail' },
    { quote: 'Customs hold times dropped dramatically after we switched to DHL brokerage support.', name: 'Arjun Mehta', title: 'Supply Chain Lead', company: 'MedNova Labs' },
    { quote: 'Their tracking visibility gave our customer support team a measurable service lift.', name: 'Clara Nilsen', title: 'Director of CX', company: 'Urban Circuit' },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section id="testimonials" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Trusted by Global Shipping Teams</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-6 w-6 text-[#0EA5E9]" />
              <p className="mt-4 text-slate-700">“{item.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-slate-900">{item.name}</p>
              <p className="text-sm text-slate-500">{item.title}, {item.company}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
