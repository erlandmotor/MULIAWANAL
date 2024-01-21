'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function AccordionComponents() {
  const question = [
    {
      id: 1,
      question: 'Siapa Itu MULIAWAN AL - AMIEN, S.Ds., B.A ?',
      answer:
        'seorang pionir dalam menggagas dan mengimplementasikan inovasi digital untuk memajukan program-program masyarakat. Dengan keahlian saya dalam memahami perkembangan terkini di dunia digital, saya berkomitmen untuk membawa transformasi positif melalui penerapan teknologi yang relevan dan inklusif. Melalui kepemimpinan saya, saya bertujuan untuk menghubungkan masyarakat dengan peluang digital, membuka akses kepada mereka, dan memastikan bahwa setiap individu dapat merasakan manfaat positif dari era digital ini. Dari Rakyat Untuk Rakyat!!',
    },
    {
      id: 2,
      question: 'Apa Itu Partai Perindo ?',
      answer:
        'Partai Persatuan Indonesia (Perindo) adalah partai politik di Indonesia. Partai ini didirikan oleh Hary Tanoesoedibjo, pengusaha dan pemilik MNC Group.',
    },
    {
      id: 3,
      question: 'Nomor Urut Berapa Perindo dan MULIAWAN AL ?',
      answer:
        'Partai Persatuan Indonesia (Perindo) Berada di Nomor Urut 16 dan MULIAWAN AL Berada di Nomor Urut 8',
    },
    {
      id: 4,
      question: 'Ada di dapil mana MULIAWAN AL berada ?',
      answer:
        'Dapil 1 Kota Serang',
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
