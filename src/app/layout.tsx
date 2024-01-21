import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rianseptian.vercel.app/'),
  title: 'Rian Septrianto Maulana, S.M. Calon DPR-RI DAPIL X GRESIK - LAMONGAN',
  description:
    'Rian Septrianto Maulana adalah seorang aktifis yang mencuat dalam dunia kegiatan keagamaan dan kewanitaan, terlibat dengan berbagai organisasi.',
  openGraph: {
    images: '/cakrian.png',
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
