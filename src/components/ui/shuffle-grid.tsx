'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// ---------------- ShuffleHero ----------------
export const ShuffleHero = () => {
  return (
    <section
      suppressHydrationWarning
      className='w-full sm:mt-20 mt-2 px-8 pt-40 pb-25 grid grid-cols-1 md:grid-cols-2 items-center font-lato gap-8 max-w-6xl mx-auto'
    >
      <div className='mb-5 sm:mb-0'>
        <h1 className='block mb-4 text-xs md:text-sm text-(--color-brown)/95 font-medium animate-[fadeIn_0.6s_ease-out_forwards_0.100s] opacity-0 '>
          Scratch Beauty
        </h1>
        <h2 className='text-4xl text-(--color-brown) md:text-6xl font-semibold animate-[fadeIn_0.6s_ease-out_forwards_0.150s] opacity-0 '>
          Od otpada hrane do ljepote
        </h2>
        <p className='text-lg md:text-xl text-muted-foreground my-5 md:my-8 animate-[fadeIn_0.6s_ease-out_forwards_0.200s] opacity-0 '>
          Transformacija nusproizvoda u vrijednu kozmetiku.
        </p>
        <a
          className={cn(
            'cursor-pointer text-lg text-primary-foreground bg-(--color-pink) font-medium py-3 px-5 rounded-md',
            'transition-all hover:bg-(--color-pink)/90 active:scale-95',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.250s]'
          )}
          href='#O-projektu'
        >
          O Projektu
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

// ---------------- ShuffleGrid ----------------
const squareData = Array.from({ length: 16 }).map((_, i) => ({
  id: i + 1,
  src: `/img${i + 1}.jpg`,
}));

const getRandomized = () => {
  const shuffled = [...squareData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 16);
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [images, setImages] = useState(getRandomized());
  const [shuffleIndex, setShuffleIndex] = useState(0);

  useEffect(() => {
    const loop = () => {
      setShuffleIndex((prev) => prev + 1);
      setImages(getRandomized());
      timeoutRef.current = setTimeout(loop, 3500);
    };

    loop();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className='grid grid-cols-4 grid-rows-4 h-[450px] gap-1 animate-[fadeIn_0.6s_ease-out_forwards_0.300s] opacity-0'
    >
      <AnimatePresence mode='popLayout'>
        {images.map((sq) => (
          <motion.div
            suppressHydrationWarning
            key={`${sq.id}-${shuffleIndex}`} // jedinstveni ključ za svaki shuffle
            initial={{ opacity: 0, scale: 0.9 }} // 👈 START MANJE
            animate={{ opacity: 1, scale: 1 }} // 👈 DOLAZI NA NORMALNU VELIČINU
            exit={{ opacity: 0, scale: 0.9 }} // 👈 NESTAJE U ISTOM SMJERU
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className='w-full h-full rounded-md overflow-hidden bg-muted shadow-sm hover:scale-105 hover:shadow-lg transition-transform duration-500'
            style={{
              backgroundImage: `url(${sq.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
