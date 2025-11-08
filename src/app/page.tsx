import Image from 'next/image';
import { ShuffleHero } from '@/components/ui/shuffle-grid';
import { Timeline } from '@/components/ui/timeline';
import { FaqSection } from '@/components/blocks/faq';

export default function Home() {
  const DEMO_FAQS = [
    {
      question: 'Šta su nusproizvodi u lancima prerade?',
      answer:
        'Nusproizvodi su ostaci koji nastaju tokom prerade voća i povrća, poput kora, sjemenki, pulpe i listova. Iako se najčešće smatraju otpadom, one imaju značajan nutritivni i kozmetički potencijal.',
    },
    {
      question: 'Zašto je važno vrijednovati nusproizvode?',
      answer:
        'Vrijednovanje nusproizvoda doprinosi smanjenju otpada, optimizacije resursa i očuvanju okoliša. Time se podržava cirkularna ekonomija i otvara prostor za inovativne, održive proizvode.',
    },
    {
      question:
        'Na koji način se nusproizvodi mogu primjeniti u kozmetičkoj industriji?',
      answer:
        'Nusproizvodi se mogu pretvoriti u sirovine poput ulja, ekstrakata, prahova i hidrofilnih faza. Koristi se u proizvodnji pilinga, maski, krema, tonika i seruma zahvaljujući visokom udjelu vitamina, minerala, i antioksidanata.',
    },
    {
      question: 'Koje su prednosti kozmetike izrađene od nusproizvoda?',
      answer:
        'Kozmetika na bazi nusproizvoda je ekološki prihvatljiva, bogata aktivnim sastojcima, pristupačna za proizvodnju i predstavlju alternativu industrijskim formulacijama. Osim toga doprinosi smanjenju organskog otpada.',
    },
    {
      question: 'Da li su ovi sastojci sigurni za upotrebu na koži?',
      answer:
        'Da. Nakon pravilne obrade i kontrole kvaliteta, sastojci iz nusproizvoda mogu biti potpuno sigurni i efikasni. Mnogi od njih, poput sjemenki grožđa ili kora citrusa, već se koriste u standardnoj kozmetičkoj industriji.',
    },
    {
      question:
        'Koje nusproizvode najčešće koristimo u Scratch Beauty formulacijama?',
      answer:
        'Ovo su neki od nusproizvoda koje koristimo: koru citrusa (za prirodne tonike i piling), sjemenke grožđa (za ulja bogata antioksidantima), pulpu jabuke (za hidratantne maske) i koru banane (za kreme za lice).',
    },
    {
      question: 'Za koga su namjenjeni naši proizvodi?',
      answer:
        'Naši proizvodi su namjenjeni korisnicima koji preferiraju prirodnu, održivu i nježnu kozmetiku, bez agresivnih sintetičkih sastojaka sa fokusom na ekologiju.',
    },
    {
      question: 'Zašto je naš projekat nazvan "Scratch Beauty"?',
      answer:
        'Naziv simbolizira stvaranje ljepote od nule i pretvaranje nečega što se smatra otpadom u potpuno nove, korisne i vrijedne kozmetičke proizvode.',
    },
  ];

  const data = [
    {
      title: 'Projekat?',
      content: (
        <div
          className='font-ubuntu md:mt-40 mt-10 scroll-offset'
          id='O-projektu'
        >
          <div>
            <div>
              <h2 className='sm:text-3xl  text-2xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent'>
                Šta je Scratch Beauty?
              </h2>
              <p className='text-sm text-center text-muted-foreground'>
                Sve što trebate znati o našoj platformi
              </p>
            </div>
            <p className='sm:text-base text-sm mt-15 leading-6 text-muted-foreground'>
              <strong>Scratch Beauty</strong> je tim, formiran od strane učenika{' '}
              <strong>Srednje mašinske tehničke škole Sarajevo</strong>, u
              sklopu izazovnog projekta organizovanog od strane{' '}
              <strong>Verlab Instituta, EIT Food zajednice i PPF UNSA</strong>.
              Naš zadatak bio je pronaći inovativno rješenje za vrednovanje
              nusproizvoda voća i povrća u prerađivačkim lancima.
            </p>
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              Kao odgovor na ovaj izazov, razvili smo koncept partnerstva sa
              kompanijama iz kozmetičke, farmaceutske, nutraceuticke i
              prehrambene industrije, predlažući model doniranja i ponovne
              upotrebe neiskorištenih nusproizvoda. Inicijativa{' '}
              <strong>Scratch Beauty</strong> služi kao primjer implementacije
              tog rješenja: simulirali smo proces kreiranja{' '}
              <strong>inovativne kozmetike</strong> koristeći te nusproizvode.
            </p>
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              {' '}
              Na našoj web stranici predstavljamo ovaj cirkularni model – od
              kataloga hipotetičkih proizvoda i detaljnog opisa procesa
              kreiranja, pa sve do edukacije na našem blogu i simulacije sistema
              za donaciju nusproizvoda. Ovim projektom promovišemo principe{' '}
              <strong>cirkularne ekonomije</strong> i održivi pristup
              industrijskoj preradi.
            </p>
          </div>
          <div className='mt-20'>
            <FaqSection
              title='Često postavljana pitanja'
              description='Sve što vas zanima o našoj platformi i procesu — na jednom mjestu.'
              items={DEMO_FAQS}
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Projekat realizovan uz podršku',
      content: (
        <div className='font-ubuntu md:mt-40 mt-10'>
          <div>
            <h2 className='sm:text-3xl  text-2xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent'>
              Zahvale i podrška
            </h2>
            <p className='text-sm text-center text-muted-foreground'>
              Počašćeni smo što smo dio moguć bez saradnje naših organizatora i
              podrške škole.
            </p>
          </div>
          <div>
            <p className='sm:text-base text-sm mt-15 leading-6 text-muted-foreground'>
              Iza svake naše ideje stoji podrška onih koji su vjerovali u nas.
              Ovaj projekat ne bi bio moguć bez organizatora, naše škole i
              mentora (profesora) koji su nas vodili kroz svaki korak.
            </p>
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              Od srca hvala što ste nam dali priliku da učimo, rastemo i
              predstavimo svoj rad. (Logo-i se koriste isključivo za edukativne
              svrhe)
            </p>
          </div>
          <div className='grid sm:grid-cols-2  grid-cols-1 mt-30'>
            <div className='py-10 border-b sm:col-span-2 sm:border-b sm:pb-12 flex items-center justify-center'>
              <Image
                src='/eit.png'
                alt='EIT Food + EU Logo'
                width='400'
                height='200'
              />
            </div>
            <div className='py-10 border-b sm:col-span-1 sm:border-b sm:border-r sm:pr-12 sm:pt-12 sm:pb-12 flex items-center justify-center'>
              <Image
                src='/Logo_smts.png'
                alt='Srednja mašinska tehnička škola Sarajevo logo'
                width='200'
                height='100'
              />
            </div>
            <div className='py-10 border-b sm:col-span-1 sm:border-b  flex items-center justify-center'>
              <Image
                src='/verlab_logo.png'
                alt='Verlab logo'
                width='200'
                height='100'
              />
            </div>
            <div className='py-10 border-b sm:col-span-1 sm:pt-12 sm:pb-12 sm:pr-12 sm:border-r flex items-center justify-center'>
              <Image
                src='/ppfznaktransparent.png'
                alt='Poljoprivredno-prehrambeni fakultet Sarajevo logo'
                width='200'
                height='100'
              />
            </div>
            <div className='py-10 border-b sm:col-span-1 flex items-center justify-center'>
              <Image
                src='/University_of_Sarajevo_logo.svg.png'
                alt='Univezitet Sarajevo logo'
                width='200'
                height='100'
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Od sirovine do formule',
      content: (
        <div>
          <div className='md:mt-40 mt-10'>
            <h2 className='sm:text-3xl  text-2xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent'>
              Kako se proizvodi kreiraju
            </h2>
            <p className='text-sm text-center text-muted-foreground'>
              Od odabranih nusproizvoda do održivih kozmetičkih formula —
              pogledaj kako ideja o otpadu postaje ideja o ljepoti.
            </p>
          </div>
          <div className='mt-15'>
            <p className='sm:text-base text-sm leading-6 text-muted-foreground'>
              Sve počinje pažljivim izborom nusproizvoda — onih koji su{' '}
              <strong>stabilni, čisti i bogati hranjivim sastojcima.</strong>{' '}
              Naš zamišljeni proces prikazuje kako bi laboratorije mogle
              koristiti <strong>prirodne ostatke iz voća i povrća</strong> za
              stvaranje nježnih, ekološki prihvatljivih proizvoda. Cilj nije
              komercijalna proizvodnja, već edukativno prikazivanje{' '}
              <strong>
                kako bi industrija mogla izgledati kada bi kružna ekonomija bila
                standard.
              </strong>
            </p>{' '}
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              <strong>Korak po korak </strong>
            </p>
            <ul className='mt-6'>
              <li className='sm:text-base text-sm leading-6 text-muted-foreground'>
                <strong>1. Odabir stabilnih nusproizvoda</strong> – koriste se
                samo oni s dokazano dugom trajnošću (poput sjemenki, korica
                citrusa i pulpe jabuke).
              </li>
              <li className='mt-4 sm:text-base text-sm leading-6 text-muted-foreground'>
                <strong>2. Istraživanje i analiza</strong> – laboratorije (u
                našem konceptu) ispituju prisustvo korisnih spojeva:
                antioksidanasa, vitamina i prirodnih ulja.
              </li>
              <li className='mt-4 sm:text-base text-sm leading-6 text-muted-foreground'>
                <strong>3. Formulisanje proizvoda</strong> – na osnovu kvaliteta
                sirovina razvijaju se prototipi krema, seruma i maski s
                minimalnim aditivima.
              </li>
              <li className='mt-4 sm:text-base text-sm leading-6 text-muted-foreground'>
                <strong>4. Testiranje stabilnosti</strong> – svaka formula
                prolazi kroz simulaciju starenja, provjeravajući rok trajanja,
                miris, boju i teksturu.
              </li>
              <li className='mt-4 sm:text-base text-sm leading-6 text-muted-foreground'>
                <strong>5. Transparentnost i edukacija</strong> – proces se
                javno dijeli kako bi potaknuo svijest o održivoj upotrebi
                resursa.
              </li>
            </ul>
            <p className='mt-7 sm:text-base text-sm leading-6 text-muted-foreground'>
              Kreiranje proizvoda u našem konceptu ne znači samo “napraviti
              nešto novo”, već maksimalno iskoristiti ono što već postoji. Fokus
              je na transparentnosti, minimalizmu i ponovnoj upotrebi — jer
              održiva ljepota ne počinje u laboratoriji, već u odluci da ne
              bacamo ono što može imati drugu svrhu.
            </p>
            <p className='mt-7 sm:text-base text-sm leading-6 text-muted-foreground'>
              Svaki zamišljeni proizvod je simbol onoga što bi kozmetička
              industrija mogla postati: spoju prirode, nauke i odgovornosti.
            </p>
            <p className='mt-7 sm:text-base text-sm leading-6 text-muted-foreground'>
              Na našem blogu možeš pronaći jedan detaljan primjer koji prikazuje
              cijeli proces od prikupljanja nusproizvoda do formulacije finalnog
              proizvoda. Kroz taj prikaz, možeš vidjeti kako bi se u stvarnosti
              spajala naučna preciznost i održivi pristup — korak po korak.
            </p>
            <p className='mt-7 sm:text-base text-sm leading-6 text-muted-foreground'>
              Ako želiš da tvoja ideja ili materijal postanu dio ove edukativne
              inicijative, možeš nas: kontaktirati direktno putem kontakt
              stranice , ili posjetiti link i ponudi nusproizvode, Ili istraži
              više na našoj blog stranici, gdje redovno objavljujemo primjere,
              ideje i konceptualne procese iza naših “fictional” proizvoda.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: 'Kako donirati nusproizvode',
      content: (
        <div>
          <div className='md:mt-40 mt-10'>
            <h2 className='sm:text-3xl  text-2xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent'>
              Kako funkcioniše donacija nusproizvoda
            </h2>
            <p className='text-sm text-center text-muted-foreground'>
              Počašćeni smo što smo dio moguć bez saradnje naših organizatora i
              podrške škole.
            </p>
          </div>
          <div className='mt-15'>
            <p className='sm:text-base text-sm leading-6 text-muted-foreground'>
              Zamisli sistem u kojem svaki ostatak voća i povrća dobija drugu
              priliku — ne kao otpad, već kao sastojak budućnosti. Naš koncept
              doniranja nusproizvoda prikazuje kako bi održiva saradnja između
              proizvođača hrane i industrije ljepote mogla izgledati: svježi,
              prirodni ostaci postaju inspiracija za inovaciju, a ono što se
              nekada smatralo otpadom pretvara se u vrijedan resurs.
            </p>{' '}
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              Iako je cijela ideja fikcionalna i edukativna, služi da pokaže
              koliko bi ovakav model mogao doprinijeti stvaranju održivije i
              odgovornije industrije. Kako “donacija” funkcioniše? Proizvođači i
              prerađivači izdvajaju dijelove voća i povrća poput sjemenki,
              korica i pulpe koji su još uvijek svježi, čisti i upotrebljivi.
            </p>
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              Prilikom doniranja, donatori navode procijenjeni rok svježine —
              koliko dugo njihovi nusproizvodi mogu ostati stabilni i sigurni za
              dalju obradu. U našem zamišljenom sistemu, laboratorije zatim
              procjenjuju kvalitet i koriste samo materijale koji zadržavaju
              nutritivnu i kozmetičku vrijednost, kako bi od njih mogli nastati
              održivi beauty sastojci.
            </p>
            <p className='sm:text-base text-sm mt-7 leading-6 text-muted-foreground'>
              Zato svaka donacija mora biti pažljivo odabrana, jasno označena i
              predata na vrijeme. Održiva ljepota počinje upravo odgovornošću
              prema onome što već imamo. Kako nas kontaktirati Ako imaš
              nusproizvode koje želiš “donirati” u okviru našeg edukativnog
              koncepta, možeš nas: kontaktirati direktno putem kontakt stranice
              , ili posjetiti link Ponudi nusproizvode u navigaciji, gdje te
              čeka jednostavna forma za prijavu.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <main>
      <div className='mt-4 font-ubuntu'>
        <h1 className='pointer-events-none opacity-0 h-0'>Scratch Beauty</h1>
        <ShuffleHero />
        <div className='relative'>
          <div className='w-full'>
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
