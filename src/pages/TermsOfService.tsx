import React from 'react';
import { motion } from 'motion/react';
import { Scale, CheckSquare, AlertCircle, ShoppingBag, ShieldAlert, Award } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export default function TermsOfService() {
  const lastUpdated = 'October 28, 2026';

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen text-secondary">
      <SEOHead
        title="Terms of Service | OpalSphere"
        description="Review the terms and conditions governing bespoke floral styling, luxury event bookings, website use, and floral commerce at OpalSphere."
        canonicalUrl="https://maxcnfront.vercel.app/terms-of-service"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="border-b border-accent/10 pb-8 mb-12">
            <div className="inline-flex items-center space-x-2 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <Scale size={16} />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Terms of Service</h1>
            <p className="text-secondary/60 text-sm">
              Last updated: <span className="font-semibold text-secondary">{lastUpdated}</span>
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-secondary/80 space-y-10 leading-relaxed font-sans">
            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <CheckSquare className="mr-3 text-accent" size={22} />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or using the website at <a href="https://maxcnfront.vercel.app" className="text-accent underline font-semibold">maxcnfront.vercel.app</a> and the associated services offered by <strong>OpalSphere</strong> ("Company", "we", "us", or "our"), you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <ShoppingBag className="mr-3 text-accent" size={22} />
                2. Floral Commissions, Event Bookings & Products
              </h2>
              <p>
                OpalSphere delivers high-end bespoke floral design, event floral architecture, and luxury bouquets. Due to the natural and seasonal availability of botanicals:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-secondary/70 mt-3">
                <li><strong>Seasonal Botanicals:</strong> We reserve the right to make substitutions of equal or higher value if specific flower varieties are unavailable due to harvest conditions.</li>
                <li><strong>Consultations & Deposits:</strong> Custom wedding and corporate event reservations require a non-refundable retainer upon contract signing to secure your date.</li>
                <li><strong>Delivery & Handling:</strong> All perishable flower arrangements must be inspected upon delivery. Any issues must be communicated within 24 hours of receipt with photographic documentation.</li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Award className="mr-3 text-accent" size={22} />
                3. Intellectual Property Rights
              </h2>
              <p>
                The Service and its original content, features, photography, floral composition designs, trademarks, and branding are and will remain the exclusive property of OpalSphere and its licensors. Our designs, editorial photography, and brand materials may not be reproduced, copied, or distributed without express written consent.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <AlertCircle className="mr-3 text-accent" size={22} />
                4. User Accounts & Acceptable Use
              </h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding your login credentials. You agree not to misuse the service, introduce malicious code, scrape data, or infringe upon the rights of other community members.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <ShieldAlert className="mr-3 text-accent" size={22} />
                5. Limitation of Liability & Warranties
              </h2>
              <p>
                In no event shall OpalSphere, nor its directors, employees, partners, agents, or suppliers, be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. Services are provided on an "AS IS" and "AS AVAILABLE" basis.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Scale className="mr-3 text-accent" size={22} />
                6. Governing Law & Dispute Resolution
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the State of New York, United States, without regard to its conflict of law provisions.
              </p>
              <div className="mt-4 p-6 bg-primary/40 rounded-2xl border border-accent/10 text-sm space-y-2">
                <p><strong>Legal & Inquiries Contact:</strong></p>
                <p>OpalSphere Floral Artistry LLC</p>
                <p>Email: <a href="mailto:hello@opalsphere.com" className="text-accent underline font-semibold">hello@opalsphere.com</a></p>
                <p>Phone: +1 (555) 000-1234</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

