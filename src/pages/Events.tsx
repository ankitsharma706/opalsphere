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

      <EventDetailModal 
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FloatingBookingCTA />
    </div>
  );
}
