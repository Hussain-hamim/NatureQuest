import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-natours-gray-light-1 pt-8 pb-6 mt-16'>
      <div className='flex flex-col items-center'>
        <div className='mb-6'>
          <Link href='/'>
            <Image
              src='https://ext.same-assets.com/3016008597/3733573812.png'
              // src={'../data/logo.png'}
              alt='Natours Logo'
              width={120}
              height={40}
              className='h-10 w-auto'
            />
          </Link>
        </div>
        <ul className='footer__nav flex flex-wrap justify-center gap-4 mb-4'>
          <li>
            <Link
              href='#'
              className='text-natours-gray-dark hover:text-natours-green'
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='text-natours-gray-dark hover:text-natours-green'
            >
              Download apps
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='text-natours-gray-dark hover:text-natours-green'
            >
              Become a guide
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='text-natours-gray-dark hover:text-natours-green'
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              href='#'
              className='text-natours-gray-dark hover:text-natours-green'
            >
              Contact
            </Link>
          </li>
        </ul>
        <p className='footer__copyright text-natours-gray-dark text-sm'>
          © 2025 by Hsn.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
