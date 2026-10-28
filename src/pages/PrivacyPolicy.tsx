import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, CheckCircle, Mail } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { Breadcrumbs } from '../components/seo/Breadcrumbs';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 28, 2026';

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
  ];

  return (
    <div className="pt-32 pb-24 bg-primary min-h-screen text-secondary">
      <SEOHead
        title="Privacy Policy | OpalSphere"
        description="Learn how OpalSphere collects, uses, and protects your personal data, along with Google AdSense, third-party cookies, and DART cookie disclosures."
        canonicalUrl="https://maxcnfront.vercel.app/privacy-policy"
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
              <Shield size={16} />
              <span>Trust & Transparency</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Privacy Policy</h1>
            <p className="text-secondary/60 text-sm">
              Last updated: <span className="font-semibold text-secondary">{lastUpdated}</span>
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-secondary/80 space-y-10 leading-relaxed font-sans">
            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <FileText className="mr-3 text-accent" size={22} />
                1. Overview & Commitment
              </h2>
              <p>
                At <strong>OpalSphere</strong> (accessible from <a href="https://maxcnfront.vercel.app" className="text-accent underline">maxcnfront.vercel.app</a>), the privacy of our visitors and clients is of paramount importance. This Privacy Policy document outlines the types of personal information that is received and collected by OpalSphere and how it is used, secured, and safeguarded.
              </p>
              <p className="mt-4">
                We are committed to operating in full compliance with global privacy regulations, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and Google Publisher Policies.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Eye className="mr-3 text-accent" size={22} />
                2. Google AdSense & Third-Party Advertising Disclosures
              </h2>
              <p>
                OpalSphere may partner with third-party advertising networks, specifically <strong>Google AdSense</strong>, to serve advertisements when you visit our website. These companies may use aggregated information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
              </p>
              <div className="mt-6 space-y-4 bg-primary/40 p-6 rounded-2xl border border-accent/10">
                <h3 className="font-serif text-lg font-bold text-secondary">Google AdSense & DoubleClick DART Cookies:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-secondary/70">
                  <li>
                    <strong>Third-Party Vendors:</strong> Google, as a third-party vendor, uses cookies to serve ads on OpalSphere.
                  </li>
                  <li>
                    <strong>DART Cookie:</strong> Google's use of the DART cookie enables it to serve ads to users based on their visit to OpalSphere and other sites on the Internet.
                  </li>
                  <li>
                    <strong>Opting Out:</strong> Users may opt out of the use of the DART cookie and personalized advertising by visiting the{' '}
                    <a
                      href="https://adssettings.google.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold underline"
                    >
                      Google Ad and Content Network Privacy Policy
                    </a>{' '}
                    or by visiting the Network Advertising Initiative opt-out page at{' '}
                    <a
                      href="https://optout.networkadvertising.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent font-semibold underline"
                    >
                      aboutads.info
                    </a>.
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Lock className="mr-3 text-accent" size={22} />
                3. Information We Collect
              </h2>
              <p>We collect information you provide directly to us when using our platform:</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-secondary/70 mt-3">
                <li><strong>Account Information:</strong> Name, email address, password hash, and profile details when you sign up.</li>
                <li><strong>Event Inquiries & Bookings:</strong> Floral preferences, event dates, venues, contact phone number, and budget specifications.</li>
                <li><strong>Order & Wishlist Data:</strong> Selected luxury bouquets, floral kits, delivery preferences, and order history.</li>
                <li><strong>Log Data & Analytics:</strong> IP addresses, browser types, Internet Service Providers (ISP), referring/exit pages, platform type, date/time stamps, and click counts to analyze trends and administer the site.</li>
              </ul>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <CheckCircle className="mr-3 text-accent" size={22} />
                4. Cookies & Web Beacons
              </h2>
              <p>
                Like any modern web application, OpalSphere uses cookies to store information including visitors' preferences, user session state, and the pages on the website that the visitor accessed or visited. The information is used to optimize the user experience by customizing our web page content based on visitors' browser type and device parameters.
              </p>
              <p className="mt-3">
                You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers' respective websites.
              </p>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Shield className="mr-3 text-accent" size={22} />
                5. GDPR & CCPA Rights
              </h2>
              <div className="space-y-4 text-sm text-secondary/70">
                <p>
                  <strong>Under GDPR (European Union Users):</strong> You have the right to request copies of your personal data, rectification of inaccurate data, erasure of your data, restriction of processing, and data portability.
                </p>
                <p>
                  <strong>Under CCPA (California Residents):</strong> You have the right to request disclosure of categories of personal information collected, request deletion of your personal data, and to not be discriminated against for exercising your privacy rights. OpalSphere does NOT sell personal data to third parties.
                </p>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl border border-accent/10 shadow-sm">
              <h2 className="text-2xl font-serif text-secondary mb-4 flex items-center">
                <Mail className="mr-3 text-accent" size={22} />
                6. Contact Information & Data Inquiries
              </h2>
              <p>
                If you have any questions about this Privacy Policy, your personal data, or wish to exercise any of your statutory rights, please contact our Data Protection Officer at:
              </p>
              <div className="mt-4 p-6 bg-primary/40 rounded-2xl border border-accent/10 text-sm space-y-2">
                <p><strong>OpalSphere Floral Artistry LLC</strong></p>
                <p>Address: 123 Luxury Lane, Bloom District, NY 10001</p>
                <p>Email: <a href="mailto:hello@opalsphere.com" className="text-accent underline font-semibold">hello@opalsphere.com</a></p>
                <p>Direct Inquiries: <a href="mailto:contact@opalsphere.com" className="text-accent underline font-semibold">contact@opalsphere.com</a></p>
                <p>Phone: +1 (555) 000-1234</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

