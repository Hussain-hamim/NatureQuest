import React from 'react';
import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            name={tour.name}
            duration={tour.duration}
            difficulty={tour.difficulty}
            summary={tour.summary}
            location={tour.location}
            startDate={tour.startDate}
            stops={tour.stops}
            maxGroupSize={tour.maxGroupSize}
            price={tour.price}
            rating={tour.rating}
            ratingsCount={tour.ratingsCount}
            imageCover={tour.imageCover}
          />
        ))}
      </div>
    </div>
  );
}
