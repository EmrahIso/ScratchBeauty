import { testimonials } from '@/lib/testimonials';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O timu',
  description: 'Pročitajte više o timu koji stoji iza Scratch Beauty-a.',
};

const About = () => {
  return (
    <main className='mt-[100px]'>
      <div className='flex flex-col w-screen mt-4 font-ubuntu'>
        <div className='text-center'>
          <div className='max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 font-ubuntu lg:px-12 py-20'>
            <h1 className='text-3xl font-semibold text-(--color-brown) dark:text-white animate-[fadeIn_0.6s_ease-out_forwards_0.100s] opacity-0'>
              Scratch Beauty <br />
              <span className='text-3xl md:text-[4rem] font-bold mt-1 animate-[fadeIn_0.6s_ease-out_forwards_0.150s] opacity-0 '>
                Članovi Tima
              </span>
            </h1>
          </div>
          <div className='md:mb-20 -mb-20'>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
