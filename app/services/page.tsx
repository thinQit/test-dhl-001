export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicesPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576907/site-images/corporate/1251842.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Choose the right service level for every shipment"
            subtitle="Compare delivery speed, handling options, and visibility features—then ship with confidence."
            primaryCta={{ label: "Get a quote", href: "/pricing" }}
            secondaryCta={{ label: "Track a shipment", href: "/tracking" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div className="py-20 md:py-24 animate-fade-in-up">
          <FeaturesGrid
            badge="Core Services"
            headline="Built for international documents and parcels"
            subheadline="Fast global delivery, customs confidence, and pickup flexibility."
            features={[
              { icon: "Plane", title: "Express Worldwide", description: "Time-definite shipping with proactive status updates." },
              { icon: "ShoppingCart", title: "eCommerce Shipping", description: "Cross-border support with tracking notifications and returns guidance." },
              { icon: "ShieldCheck", title: "Customs & Compliance", description: "Documentation best practices to reduce border delays." },
              { icon: "MapPin", title: "Pickup & Drop-off", description: "Flexible scheduling and convenient handoff options." },
            ]}
          />
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
