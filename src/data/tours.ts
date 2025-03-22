export interface Tour {
  id: string;
  name: string;
  duration: number;
  difficulty: 'easy' | 'medium' | 'difficult';
  summary: string;
  description: string[];
  location: string;
  startDate: string;
  stops: number;
  maxGroupSize: number;
  price: number;
  rating: number;
  ratingsCount: number;
  imageCover: string;
  images: string[];
  locations?: {
    description: string;
    day: number;
    coordinates: [number, number];
  }[];
}

export const tours: Tour[] = [
  {
    id: 'the-sea-explorer',
    name: 'The Sea Explorer',
    duration: 7,
    difficulty: 'medium',
    summary: 'Exploring the jaw-dropping US east coast by foot and by boat',
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ],
    location: 'Miami, USA',
    startDate: 'June 2021',
    stops: 4,
    maxGroupSize: 15,
    price: 497,
    rating: 4.1,
    ratingsCount: 8,
    imageCover: 'https://ext.same-assets.com/3016008597/246204900.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/4124927798.jpeg'
    ],
    locations: [
      {
        description: 'Lummus Park Beach',
        day: 1,
        coordinates: [-80.128473, 25.781842]
      },
      {
        description: 'Islamorada',
        day: 2,
        coordinates: [-80.647885, 24.909047]
      },
      {
        description: 'Sombrero Beach',
        day: 3,
        coordinates: [-81.0784, 24.707496]
      },
      {
        description: 'West Key',
        day: 5,
        coordinates: [-81.768719, 24.552242]
      }
    ]
  },
  {
    id: 'the-forest-hiker',
    name: 'The Forest Hiker',
    duration: 5,
    difficulty: 'easy',
    summary: 'Breathtaking hike through the Canadian Banff National Park',
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    location: 'Banff, CAN',
    startDate: 'April 2021',
    stops: 3,
    maxGroupSize: 25,
    price: 397,
    rating: 4.8,
    ratingsCount: 11,
    imageCover: 'https://ext.same-assets.com/3016008597/483002303.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/483002303.jpeg'
    ]
  },
  {
    id: 'the-park-camper',
    name: 'The Park Camper',
    duration: 10,
    difficulty: 'medium',
    summary: "Breathing in Nature in America's most spectacular National Parks",
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    location: 'Las Vegas, USA',
    startDate: 'August 2021',
    stops: 4,
    maxGroupSize: 15,
    price: 1497,
    rating: 4.6,
    ratingsCount: 8,
    imageCover: 'https://ext.same-assets.com/3016008597/2030952733.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/2030952733.jpeg'
    ]
  },
  {
    id: 'the-city-wanderer',
    name: 'The City Wanderer',
    duration: 9,
    difficulty: 'easy',
    summary: "Living the life of Wanderlust in the US' most beatiful cities",
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    location: 'NYC, USA',
    startDate: 'March 2021',
    stops: 3,
    maxGroupSize: 20,
    price: 1197,
    rating: 4.4,
    ratingsCount: 7,
    imageCover: 'https://ext.same-assets.com/3016008597/2564095791.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/2564095791.jpeg'
    ]
  },
  {
    id: 'the-snow-adventurer',
    name: 'The Snow Adventurer',
    duration: 4,
    difficulty: 'difficult',
    summary: 'Exciting adventure in the snow with snowboarding and skiing',
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    location: 'Aspen, USA',
    startDate: 'January 2022',
    stops: 2,
    maxGroupSize: 10,
    price: 997,
    rating: 4.4,
    ratingsCount: 8,
    imageCover: 'https://ext.same-assets.com/3016008597/2386802673.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/2386802673.jpeg'
    ]
  },
  {
    id: 'the-sports-lover',
    name: 'The Sports Lover',
    duration: 14,
    difficulty: 'difficult',
    summary: 'Surfing, skating, parajumping, rock climbing and more, all in one tour',
    description: [
      'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    ],
    location: 'California, USA',
    startDate: 'July 2021',
    stops: 5,
    maxGroupSize: 8,
    price: 2997,
    rating: 3.3,
    ratingsCount: 9,
    imageCover: 'https://ext.same-assets.com/3016008597/954085018.jpeg',
    images: [
      'https://ext.same-assets.com/3016008597/954085018.jpeg'
    ]
  }
];
