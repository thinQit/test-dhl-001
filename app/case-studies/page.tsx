export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import CaseStudiesList from "@/components/CaseStudiesList";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function CaseStudiesPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576896/site-images/corporate/12911251.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Results that matter: delivery performance you can measure"
            subtitle="Explore how businesses reduce exceptions, improve on-time delivery, and create better customer experiences with DHL Express."
            primaryCta={{ label: "Request a quote", href: "/contact?topic=quote" }}
            secondaryCta={{ label: "View services", href: "/services" }}
          />
        </div>
      </section>

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
    </main>
  );
}
