'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, NavLink } from '@/lib/navLinks';
import NavigationButton from './NavigationButton';

import { AnimatePresence, motion } from 'motion/react';

const Navigation = () => {
  const [navigationMode, setNavigationMode] = useState<'mobile' | 'desktop'>(
    'desktop'
  );
  const [mounted, setMounted] = useState<boolean>(false);

  const pathname: string | null = usePathname();

  useEffect(() => {
    setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    setMounted(true);

    const handleResize = () => {
      setNavigationMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <nav className='h-full flex items-center'>
      {navigationMode === 'desktop' ? (
        <DesktopNavigation pathname={pathname} />
      ) : (
        <MobileNavigation pathname={pathname} />
      )}
    </nav>
  );
};

const DesktopNavigation = ({ pathname }: { pathname: string | null }) => {
  return (
    <ul className='flex gap-7'>
      {navLinks.map((navLink: NavLink) => (
        <li
          key={navLink.name}
          className='font-ubuntu text-lg text-(--color-brown)'
        >
          <Link
            href={navLink.href}
            onClick={() => {
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 0);
            }}
          >
            {navLink.name.toLowerCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const MobileNavigation = ({ pathname }: { pathname: string | null }) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isNavigationOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = '';
    }
  }, [isNavigationOpen]);

  const toggleNavigation = (): void => {
    setIsNavigationOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      {' '}
      <AnimatePresence initial={false}>
        {isNavigationOpen && (
          <motion.div
            key='mobile-menu'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='flex items-center justify-between'
          >
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='flex justify-center items-center flex-col gap-6 fixed top-0 left-0 h-screen w-screen z-10 bg-white dark:bg-neutral-900 tracking-wide font-medium'
            >
              {navLinks.map((navLink: NavLink) => (
                <li
                  key={navLink.name}
                  className='font-ubuntu text-lg text-(--color-brown)'
                >
                  <Link
                    href={navLink.href}
                    onClick={() => {
                      setIsNavigationOpen(false);
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 0);
                    }}
                  >
                    {navLink.name.toLowerCase()}
                  </Link>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
      <div>
        <NavigationButton
          isNavigationOpen={isNavigationOpen}
          toggleNavigation={toggleNavigation}
        />
      </div>
    </>
  );
};

export default Navigation;
