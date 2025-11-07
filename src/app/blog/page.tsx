import { Gallery4, Gallery4Props } from '@/components/blocks/gallery4';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Pročitajte naše edukativne blog postove.',
};

const Blog = () => {
  const demoData: Gallery4Props = {
    title: 'Blog',
    description:
      'Otkrijte naše edukativne i inspirativne priče o održivoj kozmetici, prirodnim sastojcima i kreativnom timu Scratch Beauty.',
    items: [
      {
        slug: '1',
        id: 'Otkrijte zašto nusproizvodi zaslužuju novu vrijednost.',
        title: 'Otkrijte zašto nusproizvodi zaslužuju novu vrijednost.',
        description:
          'Otkrij zašto nusproizvodi iz voća i povrća predstavljaju ključnu kariku u održivoj industriji ljepote — i kako njihova upotreba mijenja način na koji razmišljamo o otpadu.',
        href: '/blog/1',
        image: '/img9.jpg',
      },
      {
        slug: '2',
        id: 'Pogledajte kako nusproizvodi postaju sastojci u kozmetici.',
        title: 'Pogledajte kako nusproizvodi postaju sastojci u kozmetici.',
        description:
          'Saznaj kako industrija ljepote koristi nusproizvode poput sjemenki, kore i pulpe za stvaranje učinkovitih, prirodnih formulacija.',
        href: '/blog/2',
        image: '/img17.jpg',
      },
      {
        slug: '3',
        id: 'Upoznajte prirodne sastojke koje koristimo u Scratch Beauty formulacijama.',
        title:
          'Upoznajte prirodne sastojke koje koristimo u Scratch Beauty formulacijama.',
        description:
          'Otkrij koji prirodni nusproizvodi čine srce Scratch Beauty proizvoda i zašto su ključni za zdravu, njegovanu kožu..',
        href: '/blog/3',
        image: 'img18.jpg',
      },
      {
        slug: '5',
        id: 'Pogledajte kako nastaje jedan Scratch Beauty proizvod',
        title: 'Pogledajte kako nastaje jedan Scratch Beauty proizvod',
        description:
          'Zaviri iza kulisa i otkrij kako nastaje svaki Scratch Beauty proizvod — korak po korak, uz spoj nauke i kreativnosti.',
        href: '/blog/5',
        image: 'img20.jpg',
      },
      {
        slug: '6',
        id: 'Zavirite u umjetnost kombinovanja sastojaka u prirodnoj kozmetici.',
        title:
          'Zavirite u umjetnost kombinovanja sastojaka u prirodnoj kozmetici.',
        description:
          'Kako Scratch Beauty bira sastojke? Nauči kako kombinujemo prirodne komponente da dobijemo uravnotežene, efikasne formule.',
        href: '/blog/6',
        image: 'img21.jpg',
      },
    ],
  };

  return (
    <main className='mt-[100px]'>
      <div>
        <Gallery4 {...demoData} />
      </div>
    </main>
  );
};

export default Blog;
