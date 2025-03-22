import React from 'react';
import { tours } from '@/data/tours';
import Image from 'next/image';
import { MapPin, Calendar, Flag, Users, Star } from 'lucide-react';
import Link from 'next/link';

export function generateStaticParams() {
  return tours.map((tour) => ({
    id: tour.id,
  }));
}

// Define the page component with proper types
export default function TourPage({ params }: { params: { id: string } }) {
  const tour = tours.find((t) => t.id === params.id);

  if (!tour) {
    return (
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-natours-gray-dark">Tour not found</h1>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.imageCover})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-natours-green-light to-natours-green-dark opacity-70"></div>
        </div>
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="px-4 py-2 uppercase tracking-wider">
              {tour.name} tour
            </span>
          </h1>
          <div className="flex justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <span className="text-lg">{tour.duration} days</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{tour.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts & Description */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-natours-gray-dark-3 mb-6">Quick facts</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-natours-gray-dark-2">Next date</span>
                  <span className="text-natours-gray-dark font-medium">{tour.startDate}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-natours-gray-dark-2">Difficulty</span>
                  <span className="text-natours-gray-dark font-medium capitalize">{tour.difficulty}</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-natours-gray-dark-2">Participants</span>
                  <span className="text-natours-gray-dark font-medium">{tour.maxGroupSize} people</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-natours-gray-dark-2">Rating</span>
                  <span className="text-natours-gray-dark font-medium">{tour.rating} / 5</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-natours-gray-dark-3 mb-6">About {tour.name} tour</h2>
              {tour.description.map((paragraph, i) => (
                <p key={i} className="text-natours-gray-dark mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Images */}
      <section className="py-12 bg-natours-gray-light-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tour.images.map((image, i) => (
              <div key={i} className="h-80 relative overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`${tour.name} Tour ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-natours-gray-dark-3 mb-6 text-center">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sample reviews */}
            <div className="bg-natours-gray-light-1 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-natours-green flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <h6 className="font-bold text-natours-gray-dark-3">Lourdes Browning</h6>
              </div>
              <p className="text-natours-gray-dark mb-4">
                Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt
              </p>
              <div className="flex gap-1">
                {[1, 2].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-natours-green fill-natours-green" />
                ))}
              </div>
            </div>
            <div className="bg-natours-gray-light-1 p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-natours-green flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <h6 className="font-bold text-natours-gray-dark-3">Sophie Louise Hart</h6>
              </div>
              <p className="text-natours-gray-dark mb-4">
                Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!
              </p>
              <div className="flex gap-1">
                {[1, 2].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-natours-green fill-natours-green" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-natours-gray-light-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-natours-gray-dark-3 mb-4">What are you waiting for?</h2>
              <p className="text-natours-gray-dark mb-6">
                {tour.duration} days. 1 adventure. Infinite memories. Make it yours today!
              </p>
              <Link href="/login" className="btn btn--green">
                Log in to book tour
              </Link>
            </div>
            <div className="relative h-60 rounded-lg overflow-hidden">
              <Image
                src={tour.imageCover}
                alt={tour.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
