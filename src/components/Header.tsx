import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link href="/" className="nav__el">
          All tours
        </Link>
      </nav>
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="https://ext.same-assets.com/3016008597/1934609313.png"
            alt="Natours Logo"
            width={70}
            height={35}
            className="h-9 w-auto"
          />
        </Link>
      </div>
      <nav className="nav nav--user">
        <Link href="/login" className="nav__el">
          Log in
        </Link>
        <Link href="/signup" className="nav__el nav__el--cta">
          <span className="bg-transparent border border-white text-white rounded-full py-1 px-4 hover:bg-white hover:text-natours-gray-dark-3 transition-all duration-200">
            Sign up
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
