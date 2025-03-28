'use client';
import React, { useEffect, useState } from 'react';
import TourCard from '@/components/TourCard';
import axios from 'axios';

export default function HomePage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      // .get('http://localhost:8000/api/v1/tours')
      .get('https://node-nature.onrender.com/api/v1/tours')
      .then((res) => {
        setTours(res.data.data.data); // Correctly access the nested array
        // reason why there is three data.data.data is because the response is nested like this:
        // {
        //   "status": "success",
        //   "results": 10,
        //   "data": {
        //     "data": [...]
        //   }
        // }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!tours.length) {
    return (
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-natours-gray-dark'>
          {/* <span className='loading loading-spinner text-accent-foreground'></span> */}
          {/* <span className="loading loading-infinity loading-xl"></span> */}
          {/* <span className='loading loading-spinner text-accent-foreground'></span> */}
          Loading Tours
          <span className='loading loading-infinity loading-xl text-green-600'></span>
        </h1>
      </div>
    );
  }

  return (
    <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            id={tour.id}
            name={tour.name}
            duration={tour.duration}
            difficulty={tour.difficulty}
            summary={tour.summary}
            location={tour.locations[0].description}
            startDate={tour.startDates[0] || 'N/A'}
            stops={tour.locations.length}
            maxGroupSize={tour.maxGroupSize}
            price={tour.price}
            rating={tour.ratingAverage}
            ratingsCount={tour.ratingQuantity}
            imageCover={tour.imageCover}
          />
        ))}
      </div>
    </div>
  );
}
