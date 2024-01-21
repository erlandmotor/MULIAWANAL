'use client';
import ButtonLinkComponent from '@/components/ButtonLinkComponent';
import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

type Props = {};

export default function HomeSection({}: Props) {
  const ParentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const childrenVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className='p-container lg:px-lg flex min-h-screen flex-col items-center justify-center gap-20 bg-gradient-to-b from-bg_start to-bg_end !py-20'
      id='Home'
    >
      <div className='container flex h-full w-full flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between'>
        <motion.div
          className='flex flex-col items-center justify-center text-center lg:items-start lg:text-start'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className='text-hero-title text-white '>
          MULIAWAN AL - AMIEN, S.Ds., B.A Calon DPRD DAPIL 1 KOTA SERANG
          </h1>
          <h3 className='text-hero-subtitle max-w-lg pt-4'>
          Serang Maju Literasi Digital, Ekonomi Kreatif, Inovasi Bersama! Untuk Kota yang Dinamis dan Berdaya Saing, Bersama Kita Wujudkan Visi Masyarakat Terampil di Era Digital dan Pertumbuhan Ekonomi Kreatif yang Berkah. #SerangBerinovasi #KreatifBersamaUntukKotaSerang
          </h3>
          <ButtonLinkComponent caption='Serang Maju Literasi Digital' to='About' offset={0} />
        </motion.div>
        <div className='relative '>
          <motion.div
            className='absolute bottom-14 left-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:-left-10'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='flex h-8 w-8  items-center justify-center rounded-full bg-primary text-white'>
              06
            </div>
            <p className='text-primary-text text-base font-medium'>
            MULIAWAN AL - AMIEN, S.Ds., B.A
            </p>
            <Image
              src='/nail.png'
              alt='Nail Image'
              className='h-6 w-6 rotate-[30deg] object-cover'
            />
          </motion.div>
          <motion.div
            className='absolute -bottom-5 right-2 z-10 flex h-16 w-72 items-center justify-evenly gap-2 rounded-xl bg-white
          sm:right-10'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src='/ppp.svg'
              width={50}
              height={50}
              alt='Logo PPP'
              className='h-10 w-10'
            />
            <p className='text-primary-text text-base font-medium'>
            Partai Persatuan Indonesia
            </p>
            <Image
              src='/nail.png'
              alt='Nail Image'
              className='h-6 w-6 rotate-[30deg] object-cover'
            />
          </motion.div>
          <motion.div
            className='absolute right-2 top-64 z-10 flex h-16 w-64 items-center justify-evenly gap-2 rounded-xl bg-black
          sm:-right-10'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src='/nu-color.svg'
              width={50}
              height={50}
              alt='MULIAWAN'
              className='h-14 w-14'
            />
            <p className='text-base font-medium text-white'>Serang Maju: Literasi Digital, Ekonomi Kreatif, Inovasi Bersama! Untuk Kota yang Dinamis dan Berdaya Saing, Bersama Kita Wujudkan Visi Masyarakat Terampil di Era Digital dan Pertumbuhan Ekonomi Kreatif yang Berkah. #SerangBerinovasi #KreatifBersamaUntukKotaSerang</p>
            <div className='h-3 w-3 rounded-full bg-primary'></div>
          </motion.div>
          <div className='relative overflow-y-hidden rounded-2xl bg-white/20 backdrop-blur-lg'>
            <Image
              src='/MULIAWAN.png'
              alt='Hero Image'
              width={450}
              height={550}
              as={NextImage}
              className=' relative -bottom-10 z-0 h-[520px] w-[450px] object-cover drop-shadow-2xl sm:h-[550px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
