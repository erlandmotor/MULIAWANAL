'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AccordionComponents() {
  const question = [
    {
      id: 1,
      question: 'Siapa Itu Rian Septrianto Maulana ?',
      answer:
        'Rian Septrianto Maulana adalah seorang aktifis yang mencuat dalam dunia kegiatan keagamaan dan kewanitaan, terlibat dengan berbagai organisasi. Dedikasinya tidak hanya terbatas pada keikutsertaannya,tetapi juga pada peran kunci dalam memperkuat nilai-nilai keagamaan dan mengadvokasi hak-hak perempuan, menjadikannya sosok inspiratif di kancah perubahan sosial.',
    },
    {
      id: 2,
      question: 'Apa Itu Partai PPP ?',
      answer:
        'Partai Persatuan Pembangunan (PPP) adalah salah satu partai politik di Indonesia. PPP didirikan pada 5 Januari 1973 dan merupakan salah satu partai Islam tertua di Indonesia.',
    },
    {
      id: 3,
      question: 'Nomor Urut Berapa PPP dan Rian Septrianto Maulana ?',
      answer:
        'Partai Persatuan Pembangunan (PPP) Berada di Nomor Urut 17,dan Rian Septrianto Maulana Berada di Nomor Urut 6',
    },
    {
      id: 4,
      question: 'Ada di dapil mana Rian Septrianto Maulana berada ?',
      answer:
        'Rian Septrianto Maulana adalah calon legislatif kabupaten gresik - lamongan dapil 10 yang meliputi kecamatan Gresik Dan Lamongan',
    },
  ];

  return (
    <Accordion>
      {question.map((item) => (
        <AccordionItem
          key={item.id}
          aria-label={`Accordion ${item.id}`}
          subtitle='Tekan Untuk Melihat Jawaban'
          title={item.question}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
