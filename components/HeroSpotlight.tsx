"use client";
import { Spotlight } from "@/components/ui/backgrounds/spotlight";
import { TypewriterEffect } from "@/components/ui/text/typewriter-effect";
import { Button } from "@/components/ui/button";

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  headline = 'Accelerate Growth with Strategic Business Consulting',
  subheadline = 'We partner with leadership teams to streamline operations, improve performance, and scale with confidence.',
  primaryCta = { label: 'Book a Consultation', href: '#' },
  secondaryCta = { label: 'View Case Studies', href: '#' },
}: Partial<HeroSpotlightProps>) {
  var words = headline.split(" ").map(function(word) { return { text: word }; });
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center overflow-hidden rounded-md bg-background antialiased">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary/10" />
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 md:pt-0 text-center animate-fade-in-up">
        <TypewriterEffect
          words={words}
          className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-foreground"
          cursorClassName="bg-accent"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          {subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg transition-all duration-200 hover:scale-105" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-border text-foreground hover:bg-accent transition-all duration-200 hover:scale-105" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
