export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import TrackingForm from "@/components/TrackingForm";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function TrackingPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576885/site-images/corporate/1181651.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Track your shipment in seconds"
            subtitle="Enter your waybill number to see the latest scan events, delivery status, and proof of delivery when available."
            primaryCta={{ label: "Track now", href: "#tracking-form" }}
            secondaryCta={{ label: "Need help?", href: "/contact?topic=tracking" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div id="tracking-form" className="py-20 md:py-24 animate-fade-in-up">
          <TrackingForm />
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
