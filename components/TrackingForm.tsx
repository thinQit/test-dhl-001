'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { type SingleTrackingResult } from '@/lib/validators';

interface TrackingFormProps {
  apiEndpoint?: string;
}

interface TrackResponse {
  success: boolean;
  results?: SingleTrackingResult[];
  error?: string;
  [key: string]: any;
}

export default function TrackingForm({
  apiEndpoint = '/api/track',
}: Partial<TrackingFormProps>) {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [result, setResult] = useState<TrackResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumbers: trackingNumber }),
      });
      const data: TrackResponse = await res.json();
      setResult(data);
    } catch {
      setResult({ success: false, error: 'Unable to fetch tracking information.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="tracking" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-semibold text-[#1E3A5F] md:text-4xl">Track Your Shipment</h2>
        <form onSubmit={handleTrack} className="mt-8 flex flex-col gap-3 md:flex-row">
          <Input
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter DHL tracking number"
            required
          />
          <Button type="submit" disabled={loading} className="bg-[#1E3A5F] hover:bg-[#16304e]">
            {loading ? 'Checking...' : 'Track Now'}
          </Button>
        </form>
        {result && (
          <div className="mt-6">
            {result.success && result.results && Array.isArray(result.results) && result.results.length > 0 ? (
              result.results.map((item) => (
                <Card key={item.trackingNumber} className="p-5 mb-6">
                  <p className="text-sm text-slate-500">
                    Tracking Number: {item.trackingNumber}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#1E3A5F]">{item.status}</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Origin: {item.origin} &nbsp; &rarr; &nbsp; Destination: {item.destination}
                  </p>
                  {item.estimatedDelivery && (
                    <p className="text-sm text-slate-500">
                      Estimated Delivery: {item.estimatedDelivery}
                    </p>
                  )}
                  <div className="mt-4">
                    <p className="text-[15px] font-semibold text-slate-700">Tracking Events:</p>
                    <ul className="mt-2 space-y-1">
                      {item.events.map((ev, i) => (
                        <li key={i} className="text-sm text-slate-600">
                          <span className="inline-block min-w-[100px] font-mono text-xs mr-2">{ev.dateTime}</span>
                          <span className="">{ev.location}:</span>{' '}
                          <span className="text-slate-800">{ev.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))
            ) : (
              <Card className="p-5">
                <p className="text-sm text-red-600">
                  {result.error || 'Tracking not found. Please check your number and try again.'}
                </p>
              </Card>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
