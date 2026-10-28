import React from 'react';
import { BookingForm } from '../components/BookingForm';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';
import { Calendar, Sparkles, CheckCircle2, Clock, HelpCircle, Shield } from 'lucide-react';
import { buildFAQSchema } from '../lib/seo/schemaGenerator';

export default function Booking() {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Consultation Booking', path: '/booking' },
  ];

  const bookingFaqs = [
    {
      question: 'How far in advance should I reserve floral styling for my event?',
      answer:
        'For high-profile weddings and large galas, we recommend booking 6 to 12 months in advance to ensure harvest availability for rare botanicals. For intimate gatherings or corporate dinners, 4 to 8 weeks advance notice is typically sufficient.',
    },
    {
      question: 'What happens during the initial design consultation?',
      answer:
        'Our creative director reviews your event aesthetic, color palette, architectural venue specifications, lighting plans, and floral varieties. We follow with a customized floral vision board and itemized spatial proposal.',
    },
    {
      question: 'Do you provide mockups or flower sample previews?',
      answer:
        'Yes. Confirmed full-scale wedding and gala commissions include an in-studio centerpiece mockup and botanical palette review approximately 6 weeks prior to the event date.',
    },
    {
      question: 'Can you accommodate destination weddings and international events?',
      answer:
        'Absolutely. Our botanical production team travels globally, coordinating with international flower growers and local artisan logistics across Europe, the Americas, and the Caribbean.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen text-secondary">
      <SEOHead
        title="Book a Bespoke Floral Consultation | OpalSphere"
        description="Schedule a private floral design consultation with OpalSphere's master botanical artisans for luxury weddings, galas, and corporate events."
        canonicalUrl="https://maxcnfront.vercel.app/booking"
        schema={buildFAQSchema(bookingFaqs)}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbs} />
        </div>

        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-accent block mb-3">
            Bespoke Botanical Curation
          </span>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
            Book Your Design Consultation
          </h1>
          <p className="text-secondary/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Share the details of your upcoming celebration. Our senior floral directors will curate a personalized botanical atmosphere tailored to your venue and aesthetic vision.
          </p>
        </div>

        {/* 1. Main Booking Form */}
        <div className="bg-white rounded-3xl p-6 md:p-12 border border-accent/10 shadow-sm mb-20">
          <BookingForm />
        </div>

        {/* 2. Comprehensive Editorial Guide: What to Expect */}
        <div className="mb-20 space-y-12">
          <div className="border-b border-accent/10 pb-4">
            <h2 className="text-3xl font-serif text-secondary mb-2 flex items-center">
              <Sparkles className="mr-3 text-accent" size={26} />
              Our Collaborative Design Process
            </h2>
            <p className="text-sm text-secondary/60">
              From botanical concept to flawless on-site installation, here is what you can anticipate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-accent/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl mb-6">
                01
              </div>
              <h3 className="font-serif text-xl mb-3">Discovery & Vision</h3>
              <p className="text-sm text-secondary/70 leading-relaxed">
                We review your venue architecture, color palette, lighting scheme, and floral preferences to craft an initial creative brief and botanical mood board.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-accent/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl mb-6">
                02
              </div>
              <h3 className="font-serif text-xl mb-3">Bespoke Proposal</h3>
              <p className="text-sm text-secondary/70 leading-relaxed">
                You receive an itemized spatial plan detailing centerpiece dimensions, ceremonial floral arches, entrance installations, and rare seasonal stems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-accent/10 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-accent font-serif font-bold text-xl mb-6">
                03
              </div>
              <h3 className="font-serif text-xl mb-3">Installation & Artistry</h3>
              <p className="text-sm text-secondary/70 leading-relaxed">
                On the day of your event, our master floral artisans manage flower conditioning, on-site construction, and temperature control to ensure pristine longevity.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Frequently Asked Questions */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-accent/10 shadow-sm mb-16">
          <div className="border-b border-accent/10 pb-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-secondary flex items-center">
              <HelpCircle className="mr-3 text-accent" size={24} />
              Consultation & Booking FAQs
            </h2>
          </div>

          <div className="space-y-6">
            {bookingFaqs.map((faq, idx) => (
              <div key={idx} className="border-b border-accent/5 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-serif font-semibold text-secondary mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-secondary/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Trust Badges */}
        <div className="p-6 bg-primary/40 rounded-2xl border border-accent/10 flex flex-col sm:flex-row items-center justify-between text-xs text-secondary/60 gap-4">
          <div className="flex items-center space-x-2">
            <Shield size={16} className="text-accent" />
            <span>Encrypted Consultation Inquiries</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-accent" />
            <span>Guaranteed Response Within 24 Business Hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 size={16} className="text-accent" />
            <span>Complimentary Initial Discovery Review</span>
          </div>
        </div>
      </div>
    </div>
  );
}
