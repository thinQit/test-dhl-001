export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import ContactSection from "@/components/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576885/site-images/corporate/15465916.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Talk to DHL Express Business"
            subtitle="Quotes, pickups, tracking help, and customs questions—our team is here to help."
            primaryCta={{ label: "Send a message", href: "#contact-form" }}
            secondaryCta={{ label: "Call +1 (305) 555-0148", href: "tel:+13055550148" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div id="contact-form" className="bg-muted animate-fade-in-up">
          <ContactSection />
        </div>
      </ScrollReveal>
    </main>
  );
}
