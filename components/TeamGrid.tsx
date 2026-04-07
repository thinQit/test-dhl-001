"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  focus: string[];
  photo: string;
}

interface TeamGridProps {
  members?: TeamMember[];
}

export default function TeamGrid({
  members = [
    { name: 'Ava Schneider', role: 'Regional Operations Director', bio: 'Leads multimodal performance and SLA governance across key lanes.', focus: ['Network planning', 'Carrier performance'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg' },
    { name: 'Daniel Kim', role: 'Head of Customs & Compliance', bio: 'Builds compliant cross-border frameworks for regulated categories.', focus: ['Customs optimization', 'Risk controls'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg' },
    { name: 'Maya Rossi', role: 'Enterprise Solutions Manager', bio: 'Designs scalable logistics programs for B2B and eCommerce brands.', focus: ['Solution architecture', 'Account growth'], photo: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg' },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section id="team" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Meet Our Logistics Leadership Team</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card key={member.name} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <Image src={member.photo} alt={member.name} width={1200} height={800} unoptimized className="h-56 w-full rounded-lg object-cover" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm font-medium text-[#0EA5E9]">{member.role}</p>
              <p className="mt-2 text-sm text-slate-600">{member.bio}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.focus.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">{item}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
