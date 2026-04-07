export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import TeamGrid from "@/components/TeamGrid";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CaseStudiesList from "@/components/CaseStudiesList";
import CTABanner from "@/components/CTABanner";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[80vh] overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 z-0">
          <Orb color="#1E3A5F" />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576879/site-images/corporate/1181690.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="International shipping that moves at the speed of your business"
            subtitle="DHL Express helps you ship documents and parcels worldwide with time-definite delivery, proactive tracking, and dedicated support for growing teams."
            primaryCta={{ label: "Track a shipment", href: "/tracking" }}
            secondaryCta={{ label: "Get a quote", href: "/pricing" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <ServicesGrid />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-muted animate-fade-in-up">
          <AboutSection />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TeamGrid />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-muted animate-fade-in-up">
          <TestimonialsGrid />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CaseStudiesList />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-primary text-primary-foreground animate-fade-in-up">
          <CTABanner />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-muted animate-fade-in-up">
          <ContactSection />
        </div>
      </ScrollReveal>
    </main>
  );
}
