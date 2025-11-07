import React from 'react';

export type BlogDataArray = {
  items: BlogDataObj[];
};

export type BlogDataObj = {
  slug: string;
  date: string;
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  image: string;
  authorImage: string;
  authorName: string;
};

export const blogData: BlogDataArray = {
  items: [
    {
      slug: '1',
      id: 'Otkrijte zašto nusproizvodi zaslužuju novu vrijednost.',
      title: 'Otkrijte zašto nusproizvodi zaslužuju novu vrijednost.',
      content: (
        <div className='font-ubuntu md:mt-20 mt-10'>
          <div className='bg-neutral-100 p-5 rounded-xl'>
            <h2 className='text-base font-medium transition-colors duration-200 text-left text-foreground'>
              Sadržaj:
            </h2>
            <ul className='sm:pl-[25px] pl-[5px] mt-[25px]'>
              <li>- Šta su zapravo nusproizvodi?</li>
              <li>- Od otpada do resursa — kako sve počinje</li>
              <li>- Uloga nusproizvoda u industriji ljepote</li>
              <li>- Cirkularna ekonomija u praksi</li>
              <li>- Promjena svijesti potrošača</li>
              <li>- Zaključak</li>
            </ul>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              1. Šta su zapravo nusproizvodi?
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U industriji prerade hrane, pojam “nusproizvod” obično označava
              ono što ostaje nakon glavnog procesa — koru, sjemenke, pulpu,
              listove ili stabljike. Iako se često odbacuju, ti dijelovi voća i
              povrća kriju pravu riznicu hranjivih tvari i bioaktivnih spojeva:
              prirodne antioksidanse, vitamine, enzime i ulja koji se mogu
              ponovo iskoristiti u drugim granama industrije.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              2. Od otpada do resursa — kako sve počinje
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Prije samo nekoliko godina, većina nusproizvoda završavala je na
              otpadu ili kao stočna hrana. Danas, zahvaljujući modernim
              tehnologijama i rastu svijesti o održivosti, naučnici i
              proizvođači otkrivaju da upravo ti “nepoželjni” dijelovi mogu
              imati izuzetno visoku vrijednost.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Na primjer, iz kore agruma mogu se izdvojiti eterična ulja koja se
              koriste u parfemima i prirodnim kremama. Sjemenke grožđa
              pretvaraju se u ulje bogato antioksidansima, dok se iz pulpe mrkve
              ili jabuke dobijaju ekstrakti koji revitalizuju kožu.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              3. Uloga nusproizvoda u industriji ljepote
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Industrija ljepote prolazi kroz veliki zaokret — od masovne
              proizvodnje prema održivom i odgovornom pristupu. Sve više
              brendova prepoznaje da kvalitet i ekologija mogu ići zajedno, pa u
              svoje formule uključuju sastojke dobijene iz nusproizvoda.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ti sastojci nisu samo “zeleni dodatak”, već donose stvarne
              benefite: hidrataciju, regeneraciju, anti-age efekte i zaštitu od
              oksidativnog stresa. Na taj način, ljepota dobija novu definiciju
              — onu koja počiva na prirodnom ciklusu obnavljanja.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              4. Cirkularna ekonomija u praksi
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Upotrebom nusproizvoda stvaramo sistem u kojem ništa ne ide
              uzalud. To je suština cirkularne ekonomije — modela koji se
              temelji na ideji da svi materijali, čak i oni koji se smatraju
              otpadom, imaju potencijal za novu vrijednost.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Takav pristup smanjuje količinu otpada, štedi resurse i doprinosi
              smanjenju emisija CO₂. Osim ekološkog aspekta, to otvara vrata
              inovacijama i novim oblicima poslovanja — onima koji povezuju
              poljoprivredu, prehranu, kozmetiku i biotehnologiju.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              5. Promjena svijesti potrošača
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Danas kupci sve više traže transparentnost i žele znati odakle
              potječu sastojci proizvoda koje koriste. Brendovi koji koriste
              nusproizvode ne nude samo proizvod — oni nude priču o
              odgovornosti, održivosti i inovaciji.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Kupovina takvih proizvoda postaje način da i sami doprinesemo
              boljoj budućnosti, pokazujući da ljepota ne mora imati negativan
              utjecaj na prirodu.
            </p>
          </div>
          <div className='bg-neutral-100 p-5 rounded-xl mt-12'>
            <h2 className='text-xl font-medium transition-colors duration-200 text-left text-foreground'>
              Zaključak
            </h2>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Vrijeme je da prestanemo gledati na nusproizvode kao na “ostatke”.
              Oni predstavljaju priliku da promijenimo način na koji stvaramo i
              trošimo.
            </p>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Svaka kora, sjemenka ili pulpa može postati dio rješenja — dio
              održivog kruga u kojem priroda i inovacija djeluju zajedno. U toj
              promjeni, ljepota dobija novo značenje.
            </p>
          </div>
        </div>
      ),
      description:
        'Otkrij zašto nusproizvodi iz voća i povrća predstavljaju ključnu kariku u održivoj industriji ljepote — i kako njihova upotreba mijenja način na koji razmišljamo o otpadu.',
      image: '/img9.jpg',
      date: '6 Nov 2025',
      authorImage: '/zejneb.jpg',
      authorName: 'Zejneb Joldaš',
    },
    {
      slug: '2',
      id: 'Pogledajte kako nusproizvodi postaju sastojci u kozmetici.',
      title: 'Pogledajte kako nusproizvodi postaju sastojci u kozmetici.',
      content: (
        <div className='font-ubuntu md:mt-20 mt-10'>
          <div className='bg-neutral-100 p-5 rounded-xl'>
            <h2 className='text-base font-medium transition-colors duration-200 text-left text-foreground'>
              Sadržaj:
            </h2>
            <ul className='sm:pl-[25px] pl-[5px] mt-[25px]'>
              <li>- Novi život starih sastojaka</li>
              <li>- Prirodna moć voća i povrća</li>
              <li>- Od laboratorije do bočice</li>
              <li>- Zašto je ovo važan korak naprijed</li>
              <li>- Zaključak</li>
            </ul>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              1. Novi život starih sastojaka
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U kozmetičkoj industriji, sve više se govori o održivosti i
              transparentnosti — a upravo nusproizvodi iz voća i povrća postaju
              simbol te promjene. Umjesto da završe na otpadu, sjemenke, kore i
              pulpe dobijaju novu svrhu. Kroz pažljivo osmišljene procese
              ekstrakcije i prerade, ovi prirodni ostaci pretvaraju se u visoko
              vrijedne kozmetičke sastojke.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              To znači da ono što je nekad bilo neiskorišteno sada postaje
              temelj seruma, krema i ulja koji hrane, štite i obnavljaju kožu.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              2. Prirodna moć voća i povrća
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Nusproizvodi voća i povrća kriju iznenađujuće visoku koncentraciju
              hranjivih tvari. Kora agruma bogata je vitaminom C i
              antioksidansima koji posvjetljuju ten i podstiču stvaranje
              kolagena. Ulje iz sjemenki grožđa djeluje umirujuće i
              regenerativno, dok ekstrakti iz jabuke i šargarepe doprinose
              elastičnosti i svježini kože.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ono što je najvažnije — svi ti sastojci dolaze iz prirodnih izvora
              i ne zahtijevaju dodatnu eksploataciju zemljišta ili resursa. Na
              taj način, kozmetika dobija ne samo novu efikasnost, već i
              ekološku dimenziju.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              3. Od laboratorije do bočice
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Proces pretvaranja nusproizvoda u kozmetičke sastojke počinje u
              laboratoriji. Naučnici pažljivo izdvajaju aktivne komponente
              pomoću metoda hladnog prešanja, fermentacije ili biotehnološke
              obrade.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Cilj je jednostavan: zadržati maksimalnu nutritivnu vrijednost i
              bioaktivnost svake tvari, kako bi finalni proizvod bio što
              učinkovitiji i prirodniji. Ova kombinacija nauke i prirode dovodi
              do formulacija koje njeguju kožu na zdrav i odgovoran način — bez
              štetnih dodataka ili sintetičkih supstanci.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              4. Zašto je ovo važan korak naprijed
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Korištenje nusproizvoda ne znači samo smanjenje otpada, već i
              promjenu načina razmišljanja u industriji ljepote. Radi se o
              stvaranju sistema u kojem ništa ne ide uzalud — svaka sjemenka,
              kora i kap ulja dobija svoju novu svrhu.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Tako nastaju proizvodi koji su dobri i za nas i za planetu. Oni
              donose prirodnu njegu, ali i podsjećaju da se ljepota može
              stvarati odgovorno — kroz pametno korištenje onoga što priroda već
              nudi.
            </p>
          </div>
          <div className='bg-neutral-100 p-5 rounded-xl mt-12'>
            <h2 className='text-xl font-medium transition-colors duration-200 text-left text-foreground'>
              Zaključak
            </h2>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Nusproizvodi su sve češće sastavni dio modernih formulacija jer
              nude prirodne, učinkovite i održive alternative sintetičkim
              sastojcima. Kroz njihovu upotrebu, industrija ljepote dobija novu
              dimenziju — onu koja spaja nauku, kvalitet i odgovornost prema
              okolišu.
            </p>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              To je praktičan i logičan korak naprijed: iskorištavanje onoga što
              već imamo, da bismo stvarali proizvode koji čine dobro i nama i
              prirodi.
            </p>
          </div>
        </div>
      ),
      description:
        'Saznaj kako industrija ljepote koristi nusproizvode poput sjemenki, kore i pulpe za stvaranje učinkovitih, prirodnih formulacija.',
      image: '/img17.jpg',
      date: '7 Nov 2025',
      authorImage: '/emrah.jpg',
      authorName: 'Emrah Isović',
    },
    {
      slug: '3',
      id: 'Upoznajte prirodne sastojke koje koristimo u Scratch Beauty formulacijama.',
      title:
        'Upoznajte prirodne sastojke koje koristimo u Scratch Beauty formulacijama.',
      content: (
        <div className='font-ubuntu md:mt-20 mt-10'>
          <div className='bg-neutral-100 p-5 rounded-xl'>
            <h2 className='text-base font-medium transition-colors duration-200 text-left text-foreground'>
              Sadržaj:
            </h2>
            <ul className='sm:pl-[25px] pl-[5px] mt-[25px]'>
              <li>- Ljepota iz prirodnih izvora</li>
              <li>- Sjemenke grožđa – prirodni eliksir za obnovu kože</li>
              <li>- Kora citrusa – svježina i zaštita</li>
              <li>- Pulpa jabuke i mrkve – hidratacija i vitalnost</li>
              <li>- Priroda i nauka u ravnoteži</li>
              <li>- Zaključak</li>
            </ul>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              1. Ljepota iz prirodnih izvora
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U središtu Scratch Beauty filozofije nalazi se ideja da ljepota
              dolazi iz onoga što priroda već nudi. Umjesto sintetičkih
              sastojaka, biramo ono što bi se inače odbacilo — hranjive
              nusproizvode iz voća i povrća koji imaju izuzetna svojstva za
              njegu kože.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Kroz pažljivu ekstrakciju i održive procese prerade, svaki od tih
              sastojaka postaje temelj naših formulacija — čist, učinkovit i
              odgovoran prema prirodi.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              2. Sjemenke grožđa – prirodni eliksir za obnovu kože
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ulje iz sjemenki grožđa jedno je od naših ključnih sastojaka.
              Dobija se hladnim prešanjem i bogato je antioksidansima, vitaminom
              E i linolnom kiselinom.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ono pomaže u regeneraciji kože, smanjuje upalne procese i vraća
              prirodnu elastičnost. Zbog svoje lagane teksture, odlično se upija
              i ne ostavlja masni trag — savršeno za svakodnevnu njegu svih
              tipova kože.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              3. Kora citrusa – svježina i zaštita
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Nusproizvodi poput kore narandže, limuna i grejpa sadrže snažne
              antioksidanse i prirodne kiseline koje posvjetljuju ten i pomažu u
              borbi protiv nepravilnosti.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ekstrakti iz ovih kora u našim formulacijama djeluju kao prirodni
              booster svježine — vraćaju koži blistav izgled, dok istovremeno
              pomažu u zaštiti od slobodnih radikala i vanjskih uticaja.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              4. Pulpa jabuke i mrkve – hidratacija i vitalnost
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Voćne pulpe, koje se često smatraju otpadom, kriju pravo bogatstvo
              hranjivih tvari. Pulpa jabuke sadrži prirodne šećere i pektine
              koji zadržavaju vlagu, dok je pulpa mrkve bogata beta-karotenom
              koji pomaže regeneraciju i vraća zdrav tonus kože.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Zajedno, ovi sastojci čine temelj naših hidratantnih proizvoda
              koji koži daju svježinu, mekoću i prirodan sjaj.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              5. Priroda i nauka u ravnoteži
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U Scratch Beauty formulacijama spojili smo najbolje iz prirode s
              pažljivo razvijenim naučnim pristupom. Svaki sastojak prolazi
              testiranje i precizno se dozira kako bi sačuvao svoje djelotvorne
              komponente, ali i pružio siguran, stabilan i učinkovit proizvod.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Na taj način, postiže se savršena ravnoteža između prirodnog
              porijekla i moderne formulacije — rezultat su proizvodi koji
              istinski njeguju kožu, bez kompromisa.
            </p>
          </div>
          <div className='bg-neutral-100 p-5 rounded-xl mt-12'>
            <h2 className='text-xl font-medium transition-colors duration-200 text-left text-foreground'>
              Zaključak
            </h2>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Nusproizvodi nisu samo inspiracija, već srce Scratch Beauty
              pristupa. Oni pokazuju da se održiva ljepota može graditi na
              jednostavnoj ideji — iskoristiti ono što priroda već stvara i dati
              mu novi, korisniji oblik.
            </p>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Naši proizvodi nastaju iz poštovanja prema svakom plodu i svakom
              sastojku, kako bi koža dobila njegu koja je istinski prirodna,
              svježa i učinkovita.
            </p>
          </div>
        </div>
      ),
      description:
        'Otkrij koji prirodni nusproizvodi čine srce Scratch Beauty proizvoda i zašto su ključni za zdravu, njegovanu kožu.',
      image: '/img18.jpg',
      date: '8 Nov 2025',
      authorImage: '/merima.jpg',
      authorName: 'Merima Mulahmetović',
    },
    {
      slug: '5',
      id: 'Pogledajte kako nastaje jedan Scratch Beauty proizvod',
      title: 'Pogledajte kako nastaje jedan Scratch Beauty proizvod.',
      content: (
        <div className='font-ubuntu md:mt-20 mt-10'>
          <div className='bg-neutral-100 p-5 rounded-xl'>
            <h2 className='text-base font-medium transition-colors duration-200 text-left text-foreground'>
              Sadržaj:
            </h2>
            <ul className='sm:pl-[25px] pl-[5px] mt-[25px]'>
              <li>- Od ideje do formule</li>
              <li>- Pažljiv odabir sastojaka</li>
              <li>- Proces stvaranja – korak po korak</li>
              <li>- Primjer: hidratantni serum s uljem sjemenki grožđa</li>
              <li>- Sigurnost i trajnost proizvoda</li>
              <li>- Zaključak</li>
            </ul>
          </div>

          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              1. Od ideje do formule
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Svaki Scratch Beauty proizvod započinje jednostavnom idejom —
              stvoriti njegu koja poštuje prirodu i kožu. Naši timovi istražuju
              nusproizvode iz lokalnih izvora voća i povrća, prepoznajući
              njihove vrijedne komponente koje često ostaju neiskorištene.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ideja se zatim pretvara u formulu — kombinaciju prirodnih ulja,
              ekstrakata i biljnih baza koje zajedno čine učinkovitu, stabilnu i
              nježnu kozmetiku.
            </p>
          </div>

          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              2. Pažljiv odabir sastojaka
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Svaki sastojak prolazi proces selekcije prema porijeklu, kvaliteti
              i načinu obrade. Biramo sastojke koji dolaze iz održivih izvora —
              sjemenke, kore i pulpe koje se pažljivo suše, melju ili hladno
              prešaju kako bi sačuvale maksimalnu hranjivu vrijednost.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Nakon toga slijedi faza testiranja kompatibilnosti, gdje se
              ispituje kako različiti sastojci međusobno djeluju i da li zajedno
              postižu željeni efekat na koži.
            </p>
          </div>

          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              3. Proces stvaranja – korak po korak
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Kada su svi sastojci odabrani, prelazimo na laboratorijski dio
              procesa. Ovdje se biljna ulja, vodene baze i prirodni emulgatori
              spajaju pod kontrolisanim uslovima.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Temperatura, pH vrijednost i vrijeme miješanja pažljivo se prate,
              jer upravo u toj preciznosti leži razlika između običnog i
              kvalitetnog proizvoda. Nakon toga slijedi faza odležavanja —
              vrijeme potrebno da se formula “slegne” i postane stabilna za
              upotrebu.
            </p>
          </div>

          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              4. Primjer: hidratantni serum s uljem sjemenki grožđa
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Naš serum s uljem sjemenki grožđa savršen je primjer kako nastaje
              Scratch Beauty proizvod. Počinje ekstrakcijom hladno prešanog ulja
              iz sjemenki grožđa, koje je bogato antioksidansima i vitaminom E.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Zatim se pažljivo miješa s biljnim glicerinom i ekstraktom
              kamilice — kombinacijom koja vlaži, smiruje i čini kožu
              elastičnom. U završnoj fazi dodaje se prirodni konzervans na bazi
              fermentacije koji produžava trajnost, bez potrebe za sintetičkim
              aditivima.
            </p>
          </div>

          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              5. Sigurnost i trajnost proizvoda
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Svaki Scratch Beauty proizvod prolazi mikrobiološka testiranja i
              provjeru stabilnosti kako bi bio siguran za svakodnevnu upotrebu.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Trajnost se povećava korištenjem prirodnih antioksidansa (poput
              vitamina E i ekstrakta ružmarina) te pravilnim načinom čuvanja —
              na suhom, hladnijem mjestu, bez direktnog svjetla. Na taj način
              formula ostaje svježa, a učinak postojan tokom cijelog roka
              upotrebe.
            </p>
          </div>

          <div className='bg-neutral-100 p-5 rounded-xl mt-12'>
            <h2 className='text-xl font-medium transition-colors duration-200 text-left text-foreground'>
              Zaključak
            </h2>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Iza svakog Scratch Beauty proizvoda krije se proces koji spaja
              nauku i umjetnost — od odabira sastojaka do pažljivog miješanja i
              testiranja.
            </p>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Na taj način nastaju formule koje nisu samo prirodne, već i
              sigurne, stabilne i efikasne. Svaki naš proizvod nosi priču o
              održivosti, posvećenosti i poštovanju prema onome što priroda
              stvara.
            </p>
          </div>
        </div>
      ),
      description:
        'Zaviri iza kulisa i otkrij kako nastaje svaki Scratch Beauty proizvod — korak po korak, uz spoj nauke i kreativnosti.',
      image: '/img20.jpg',
      date: '10 Nov 2025',
      authorImage: '/sarah.jpg',
      authorName: 'Sarah Voloder',
    },
    {
      slug: '6',
      id: 'Zavirite u umjetnost kombinovanja sastojaka u prirodnoj kozmetici.',
      title:
        'Zavirite u umjetnost kombinovanja sastojaka u prirodnoj kozmetici.',
      content: (
        <div className='font-ubuntu md:mt-20 mt-10'>
          <div className='bg-neutral-100 p-5 rounded-xl'>
            <h2 className='text-base font-medium transition-colors duration-200 text-left text-foreground'>
              Sadržaj:
            </h2>
            <ul className='sm:pl-[25px] pl-[5px] mt-[25px]'>
              <li>- Umjetnost spajanja prirodnih sastojaka</li>
              <li>- Balans između nauke i prirode</li>
              <li>- Snaga jednostavnosti</li>
              <li>- Kako Scratch Beauty bira savršenu kombinaciju</li>
              <li>- Zaključak</li>
            </ul>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              1. Umjetnost spajanja prirodnih sastojaka
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U svijetu prirodne kozmetike, sve se svodi na ravnotežu — između
              teksture, mirisa, djelovanja i osjećaja na koži. Kombinovanje
              prirodnih sastojaka nije samo proces, već prava umjetnost. Svaka
              biljka, sjemenka ili ekstrakt ima svoju ulogu, a njihov sklad
              određuje koliko će formula biti učinkovita i ugodna za korištenje.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              U Scratch Beauty formulacijama, cilj nije samo stvoriti proizvod
              koji njeguje, već onaj koji pri svakoj upotrebi donosi iskustvo —
              osjećaj povezanosti s prirodom i ravnotežom koju ona pruža.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              2. Balans između nauke i prirode
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Iako oslanjamo na prirodne sastojke, ključ učinkovitosti leži u
              razumijevanju njihove hemije. Nauka nam pomaže da pronađemo
              savršen omjer i stabilnost svake formule, tako da prirodni
              ekstrakti zadrže svoja ljekovita svojstva, a proizvod ostane
              siguran i postojan.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Tako se prirodni potencijal sjemenki, ulja i biljnih ekstrakata
              pojačava kroz pažljivo testiranje i formulaciju — bez kompromisa
              po pitanju čistoće ili kvaliteta.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              3. Snaga jednostavnosti
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Umjesto pretrpanih formulacija sa stotinama sastojaka, Scratch
              Beauty vjeruje u snagu jednostavnosti. Manje je zaista više —
              posebno kada svaki sastojak ima jasno definisanu svrhu i
              maksimalnu čistoću.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Ovakav pristup omogućava koži da diše i regeneriše se prirodno,
              dok istovremeno smanjuje rizik od iritacija i nepotrebnih
              hemijskih reakcija.
            </p>
          </div>
          <div>
            <h2 className='text-base font-medium transition-colors duration-200 mt-12 text-left text-foreground'>
              4. Kako Scratch Beauty bira savršenu kombinaciju
            </h2>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Svaki proizvod počinje istraživanjem – razumijevanjem potrebe
              kože, karakteristika nusproizvoda i načina na koji se mogu
              međusobno nadopunjavati. Zatim slijedi precizno testiranje
              teksture, mirisa i stabilnosti.
            </p>
            <p className='text-base mt-7 leading-6 text-muted-foreground'>
              Cilj je jasan: dobiti formulu koja je prirodna, ali i djelotvorna
              — onu koja pruža njegu, hidrataciju i zaštitu bez narušavanja
              prirodne ravnoteže kože. U svakoj bočici krije se rezultat te
              pažljive kombinacije prirodnih sastojaka i stručnog znanja.
            </p>
          </div>
          <div className='bg-neutral-100 p-5 rounded-xl mt-12'>
            <h2 className='text-xl font-medium transition-colors duration-200 text-left text-foreground'>
              Zaključak
            </h2>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Kombinovanje prirodnih sastojaka nije samo proces razvoja
              proizvoda, već izraz poštovanja prema prirodi. Svaka formula koju
              kreiramo u Scratch Beauty osmišljena je da spoji najbolje iz oba
              svijeta — čistu prirodu i pametnu znanost.
            </p>
            <p className='text-lg mt-7 leading-6 text-muted-foreground'>
              Na taj način, nastaju proizvodi koji njeguju, obnavljaju i
              istovremeno čuvaju okoliš. To je ljepota u svojoj najiskrenijoj
              formi — jednostavna, promišljena i održiva.
            </p>
          </div>
        </div>
      ),
      description:
        'Kako Scratch Beauty bira sastojke? Nauči kako kombinujemo prirodne komponente da dobijemo uravnotežene, efikasne formule.',
      image: '/img21.jpg',
      date: '11 Nov 2025',
      authorImage: '/amar.jpg',
      authorName: 'Amar Prolaz',
    },
  ],
};
