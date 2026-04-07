export const dynamic = 'force-dynamic';

import { Orb } from "reactbits";
import HeroSpotlight from "@/components/HeroSpotlight";
import FeaturesGrid from "@/components/FeaturesGrid";
import TeamGrid from "@/components/TeamGrid";
import CTABanner from "@/components/CTABanner";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
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
              "url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771576866/site-images/corporate/12944978.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <HeroSpotlight
            title="Built for international speed and business reliability"
            subtitle="Our mission is to help businesses ship globally with predictable delivery and clear visibility—supported by customs expertise and responsive operations."
            primaryCta={{ label: "Meet the team", href: "/about#team" }}
            secondaryCta={{ label: "Contact us", href: "/contact" }}
          />
        </div>
      </section>

      <ScrollReveal>
        <div className="py-20 md:py-24 animate-fade-in-up">
          <FeaturesGrid
            badge="How We Work"
            headline="A simple, repeatable shipping support process"
            subheadline="From lane discovery to ongoing optimization."
            features={[
              { icon: "Map", title: "Understand your lanes", description: "Review origins, destinations, shipment profile, and target delivery windows." },
              { icon: "Clock3", title: "Recommend service levels", description: "Map the right time-definite options for your delivery promises." },
              { icon: "Radar", title: "Set up visibility workflows", description: "Enable tracking events, alerts, and proof-of-delivery workflows." },
              { icon: "TrendingUp", title: "Improve continuously", description: "Monitor exceptions and refine documentation and packaging over time." },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="team" className="bg-muted animate-fade-in-up">
          <TeamGrid />
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
