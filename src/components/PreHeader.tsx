const PreHeader = () => {
  return (
    <header className='md:h-[33px] h-[40px] bg-(--color-pink) border-b fixed top-0 left-0 w-screen z-[999]'>
      <div className='h-full flex items-center justify-center max-w-6xl mx-auto '>
        <p className='sm:text-sm text-xs text-center text-neutral-200'>
          Upozorenje: Ovo je školski projekat, sve je fiktivno.
        </p>
      </div>
    </header>
  );
};

export default PreHeader;
