'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export const ShuffleHero = () => {
  return (
    <section
      suppressHydrationWarning
      className='w-full sm:mt-20 mt-2  px-8 pt-40 pb-25 grid grid-cols-1 md:grid-cols-2 items-center font-lato gap-8 max-w-6xl mx-auto'
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
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 opacity-0  animate-[fadeIn_0.6s_ease-out_forwards_0.250s]'
          )}
          href='#O projektu'
        >
          O Projektu
        </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: '/img1.jpg',
  },
  {
    id: 2,
    src: '/img2.jpg',
  },
  {
    id: 3,
    src: '/img3.jpg',
  },
  {
    id: 4,
    src: '/img4.jpg',
  },
  {
    id: 5,
    src: '/img5.jpg',
  },
  {
    id: 6,
    src: '/img6.jpg',
  },
  {
    id: 7,
    src: '/img7.jpg',
  },
  {
    id: 8,
    src: '/img8.jpg',
  },
  {
    id: 9,
    src: '/img9.jpg',
  },
  {
    id: 10,
    src: '/img10.jpg',
  },
  {
    id: 11,
    src: '/img11.jpg',
  },
  {
    id: 12,
    src: '/img12.jpg',
  },
  {
    id: 13,
    src: '/img13.jpg',
  },
  {
    id: 14,
    src: '/img14.jpg',
  },
  {
    id: 15,
    src: '/img15.jpg',
  },
  {
    id: 16,
    src: '/img16.jpg',
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      suppressHydrationWarning
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: 'spring' }}
      className='w-full h-full rounded-md overflow-hidden bg-muted'
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div
      suppressHydrationWarning
      className='grid grid-cols-4 grid-rows-4 h-[450px] gap-1 animate-[fadeIn_0.6s_ease-out_forwards_0.300s] opacity-0'
    >
      {squares.map((sq) => sq)}
    </div>
  );
};
