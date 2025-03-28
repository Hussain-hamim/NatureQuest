'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Calendar, Flag, Users, Star } from 'lucide-react';
import Link from 'next/link';
import axios from 'axios';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import dynamic from 'next/dynamic';

// // Dynamically import MapContainer and other Leaflet components
// const MapContainer = dynamic(
//   () => import('react-leaflet').then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import('react-leaflet').then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import('react-leaflet').then((mod) => mod.Marker),
//   { ssr: false }
// );
// const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
//   ssr: false,
// });

type Tour = {
  id: string;
  name: string;
  duration: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  summary: string;
  location: string;
  startDate: string; // Date
  stops: number;
  ratingAverage: number; // Average rating
  maxGroupSize: number;
  price: number; // Price in USD
  rating: number; // Average rating
  ratingsCount: number; // Number of ratings
  imageCover?: string; // Image URL
  images: string[]; // Array of image URLs
  startLocation: {
    type: string;
    coordinates: [number, number];
    address: string;
    description: string;
  };
  description: string;
  startDates: string[]; // Array of dates
  guides: string[]; // Array of guide IDs
  reviews: {
    // Array of reviews
    _id: string;
    review: string;
    rating: number;
    createdAt: string; // Date
    user: {
      _id: string;
      name: string;
      photo: string;
    };
  }[];
};

export default function TourPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [tour, setTour] = useState<Tour>();
  const [tourId, setTourId] = useState<string | null>(null);

  // Generate a deterministic random image URL using tourId
  let randomImage = useMemo(() => {
    return `https://picsum.photos/600/400?random=${tourId || 'default'}`;
  }, [tourId]);

  // Resolve the params promise and set the tourId
  useEffect(() => {
    params.then((resolvedParams) => {
      setTourId(resolvedParams.id);
    });
  }, [params]);

  // Fetch the tour data only when tourId is set
  useEffect(() => {
    if (tourId) {
      axios
        // .get(`http://localhost:8000/api/v1/tours/${tourId}`)
        .get(`https://node-nature.onrender.com/api/v1/tours/${tourId}`)
        .then((res) => {
          setTour(res.data.data.doc); // Set the tour data
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [tourId]);

  if (!tour) {
    return (
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-natours-gray-dark'>
          Loading tour details
          <span className='loading loading-infinity loading-xl text-green-600'></span>
        </h1>
      </div>
    );
  }

  const startLocation = tour.startLocation;

  return (
    <div>
      {/* Header */}
      <section className='relative h-96'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{ backgroundImage: `url(${randomImage})` }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-natours-green-light to-natours-green-dark opacity-40'></div>
        </div>
        <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center'>
          <h1 className='text-4xl font-bold text-white mb-4'>
            <span className='px-4 py-2 uppercase tracking-wider'>
              {tour.name} tour
            </span>
          </h1>
          <div className='flex justify-center gap-6 text-white'>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>{tour.duration} days</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-lg'>{tour.location}</span>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Facts & Description */}
      <section className='bg-white py-16'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-2xl font-bold text-natours-gray-dark-3 mb-6'>
                Quick facts
              </h2>
              <div className='space-y-6'>
                <div className='flex items-start gap-4'>
                  <span className='text-natours-gray-dark-2'>Next date</span>
                  <span className='text-natours-gray-dark font-medium'>
                    {tour.startDates[0]}
                  </span>
                </div>
                <div className='flex items-start gap-4'>
                  <span className='text-natours-gray-dark-2'>Difficulty</span>
                  <span className='text-natours-gray-dark font-medium capitalize'>
                    {tour.difficulty}
                  </span>
                </div>
                <div className='flex items-start gap-4'>
                  <span className='text-natours-gray-dark-2'>Participants</span>
                  <span className='text-natours-gray-dark font-medium'>
                    {tour.maxGroupSize} people
                  </span>
                </div>
                <div className='flex items-start gap-4'>
                  <span className='text-natours-gray-dark-2'>Rating</span>
                  <span className='text-natours-gray-dark font-medium'>
                    {tour.ratingAverage} / 5
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold text-natours-gray-dark-3 mb-6'>
                About {tour.name} tour
              </h2>

              <p className='text-natours-gray-dark mb-4 leading-relaxed'>
                {tour.description}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tour Images */}
      <section className='py-12 bg-natours-gray-light-1 '>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-natours-gray-dark-3 mb-6'>
            Tour Images
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {tour.images.map((image, i) => (
              <div
                key={i}
                className='h-80 relative overflow-hidden  rounded-lg'
              >
                <Image
                  src={(randomImage += 1)}
                  alt={`${tour.name} Tour ${i + 1}`}
                  fill
                  className='object-cover hover:translate-y-1 hover:shadow-lg transition-transform duration-300 ease-in-out'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}

      <section className='py-12 bg-natours-gray-light-1'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          {tour.startLocation && (
            <>
              <h2 className='text-2xl font-bold text-natours-gray-dark-3 mb-6'>
                Location
              </h2>
              <p className='text-lg text-natours-gray-dark mb-4'>
                <strong>Map:</strong>
                <span className='loading ml-3 loading-infinity loading-xl text-green-600'></span>
              </p>
              <p className='text-lg text-natours-gray-dark mb-4'>
                <strong>Address:</strong> {startLocation.address}
              </p>
              <p className='text-lg text-natours-gray-dark mb-6'>
                <strong>Description:</strong> {startLocation.description}
              </p>
              {/* <MapContainer
                center={[
                  startLocation.coordinates[1],
                  startLocation.coordinates[0],
                ]}
                zoom={13}
                style={{ height: '400px', width: '100%' }}
              >
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={[
                    startLocation.coordinates[1],
                    startLocation.coordinates[0],
                  ]}
                >
                  <Popup>
                    <strong>{tour.name}</strong> starts here!
                    <br />
                    {startLocation.description}
                  </Popup>
                </Marker>
              </MapContainer> */}
            </>
          )}
        </div>
      </section>
      {/* Reviews */}
      <section className='py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-2xl font-bold text-natours-gray-dark-3 mb-6'>
            Reviews
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {tour.reviews && tour.reviews.length > 0 ? (
              tour.reviews.map((review) => (
                <div
                  key={review._id}
                  className='bg-natours-gray-light-1 p-6 rounded-lg shadow-sm'
                >
                  {/* User Info */}
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-natours-green flex items-center justify-center text-white font-bold text-xl'>
                      {review.user.name[0].toUpperCase()}
                    </div>
                    <h6 className='font-bold text-natours-gray-dark-3'>
                      {review.user.name}
                    </h6>
                  </div>
                  {/* Review Text */}
                  <p className='text-natours-gray-dark mb-4'>{review.review}</p>
                  {/* Star Rating */}
                  <div className='flex gap-1'>
                    {[...Array(review.rating)].map((rating, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 text-natours-green fill-natours-green'
                      />
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className='text-center text-natours-gray-dark'>
                No reviews available for this tour.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
