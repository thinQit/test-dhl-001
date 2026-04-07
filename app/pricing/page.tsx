export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import PricingTiers from "@/components/PricingTiers";
import FAQAccordion from "@/components/FAQAccordion";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function PricingPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576909/site-images/corporate/1181638.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Transparent pricing for business shipping"
            subtitle="Estimate costs quickly, then request a tailored quote based on your lanes, weights, and weekly volume."
            primaryCta={{ label: "Request a quote", href: "/contact?topic=quote" }}
            secondaryCta={{ label: "Track a shipment", href: "/tracking" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <PricingTiers />
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="bg-muted animate-fade-in-up">
          <FAQAccordion />
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
