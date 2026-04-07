'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
}

export default function FAQAccordion({
  items = [
    { question: 'How are shipping prices calculated?', answer: 'Pricing depends on weight, dimensions, destination zone, speed, and optional add-ons.' },
    { question: 'Can I ship internationally with customs support?', answer: 'Yes. DHL provides customs brokerage and document validation for global shipments.' },
    { question: 'Do you provide real-time tracking APIs?', answer: 'Yes. Growth and Enterprise plans include API access for shipment visibility.' },
  ],
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Card key={item.question} className="overflow-hidden border border-slate-200">
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between p-4 text-left">
                  <span className="font-medium text-slate-900">{item.question}</span>
                  <ChevronDown className={'h-5 w-5 text-slate-500 transition-transform ' + (isOpen ? 'rotate-180' : '')} />
                </button>
                {isOpen && <div className="border-t border-slate-200 px-4 py-3 text-sm text-slate-600">{item.answer}</div>}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
