import { Compare } from '@/components/ui/compare';
import Example from '@/components/ui/form-1';
import { ToastProvider } from '@/components/ui/toast-1';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donirajte nusproizvode',
  description: 'Popunite formu i pošaljite nam poruku, brzo odgovaramo.',
};

const Donate = () => {
  return (
    <ToastProvider>
      <main className='mt-[100px] lg:mb-40'>
        <div>
          <div className='max-w-6xl mx-auto grid lg:grid-cols-2 grid-cols-1'>
            <div className='lg:pt-40 pt-20 animate-[fadeIn_0.6s_ease-out_forwards_0.150s] opacity-0'>
              <Example />
            </div>
            <div className='animate-[fadeIn_0.6s_ease-out_forwards_0.300s] opacity-0'>
              <h2 className='text-lg text-center md:text-xl text-muted-foreground my-5 md:my-8 lg:pt-42 pt-10'>
                Upozorenje: ovo je školski projekat. Poruke se ne šalju nikome.
              </h2>
              <div className='flex w-full justify-center'>
                <div className='border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 p-4 dark:border-neutral-800 flex items-center w-[200px] md:w-[400px]'>
                  <Compare
                    firstImage='/img10.jpg'
                    secondImage='/product1.jpg'
                    firstImageClassName='object-cover object-left-top'
                    secondImageClassname='object-cover object-left-top'
                    className='h-[250px] w-[200px] md:h-[400px] md:w-[400px]'
                    slideMode='hover'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ToastProvider>
  );
};

export default Donate;
