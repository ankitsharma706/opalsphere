import React from 'react';
import { BookingForm } from '../components/BookingForm';

export default function Booking() {
  return (
    <div className="pt-32 pb-20 bg-primary min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl mb-6">Book Your Experience</h1>
          <p className="text-secondary/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Tell us about your vision, and we'll bring it to life with nature's most exquisite floral artistry.
          </p>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
