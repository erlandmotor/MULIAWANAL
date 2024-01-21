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
            Pengalaman Organisasi Mas Rian Septrianto Maulana, S.M.
          </h1>
          <p className='text-primary-text mt-5 text-medium'>
            Pengalaman organisasi yang dimiliki oleh individu ini mencakup berbagai posisi kepemimpinan dalam berbagai organisasi. Dalam periode 2017-2020, individu tersebut menjabat sebagai Sekretaris Umum BPC HIPMI Kabupaten Gresik, yang merupakan Badan Pengurus Cabang Himpunan Pengusaha Muda Indonesia. Pada periode 2021-2024, individu tersebut menjadi Ketua Dewan Pembina HIPMI Kabupaten Gresik. Selain itu, individu ini juga menjabat sebagai Vice President Public Relation JCI East Java Junior Chamber International sejak 2018 hingga sekarang. Selama periode 2018-2020, individu ini memegang posisi Ketua Bidang Pengembangan UMKM & Perdagangan Ikatan Alumni Universitas Airlangga cabang Gresik Raya. Pada periode yang sama, individu ini juga menjabat sebagai Ketua Umum DPC APTRINDO Gresik, yang merupakan Asosiasi Pengusaha Truck Indonesia. Selanjutnya, individu ini menjadi Wakil Ketua Bidang Angkutan Kepelabuhanan DPD APTRINDO JATIM pada periode 2018-2020. Selama periode 2017-2022, individu ini juga menjabat sebagai Ketua Bidang Humas & Teknologi DPC APBMI Gresik, yang merupakan Asosiasi Perusahaan Bongkar Muat Indonesia. Pada tahun 2020-2025, individu ini menjabat sebagai Ketua Bidang Perintis OPP INSA, yang merupakan Indonesian National Shipowners Association. Individu ini juga menjadi anggota Komite Tetap Bidang Perhubungan Kadin Surabaya dalam periode 2019-2024. Selanjutnya, dalam periode 2021-2026, individu ini menjabat sebagai Wakil Ketua Bidang Pengembangan UMKM Kadin Gresik dan Ketua Umum GEKRAFS Jawa Timur, yang merupakan Gerakan Ekonomi Kreatif Nasional. Terakhir, individu ini menjabat dalam Bidang VI HIPMI Jawa Timur pada periode 2021-2024.
          </p>
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
              src='/419591675_18408618760009645_7308368155574212459_n.jpg'
              alt='Rian Septrianto Maulana'
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
