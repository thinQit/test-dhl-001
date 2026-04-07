"use client";

import { Card } from '@/components/ui/card';

interface Metric {
  label: string;
  value: string;
}

interface CaseStudy {
  title: string;
  challenge: string;
  solution: string;
  results: string;
  metrics?: Metric[];
}

interface CaseStudiesListProps {
  studies?: CaseStudy[];
}

export default function CaseStudiesList({
  studies = [
    {
      title: 'Electronics Brand Expansion to 14 Markets',
      challenge: 'Inconsistent transit times and costly expedited surcharges.',
      solution: 'Rebuilt lane strategy with priority air for top SKUs and consolidated freight for base inventory.',
      results: 'Improved delivery consistency and reduced premium shipping spend.',
      metrics: [{ label: 'Transit variance', value: '-31%' }, { label: 'Shipping cost', value: '-18%' }],
    },
    {
      title: 'Healthcare Supplier Cold Chain Compliance',
      challenge: 'Temperature-sensitive parcels faced clearance delays.',
      solution: 'Introduced pre-clearance documentation and customs exception routing.',
      results: 'Protected SLA performance and reduced spoilage risk.',
      metrics: [{ label: 'Customs delay rate', value: '-42%' }, { label: 'On-time critical deliveries', value: '99.4%' }],
    },
  ],
}: Partial<CaseStudiesListProps>) {
  return (
    <section id="case-studies" className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl space-y-6 px-4 md:px-6">
        <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Case Studies</h2>
        {studies.map((study) => (
          <Card key={study.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">{study.title}</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div><p className="text-xs uppercase text-slate-500">Challenge</p><p className="text-sm text-slate-700">{study.challenge}</p></div>
              <div><p className="text-xs uppercase text-slate-500">Solution</p><p className="text-sm text-slate-700">{study.solution}</p></div>
              <div><p className="text-xs uppercase text-slate-500">Results</p><p className="text-sm text-slate-700">{study.results}</p></div>
            </div>
            {study.metrics && study.metrics.length > 0 && (
              <div className="mt-5 overflow-hidden rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <tbody>
                    {study.metrics.map((metric) => (
                      <tr key={metric.label} className="border-b last:border-b-0">
                        <td className="px-4 py-2 text-slate-600">{metric.label}</td>
                        <td className="px-4 py-2 text-right font-semibold text-[#1E3A5F]">{metric.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
