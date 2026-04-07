import "./globals.css";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-heading" });
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSans.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logoText="DHL Express Logistics"
          links={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Tracking", href: "/tracking" },
            { label: "Pricing", href: "/pricing" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          trackHref="/tracking"
        />
        {children}
        <Footer companyName="DHL Express Logistics" />
      </body>
    </html>
  );
}
