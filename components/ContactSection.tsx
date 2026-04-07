'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  title?: string;
}

export default function ContactSection({
  title = 'Contact DHL Business Team',
}: Partial<ContactSectionProps>) {
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: 'Shipping Quote', laneFrom: '', laneTo: '', message: '' });
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.topic) return setError('Please complete required fields.');
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return setError('Please enter a valid email address.');
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-3xl font-semibold text-[#1E3A5F] md:text-4xl">{title}</h2>
          <div className="mt-6 space-y-4">
            <Card className="p-4"><p className="text-sm font-semibold text-slate-900">Sales Inquiries</p><p className="text-sm text-slate-600">enterprise@dhl-business.com</p></Card>
            <Card className="p-4"><p className="text-sm font-semibold text-slate-900">Tracking Support</p><p className="text-sm text-slate-600">tracking@dhl-business.com</p></Card>
            <Card className="p-4"><p className="text-sm font-semibold text-slate-900">Phone</p><p className="text-sm text-slate-600">+1 (800) 225-5345</p></Card>
          </div>
        </div>
        <Card className="p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div><Label>Name *</Label><Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
            <div><Label>Email *</Label><Input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></div>
            <div><Label>Company</Label><Input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} /></div>
            <div><Label>Topic *</Label><Input value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} /></div>
            <div className="grid gap-4 md:grid-cols-2">
              <div><Label>Shipping Lane From</Label><Input value={form.laneFrom} onChange={(e) => setForm({ ...form, laneFrom: e.target.value })} /></div>
              <div><Label>Shipping Lane To</Label><Input value={form.laneTo} onChange={(e) => setForm({ ...form, laneTo: e.target.value })} /></div>
            </div>
            <div><Label>Message</Label><Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {submitted && <p className="text-sm text-emerald-600">Thanks! Our team will reach out shortly.</p>}
            <Button type="submit" className="w-full bg-[#1E3A5F] hover:bg-[#16304e]">Submit Request</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
