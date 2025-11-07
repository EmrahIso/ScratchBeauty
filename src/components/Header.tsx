import Navigation from './Navigation';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sm:h-[100px] h-[80px] fixed  md:top-[33px] top-[40px] left-0 w-screen bg-white z-[999] border-b'>
      <div className='h-full flex items-center px-4 justify-between max-w-6xl mx-auto'>
        <div>
          <Link href='/'>
            <Image
              src='/logo.png'
              alt='Scratch Beauty'
              preload={true}
              width={170}
              height={60}
            />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
