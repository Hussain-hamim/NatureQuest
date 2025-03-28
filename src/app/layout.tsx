import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { UserProvider } from '../context/userContext';

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'NatureQuest | Exciting tours for adventurous people',
  description: 'Explore exciting tour options for your next adventure',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${lato.variable}`}>
      <body>
        <UserProvider>
          <Header />
          <main className='min-h-screen'>{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
