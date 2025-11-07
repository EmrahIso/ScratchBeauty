import AnimatedListItem from '@/components/AnimatedListItem';
import { Mail, MapPin } from 'lucide-react';
import { Icon } from '@iconify/react';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Načini kojim nas možete kontaktirati.',
};

const Contact = () => {
  return (
    <main className='mt-[100px]'>
      <div className='container md:max-w-[768px] mt-60 mb-40 mx-auto md:px-16 px-4 py-4 flex flex-col items-center'>
        <h1 className='text-3xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent inline-block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.175s]'>
          Povežite se s nama
        </h1>
        <p className='mt-4 text-base leading-6 text-muted-foreground opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.225s]'>
          Ako želite da se povežete ili sarađujete, slobodno se obratite.
        </p>
        <div className='w-full custom-box-shadow-1 rounded-2xl border-1 border-neutral-200  transition-shadow duration-300 mt-10 sm:p-6 p-4 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.3s]'>
          <div>
            <ul className='flex flex-col gap-3'>
              <li className='flex sm:gap-4 gap-2 items-center  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.350s]'>
                <span>
                  <Mail size={24} className='text-gray-500 ' />
                </span>
                <p className='text-base leading-6 text-muted-foreground'>
                  scratchbeautys@gmail.com
                </p>
              </li>
              <li className='flex sm:gap-4 gap-2 items-center  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.450s]'>
                <span>
                  <MapPin size={24} className='text-gray-500' />
                </span>
                <p className='text-base leading-6 text-muted-foreground'>
                  Sarajevo, BiH
                </p>
              </li>
            </ul>
          </div>
          <div className='sm:mt-10 mt-7 flex sm:justify-between sm:flex-row sm:items-center flex-col items-start md:gap-4 gap-5'>
            <div>
              <a
                href='mailto:scratchbeautys@gmail.com'
                aria-label='Send me an email'
                className='bg-(--color-pink) flex px-2 py-1.5 rounded-lg gap-4 hover:scale-105 hover:bg-(--color-pink)/90 shadow-2xs transition-transform duration-150  opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.550s]'
              >
                <Mail size={24} className='text-neutral-50' />
                <p className='text-white'>Pošalji Email</p>
              </a>
            </div>
            <ul className='flex sm:gap-5 gap-3.5 gap-y-2 items-center flex-wrap'>
              <AnimatedListItem delay={0.9}>
                <a
                  href='https://www.instagram.com/scratch_beauty_sarajevo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                  aria-label='Discord Profile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-neutral-700 hover:text-neutral-950  transition-colors duration-150 md:text-lg text-base sm:gap-2 gap-1.5 underline underline-offset-4'
                >
                  <Icon
                    icon='simple-icons:instagram'
                    height={18}
                    className='text-neutral-700 '
                  />
                  <span>Instagram</span>
                </a>
              </AnimatedListItem>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
