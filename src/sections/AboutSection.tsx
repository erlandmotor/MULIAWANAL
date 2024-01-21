'use client';

import NextImage from 'next/image';
import { Image } from '@nextui-org/react';
import ButtonLinkComponent from '@/components/ButtonLinkComponent';
import { ClipboardCheck } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {};

export default function AboutSection({}: Props) {
  return (
    <section className='p-container py-20' id='About'>
      <div className='flex flex-col items-stretch justify-center gap-14 lg:flex-row lg:items-center lg:justify-between'>
        <motion.div
          className='lg:max-w-xl xl:max-w-2xl'
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className='text-hero-title text-primary-text'>
            Pengalaman Organisasi MULIAWAN AL - AMIEN, S.Ds., B.A
          </h1>
          <p className='text-primary-text mt-5 text-medium'>
            Saya adalah seorang pionir dalam menggagas dan mengimplementasikan inovasi digital untuk memajukan program-program masyarakat. Dengan keahlian saya dalam memahami perkembangan terkini di dunia digital, saya berkomitmen untuk membawa transformasi positif melalui penerapan teknologi yang relevan dan inklusif. Melalui kepemimpinan saya, saya bertujuan untuk menghubungkan masyarakat dengan peluang digital, membuka akses kepada mereka, dan memastikan bahwa setiap individu dapat merasakan manfaat positif dari era digital ini. Dari Rakyat Untuk Rakyat!!          </p>
          <ButtonLinkComponent
            caption='Daftar Relawan'
            to='Contact'
            Icon={ClipboardCheck}
            offset={-200}
          />
        </motion.div>
        <div className='relative'>
          <div className='flex items-center justify-center rounded-2xl bg-gradient-to-b from-bg_start to-bg_end'>
            <Image
              src='/MULIAWAN.png'
              alt='MULIAWAN'
              className='z-0 h-[520px] w-[450px] object-cover sm:h-[550px]'
              as={NextImage}
              width={450}
              height={550}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
