import { motion } from 'framer-motion';

type Props = {
  activeTabs: 'visi' | 'misi';
};

export default function VissionMissionCard({ activeTabs }: Props) {
  const data = {
    visi: 'Mewujudkan Serang sebagai pusat dan pengembangan kota yang dinamis, terus bertumbuh dan berdaya saing melalui pemanfaatan sumber daya manusia sebagai inovasi digital dan ekonomi kreatif yang berkembang pesat.',
    misi: [
      {
        title: 'Menggalakkan literasi digital di kalangan masyarakat Serang melalui program pelatihan, workshop, dan kegiatan edukasi lainnya.',
        content:
          'Mendorong inovasi digital dalam berbagai sektor ekonomi dengan memberikan dukungan dan fasilitas kepada para pelaku usaha lokal.',
      },
      {
        title: 'Membangun ekosistem kolaboratif antara pemerintah, perusahaan, dan komunitas untuk merancang solusi inovatif yang mendukung transformasi digital kota.',
        content:
          'Menyediakan infrastruktur teknologi yang handal dan terjangkau untuk memastikan aksesibilitas yang merata terhadap kemajuan digital bagi semua lapisan masyarakat.',
      },
      {
        title: 'Pemberdayaan Perempuan',
        content:
          'Memperjuangkan keadilan gender dan pemberdayaan perempuan melalui kebijakan inklusif, pelatihan keterampilan, dan akses pendidikan yang setara',
      },
      {
        title: 'Peningkatan Kesejahteraan Masyarakat',
        content:
          'Merancang dan mendukung kebijakan yang bertujuan meningkatkan kesejahteraan masyarakat, termasuk dalam hal kesehatan, pendidikan, dan pekerjaan',
      },
    ],
  };
  return (
    <motion.div
      className='relative z-10 w-full overflow-hidden rounded-md bg-white drop-shadow-2xl'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, scale: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className='fixed top-0 z-0 flex h-8 w-full items-center gap-1 bg-secondary px-5'>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
        <div className='h-2 w-2 rounded-full bg-bg_secondary'></div>
      </div>
      <div
        className='flex h-96 w-full flex-col items-center gap-3 overflow-auto px-5 py-10'
        id='mission'
      >
        <h1 className='text-primary-text text-2xl font-semibold capitalize'>
          {activeTabs}
        </h1>
        {activeTabs === 'visi' ? (
          <p className='max-w-3xl'>{data.visi}</p>
        ) : (
          <ul className='flex flex-col gap-5 '>
            {data.misi.map((misi, index) => (
              <li
                key={index}
                className='flex max-w-3xl flex-wrap items-start justify-between gap-3 px-2'
              >
                <div className='flex gap-3'>
                  <span className='flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-white'>
                    {index + 1}
                  </span>
                  <h1 className='text-primary-text text-lg font-semibold'>
                    {misi.title}
                  </h1>
                </div>
                <p className='max-w-3xl'>{misi.content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
