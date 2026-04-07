"use client";

import { Card, CardContent } from '@/components/ui/card';
import { BarChart3, Briefcase, Globe, Lightbulb, ShieldCheck, Sparkles, ShoppingCart, MapPin, Map, TrendingUp } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { ShoppingCart, MapPin, Map, TrendingUp, 
  Sparkles,
  Globe,
  ShieldCheck,
  BarChart3,
  Briefcase,
  Lightbulb,
};

export default function FeaturesGrid({
  badge = 'Services',
  headline = 'Strategic Solutions for Modern Businesses',
  subheadline = 'From planning to execution, we help organizations scale with confidence and clarity.',
  features = [],
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up mx-auto max-w-2xl text-center">
          {badge && <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">{badge}</span>}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function(feature, index) {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <Card key={index} className="card-hover border-0 bg-background shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
