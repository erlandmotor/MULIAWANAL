import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rianseptian.vercel.app/'),
  title: 'MULIAWAN AL - AMIEN, S.Ds., B.A Calon DPRD DAPIL 1 KOTA SERANG',
  description:
    'Serang Maju: Literasi Digital, Ekonomi Kreatif, Inovasi Bersama! Untuk Kota yang Dinamis dan Berdaya Saing, Bersama Kita Wujudkan Visi Masyarakat Terampil di Era Digital dan Pertumbuhan Ekonomi Kreatif yang Berkah.',
  openGraph: {
    images: '/MULIAWAN.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
