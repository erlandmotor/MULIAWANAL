'use client';
import { Link } from 'react-scroll';

type Props = {};

export default function Footer({}: Props) {
  const menuItems = ['Home', 'About', 'Program', 'Contact'];

  return (
    <footer className='p-container flex flex-col gap-10 border-t-1 py-10 lg:py-14'>
      <div className=' flex flex-col justify-evenly gap-10 md:flex-row'>
        <div className='flex flex-col'>
          <h2 className='text-primary-text text-xl'>MULIAWAN AL - AMIEN, S.Ds., B.A</h2>
          <h3 className='text-primary-text text-medium font-light'>
            Calon Anggota DPRD KOTA DAPIL 1 SERANG KOTA
          </h3>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-primary-text text-xl'>Links</h2>
          <div className='text-primary-text flex flex-col gap-1 font-light'>
            {menuItems.map((item, index) => (
              <Link
                smooth={true}
                duration={1000}
                to={item}
                className='cursor-pointer font-normal hover:text-secondary'
                offset={item === 'Contact' ? -200 : 0}
                key={index}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <h2 className='text-primary-text text-xl'>Information</h2>
          <div className='text-primary-text flex flex-col gap-1 font-light'>
            <span>KOTA SERANG</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+62 877-3360-5621</span>
            <span>muliawanal@gmail.com</span>
          </div>
        </div>
      </div>
      <p className='border-t-1 pt-10 text-center text-sm'>
        © 2024 MULIAWAN AL. All rights reserved
      </p>
    </footer>
  );
}
