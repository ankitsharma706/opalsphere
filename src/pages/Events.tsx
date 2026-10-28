import React, { useState, useMemo } from 'react';
import { EventsHero } from '../components/events/EventsHero';
import { CategorySelector } from '../components/events/CategorySelector';
import { PastEventsGrid } from '../components/events/PastEventsGrid';
import { EventDetailModal } from '../components/events/EventDetailModal';
import { UpcomingEvents } from '../components/events/UpcomingEvents';
import { BookingSystem } from '../components/events/BookingSystem';
import { ClientStories } from '../components/events/ClientStories';
import { SignatureCollections } from '../components/events/SignatureCollections';
import { FloatingBookingCTA } from '../components/events/FloatingBookingCTA';
import { PAST_EVENTS, PastEvent } from '../data/eventsData';
import { SEOHead } from '../components/seo/SEOHead';
import { RelatedContent } from '../components/seo/RelatedContent';
import { AdUnit } from '../components/ads/AdUnit';
import { buildBreadcrumbSchema } from '../lib/seo/schemaGenerator';

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<PastEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return PAST_EVENTS;
    return PAST_EVENTS.filter(event => event.category === activeCategory);
  }, [activeCategory]);

  const handleEventClick = (event: PastEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const scrollToBooking = () => {
    const element = document.getElementById('booking-system');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('portfolio-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <SEOHead
        title="Event Floral Installations & Galas | OpalSphere"
        description="Explore our archive of high-profile wedding florals, corporate installations, and bespoke botanical architectures."
        canonicalUrl="https://maxcnfront.vercel.app/events"
        schema={buildBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Events', url: '/events' },
        ])}
      />
      <EventsHero 
        onBookClick={scrollToBooking}
        onGalleryClick={scrollToGallery}
      />
      
      <CategorySelector 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <div id="portfolio-grid">
        <PastEventsGrid 
          events={filteredEvents}
          onEventClick={handleEventClick}
        />
      </div>

      <UpcomingEvents />

      <BookingSystem />

      <ClientStories />

      <SignatureCollections />

      {/* Google AdSense Isolated Editorial Placement */}
      <AdUnit slotId="1000000002" className="max-w-4xl mx-auto px-4" />

      <EventDetailModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Internal PageRank Distribution */}
      <RelatedContent />

      <FloatingBookingCTA />
    </div>
  );
}
