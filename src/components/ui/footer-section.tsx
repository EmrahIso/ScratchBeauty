'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';

function Footerdemo() {
  return (
    <footer className='border-t mt-20 md:mt-0 bg-transparent text-foreground transition-colors duration-300'>
      <div className='max-w-6xl mx-auto px-4 py-12 md:px-6 lg:px-8'>
        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-4'>
          <div className='relative'>
            <Image
              src='/logo.png'
              alt='Scratch Beauty'
              preload={true}
              width={170}
              height={60}
            />
            <div className='absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl' />
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Linkovi</h3>
            <nav className='space-y-2 text-sm'>
              <Link
                href='/#O projektu'
                className='block transition-colors hover:text-primary'
              >
                O nama
              </Link>
              <Link
                href='/about'
                className='block transition-colors hover:text-primary'
              >
                O timu
              </Link>
              <Link
                href='/blog'
                className='block transition-colors hover:text-primary'
              >
                Blog
              </Link>
              <Link
                href='/contact'
                className='block transition-colors hover:text-primary'
              >
                Kontakt
              </Link>
              <Link
                href='/donate'
                className='block transition-colors hover:text-primary'
              >
                Ponudi nusproizvode
              </Link>
            </nav>
          </div>
          <div>
            <h3 className='mb-4 text-lg font-semibold'>Kontaktirajte nas</h3>
            <address className='space-y-2 text-sm not-italic'>
              <p>BiH, Sarajevo</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: scratchbeautys@gmail.com</p>
            </address>
          </div>
          <div className='relative'>
            <h3 className='mb-4 text-lg font-semibold'>Pratite nas</h3>
            <div className='mb-6 flex space-x-4'>
              <a
                href='https://www.instagram.com/scratch_beauty_sarajevo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                rel='noopener noreferrer'
                target='_blank'
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant='outline'
                        size='icon'
                        className='rounded-full'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='lucide lucide-instagram-icon lucide-instagram'
                        >
                          <rect
                            width='20'
                            height='20'
                            x='2'
                            y='2'
                            rx='5'
                            ry='5'
                          />
                          <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                          <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                        </svg>
                        <span className='sr-only'>Instagram</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Follow us on Instagram</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>
            </div>
          </div>
        </div>
        <div className='mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row'>
          <p className='text-sm text-muted-foreground'>
            © 2025 Scratch Beauty. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
