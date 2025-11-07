'use client';
import { useState } from 'react';
import { useToast } from '@/components/ui/toast-1';
import ControlledInput from './ControlledInput';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Example() {
  const { showToast } = useToast();

  const defaultFormData: FormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const changeFormData = (type: string, newValue: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: newValue,
    }));
  };

  const clearForm = () => {
    setFormData(defaultFormData);
  };

  return (
    <form
      className='flex flex-col items-center text-sm text-slate-800 font-ubuntu'
      onSubmit={(e) => {
        e.preventDefault();
        showToast('Poruka poslana.', 'success', 'top-right');
        clearForm();
      }}
    >
      <p className='text-xs bg-(--color-pink)/20 text-(--color-pink) font-medium px-3 py-1 rounded-full'>
        Kontaktirajte Nas
      </p>
      <h1 className='text-3xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent py-4'>
        Donirajte vaše nusproizvode.
      </h1>
      <p className='max-md:text-sm text-gray-500 pb-10 text-center'>
        Ili nas direktno kontaktirajte na mail-u{' '}
        <a
          href='mailto:scratchbeautys@gmail.com'
          className='text-(--color-pink) hover:underline'
        >
          scratchbeautys@gmail.com
        </a>
      </p>
      <div className='max-w-96 w-full px-4'>
        <label htmlFor='name' className='font-medium'>
          Naziv kompanije ili organizacije
        </label>
        <div className='flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-(--color-pink) transition-all overflow-hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='transparent'
            stroke='#475569'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M10 12h4' />
            <path d='M10 8h4' />
            <path d='M14 21v-3a2 2 0 0 0-4 0v3' />
            <path d='M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2' />
            <path d='M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16' />
          </svg>
          <ControlledInput
            element='input'
            type='text'
            id='name'
            value={formData.name}
            changeFormData={changeFormData}
            css='h-full px-2 w-full outline-none bg-transparent'
            placeholder='Unesite naziv vaše kompanije ili organizacije'
            required={true}
          />
        </div>
        <label htmlFor='email-address' className='font-medium mt-4'>
          Email Adresa
        </label>
        <div className='flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-(--color-pink) transition-all overflow-hidden'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z'
              fill='#475569'
            />
          </svg>
          <ControlledInput
            element='input'
            type='email'
            id='email'
            value={formData.email}
            changeFormData={changeFormData}
            css='h-full px-2 w-full outline-none bg-transparent'
            placeholder='Unesite vašu email adresu'
            required={true}
          />
        </div>
        <label htmlFor='message' className='font-medium mt-4'>
          Poruka (opišite vaše nusproizvode i njihovu količinu)
        </label>
        <ControlledInput
          element='textarea'
          id='message'
          value={formData.message}
          changeFormData={changeFormData}
          css='w-full mt-2 p-2 bg-transparent border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus-within:ring-(--color-pink) transition-all'
          placeholder='Unesite vašu poruku'
          required={true}
        />
        <button
          type='submit'
          className='flex items-center justify-center gap-1 mt-5 bg-(--color-pink) cursor-pointer hover:bg-(--color-pink)/85 text-white py-2.5 w-full rounded-full transition font-bold'
        >
          Submit Form
          <svg
            className='mt-0.5'
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33'
              fill='#fff'
            />
          </svg>
        </button>
      </div>
    </form>
  );
}
