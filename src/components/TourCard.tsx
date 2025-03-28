import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Calendar, Flag, Users } from 'lucide-react';

interface TourCardProps {
  id: string;
  name: string;
  duration: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  summary: string;
  location: string;
  startDate: string;
  stops: number;
  maxGroupSize: number;
  price: number;
  rating: number;
  ratingsCount: number;
  imageCover?: string; // Make it optional
}

const TourCard = ({
  id,
  name,
  duration,
  difficulty,
  summary,
  location,
  startDate,
  stops,
  maxGroupSize,
  price,
  rating,
  ratingsCount,
  imageCover,
}: TourCardProps) => {
  // Generate a random image URL if imageCover is missing
  const randomImage = useMemo(() => {
    return `https://picsum.photos/600/400?random=${Math.floor(
      Math.random() * 1000
    )}`;
  }, []);

  return (
    <div className='card flex flex-col h-full hover:translate-y-2 hover:shadow-lg transition-transform duration-300 ease-in-out'>
      <div className='card__header'>
        <div
          className='card__picture'
          style={{
            backgroundImage: `url(${randomImage})`,
          }}
        >
          <div className='card__picture-overlay'>&nbsp;</div>
        </div>
        <h3 className='absolute bottom-4 right-2 z-10 text-right'>
          <span className='px-4 py-2 bg-gradient-to-r from-natours-green-light to-natours-green-dark text-white uppercase tracking-wider'>
            {name}
          </span>
        </h3>
      </div>

      <div className='card__details flex-grow'>
        <h4 className='text-sm uppercase text-natours-gray-dark-2 font-bold mb-3'>
          {difficulty} {duration}-day tour
        </h4>
        <p className='card__text mb-5 text-natours-gray-dark'>{summary}</p>
        <div className='grid grid-cols-2 gap-x-2 gap-y-4'>
          <div className='flex items-center gap-2 text-sm text-natours-gray-dark'>
            <MapPin size={16} className='text-natours-green' />
            <span>{location}</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-natours-gray-dark'>
            <Calendar size={20} className='text-natours-green' />
            <span>{startDate}</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-natours-gray-dark'>
            <Flag size={16} className='text-natours-green' />
            <span>{stops} stops</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-natours-gray-dark'>
            <Users size={16} className='text-natours-green' />
            <span>{maxGroupSize} people</span>
          </div>
        </div>
      </div>
      <div className='card__footer flex justify-between items-center'>
        <div>
          <p>
            <span className='text-natours-gray-dark-3 font-bold'>${price}</span>
            <span className='text-natours-gray-dark-2 text-sm'>
              {' '}
              per person
            </span>
          </p>
          <p className='text-natours-gray-dark-2 text-sm'>
            <span className='text-natours-gray-dark-3 font-bold'>{rating}</span>
            <span> rating ({ratingsCount})</span>
          </p>
        </div>
        <Link
          href={`/tour/${id}`}
          className='btn border-0 btn--green btn--small'
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
