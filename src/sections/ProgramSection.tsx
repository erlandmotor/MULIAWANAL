'use client';
import CardComponent from '@/components/CardComponent';
import { motion } from 'framer-motion';

type Props = {};
const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const program = [
  {
    id: 1,
    title: 'Pelatihan ekonomi kreatif kepada masyarakat',
    content:
      'Pagi yang cerah menjadi saksi kegiatan pasar yang penuh semangat bagi para Usaha Mikro, Kecil, dan Menengah (UMKM) di Kota Serang. Acara ini bertujuan mendorong perkembangan ekonomi lokal dengan memberikan platform bagi UMKM untuk mempromosikan produk dan jasa mereka.',
    image: 'program-1',
  },
  {
    id: 2,
    title: 'Pentingnya branding pada Bisnis dan Start Up',
    content:
      'Tidak hanya terbatas pada rutinitas senam, acara ini seringkali diisi dengan sesi tanya jawab tentang gaya hidup sehat, pengetahuan nutrisi, dan tips kebugaran. Hal ini menciptakan atmosfer yang edukatif, di mana masyarakat dapat saling berbagi informasi dan pengalaman untuk mencapai gaya hidup yang lebih sehat.',
    image: 'program-2',
  },
  {
    id: 3,
    title: 'Pengembangan dan pelestarian seni budaya tradisi di Kota Serang',
    content:
      'Dalam upaya mendukung partisipasi aktif masyarakat, Kota Serang menggelar kegiatan sosialisasi dan mendengar keluhan warga. Acara ini bertujuan untuk membangun dialog yang lebih erat antara pemerintah dan masyarakat guna menciptakan lingkungan yang lebih responsif terhadap kebutuhan dan aspirasi warganya. Pada acara tersebut, berbagai program inisiatif pemerintah dibahas, termasuk upaya meningkatkan literasi digital dan mendukung pertumbuhan ekonomi kreatif. Selain itu, warga diajak untuk memberikan keluhan, masukan, dan ide-ide konstruktif guna memperbaiki layanan dan kualitas hidup di Kota Serang. Sosialisasi ini menjadi momentum penting untuk memperkuat kerjasama antara pemerintah dan masyarakat dalam mewujudkan perkembangan positif dan kesejahteraan bersama..',
    image: 'program-3',
  },
];

export default function ProgramSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 bg-bg_secondary py-20'>
      <div className='mb-10 flex flex-col items-center  justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title '>Program Unggulan</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          Komitmen Untuk Membawa Perubahan Positif Bagi Masyarakat
        </h2>
      </div>
      <motion.div
        className='grid-col-1 grid h-full w-full content-center gap-5 md:grid-cols-2 xl:grid-cols-3'
        variants={variants}
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.4 }}
        viewport={{ once: true }}
      >
        {program.map((item) => (
          <motion.div
            variants={childVariants}
            key={item.id}
            transition={{ delay: 0.2 * item.id }}
          >
            <CardComponent
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
