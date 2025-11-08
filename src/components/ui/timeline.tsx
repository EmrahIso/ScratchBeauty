'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile ? ['start 20%', 'end 80%'] : ['start 35%', 'end 80%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className='w-full bg-white font-ubuntu md:px-10' ref={containerRef}>
      <div ref={ref} className='relative max-w-6xl mx-auto pb-20'>
        {data.map((item, index) => (
          <div
            key={index}
            id={item.title}
            className='flex justify-start pt-10 lg:pt-40 lg:gap-10'
          >
            <div className='sticky flex flex-col lg:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm'>
              <div className='h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white  flex items-center justify-center'>
                <div className='h-4 w-4 rounded-full bg-neutral-200  border border-neutral-300  p-2' />
              </div>
              <h3 className='hidden lg:block text-base lg:pl-20 md:text-xl font-bold text-(--color-brown-transparent)  '>
                {item.title}
              </h3>
            </div>

            <div className='relative sm:pl-21 pl-12 pr-4 lg:pl-4 w-full'>
              <h3 className='lg:hidden hidden sm:block text-xl md:mb-4 mb-10 mt-20 text-left font-bold text-neutral-500 '>
                {item.title}
              </h3>
              {item.content}{' '}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className='hidden sm:block absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] '
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className='absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-[#ef4444] via-[#d69b9b] to-transparent from-[0%] via-[10%] rounded-full'
          />
        </div>
      </div>
    </div>
  );
};
