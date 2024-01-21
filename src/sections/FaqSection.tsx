import AccordionComponents from '@/components/AccordionComponents';
import { Button, Link } from '@nextui-org/react';
import { Instagram } from 'lucide-react';

type Props = {};

export default function FaqSection({}: Props) {
  return (
    <section className='p-container flex flex-col items-center justify-between gap-10 py-20'>
      <div className='mb-10 flex w-full flex-col  items-center justify-center gap-2'>
        <h1 className='text-primary-text text-hero-title'>FAQ & Contact</h1>
        <h2 className='text-center text-lg text-slate-500 md:text-xl'>
          Pertanyaan Yang Sering Ditanyakan Kepada Saya
        </h2>
      </div>
      <div className='w-full lg:w-[80%]'>
        <AccordionComponents />
      </div>
      <div
        className=' flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-primary px-5 py-10 md:flex-row md:justify-between lg:w-[80%]'
        id='Contact'
      >
        <div className='flex flex-col items-center justify-center md:items-start'>
          <h1 className=' text-3xl font-bold text-white'>
            FOLLOW MEDIA SOSIAL MULIAWAN AL
          </h1>
          <p className='text-lg text-white'>Calon Anggota DPRD Kota Serang
Dapil 1 No. 8 (Kel. Lopang, Unyur, Kaligandu, Terondol, Sukawana, & Sumur Pecung)</p>
        </div>
        <Button
          className='bg-black text-white'
          startContent={<Instagram size={20} />}
          size='lg'
          href='https://www.instagram.com/sobat_muliawan08'
          as={Link}
          target='_blank'
        >
          Sobat Muliawan08
        </Button>
      </div>
    </section>
  );
}
