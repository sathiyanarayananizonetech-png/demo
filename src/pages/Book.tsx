import React from 'react';
import { BookingSystem } from '../components/Booking/BookingSystem';

const Book: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block">
            Reserve Your Time
          </span>
          <h1 className="text-5xl md:text-7xl font-black italic text-on-surface font-serif uppercase tracking-tight">
            Book Appointment
          </h1>
        </div>

        <BookingSystem />
      </div>
    </div>
  );
};

export default Book;
