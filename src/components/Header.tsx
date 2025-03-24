'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@/context/userContext';
import { User, UserCircle } from 'lucide-react';

const Header = () => {
  const { userCurrent, setUserCurrent } = useUser();

  return (
    <header className='header'>
      <nav className='nav nav--tours'>
        <Link href='/' className='nav__el size-3'>
          All tours
        </Link>
      </nav>
      <div className='flex justify-center'>
        <Link href='/'>
          <Image
            src='https://ext.same-assets.com/3016008597/1934609313.png'
            // src={'../data/logo.png'}
            alt='Natours Logo'
            width={70}
            height={35}
            className='h-9 w-auto'
          />
        </Link>
      </div>

      {userCurrent ? (
        <span>
          <UserCircle
            size={24}
            color='green'
            style={{ display: 'inline', marginRight: 5, marginBottom: 1 }}
          />
          <span
            style={{
              color: 'white',
              fontWeight: '400',
              letterSpacing: 1,
              fontSize: 18,
            }}
            className='border-b-2 border-green-800'
          >
            {userCurrent.name}
          </span>
        </span>
      ) : (
        <nav className='nav nav--user'>
          <Link href='/login' className='nav__el'>
            Log in
          </Link>
          <Link href='/signup' className='nav__el nav__el--cta'>
            <span className='bg-transparent border border-white text-white rounded-full py-1 px-4 hover:bg-white hover:text-natours-gray-dark-3 transition-all duration-200'>
              Sign up
            </span>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
