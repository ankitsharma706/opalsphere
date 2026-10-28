import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Contact', path: '/contact' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen text-secondary">
      <SEOHead
        title="Contact OpalSphere | Luxury Floral Consultations"
        description="Connect with OpalSphere's artisan florists for bespoke weddings, galas, floral commissions, and corporate events. Direct phone, email, and studio location."
        canonicalUrl="https://maxcnfront.vercel.app/contact"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-4">
              Direct Communication
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Get in <br />
              <span className="italic text-accent">Touch</span>
            </h1>
            <p className="text-secondary/70 text-lg mb-10 max-w-md leading-relaxed">
              Have an upcoming celebration, wedding, or architectural floral vision? Our master florists and design coordinators are ready to transform your concept into reality.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: 'Email Inquiries',
                  value: 'hello@opalsphere.com',
                  subtext: 'Direct responses within 24 hours',
                  href: 'mailto:hello@opalsphere.com'
                },
                {
                  icon: Phone,
                  label: 'Concierge Telephone',
                  value: '+1 (555) 000-1234',
                  subtext: 'Mon – Fri: 9:00 AM – 6:00 PM EST',
                  href: 'tel:+15550001234'
                },
                {
                  icon: MapPin,
                  label: 'Floral Atelier & Studio',
                  value: '123 Luxury Lane, Bloom District',
                  subtext: 'New York, NY 10001 (Private visits by appointment)',
                  href: 'https://maps.google.com'
                },
                {
                  icon: Clock,
                  label: 'Studio Hours',
                  value: 'Monday – Saturday',
                  subtext: '10:00 AM – 7:00 PM EST',
                  href: undefined
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5 bg-white/70 p-5 rounded-2xl border border-accent/10">
                  <div className="w-12 h-12 rounded-xl bg-white border border-accent/15 flex items-center justify-center text-accent shrink-0 shadow-sm">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h2 className="text-[10px] font-bold uppercase tracking-widest text-secondary/50 mb-1">
                      {item.label}
                    </h2>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-secondary hover:text-accent transition-colors block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold text-secondary">{item.value}</p>
                    )}
                    <p className="text-xs text-secondary/60 mt-0.5">{item.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-accent/10"
          >
            {status === 'success' ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200 shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-serif text-secondary">Inquiry Received</h3>
                <p className="text-secondary/70 max-w-md mx-auto leading-relaxed text-sm">
                  Thank you, <strong>{formData.name}</strong>. Your consultation request has been forwarded directly to our senior creative director. We will review your vision and respond via <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-block bg-secondary text-primary px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-secondary transition-all shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif text-secondary mb-2">Send a Message</h3>
                  <p className="text-xs text-secondary/60">Fill out your details below and our concierge team will connect with you.</p>
                </div>

                {status === 'error' && errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle size={16} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-primary/40 border border-accent/15 rounded-xl py-3.5 px-4 focus:outline-none focus:border-accent text-sm transition-colors"
                      placeholder="e.g. Eleanor Vance"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-primary/40 border border-accent/15 rounded-xl py-3.5 px-4 focus:outline-none focus:border-accent text-sm transition-colors"
                      placeholder="e.g. eleanor@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">
                    Event Type / Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-primary/40 border border-accent/15 rounded-xl py-3.5 px-4 focus:outline-none focus:border-accent text-sm transition-colors"
                    placeholder="e.g. Intimate Wedding Floral Installation"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-secondary/60 mb-2">
                    Message / Event Details *
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-primary/40 border border-accent/15 rounded-xl py-3.5 px-4 focus:outline-none focus:border-accent text-sm transition-colors"
                    placeholder="Please include event date, guest count, aesthetic preferences, and budget considerations..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-secondary text-primary py-4 rounded-full font-bold tracking-widest uppercase text-xs flex items-center justify-center group hover:bg-accent hover:text-secondary transition-all shadow-md disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    'Transmitting Message...'
                  ) : (
                    <>
                      Transmit Inquiry
                      <Send size={15} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
