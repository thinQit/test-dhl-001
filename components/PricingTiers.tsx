"use client";

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface Tier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingTiersProps {
  tiers?: Tier[];
  addOns?: string[];
}

export default function PricingTiers({
  tiers = [
    { name: 'Starter', price: '$29/mo', description: 'For low-volume domestic shipping', features: ['Up to 300 shipments', 'Standard support', 'Basic tracking'] },
    { name: 'Growth', price: '$99/mo', description: 'For scaling cross-border operations', features: ['Up to 2,500 shipments', 'Priority support', 'Advanced tracking API'], highlighted: true },
    { name: 'Enterprise', price: 'Custom', description: 'For high-volume global logistics', features: ['Unlimited shipments', 'Dedicated success manager', 'Custom integrations'] },
  ],
  addOns = ['Saturday delivery', 'Insurance protection', 'White-glove customs handling'],
}: Partial<PricingTiersProps>) {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Flexible Pricing for Every Shipping Stage</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className={'rounded-xl p-6 ' + (tier.highlighted ? 'border-[#0EA5E9] ring-2 ring-[#0EA5E9]/30' : 'border-slate-200')}>
              <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-3xl font-bold text-[#1E3A5F]">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-4 space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-700"><Check className="h-4 w-4 text-[#0EA5E9]" />{feature}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full bg-[#1E3A5F] hover:bg-[#16304e]">Choose {tier.name}</Button>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="font-medium text-slate-900">Available Add-ons</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">{addOns.map((a) => <li key={a}>{a}</li>)}</ul>
          <p className="mt-3 text-xs text-slate-500">Final rates depend on destination zones, parcel dimensions, fuel index, and customs requirements.</p>
        </div>
      </div>
    </section>
  );
}
