import React from 'react';
import { Blockquote } from 'flowbite-react';



const features = [
  { name: 'Göl erişimi', description: 'Evinizde özel bir göl erişimi keyfi yaşayın. Doğanın güzellikleriyle çevrili, huzur dolu anlar için ideal bir ortam.' },
  { name: 'Wifi', description: 'Wi-Fi ile bağlantınızı kesintisiz sürdürün' },
  { name: 'Tesis bünyesinde ücretsiz otopark', description: 'Rahatlığınız için tesis bünyesinde ücretsiz otopark imkanı sunuyoruz. Araç park etme endişesini unutun.' },
  { name: 'Özel jakuzi', description: 'Kişisel jakuzinizde rahatlayın. Doğal yağlar ile işlenmiş, özel bir dokunuşla tasarlanmış.' },
  { name: 'Binada çamaşır makinesi: Ücretsiz', description: 'Binada ücretsiz çamaşır makinesi, konforunuz için. İhtiyacınız olan her an pratik bir çözüm.' },
  { name: 'Mutfak', description: 'Doğal malzemelerden yapılmış, her biri benzersiz tane ve renge sahip mutfak eşyaları ile kendi yemeklerinizi yapın.' },
  { name: 'Çalışma Alanı', description: 'Doğal malzemelerle tasarlanmış çalışma alanında verimliliğinizi artırın.' },
  { name: 'Özel Havuz', description: 'Sezonluk olarak kullanılabilen, 24 saat açık ve ısıtmalı özel havuzda serinleyin' },
  { name: 'Televizyon', description: 'Televizyonun keyfini çıkarın.' },
  { name: 'Sitedeki güvenlik kameraları', description: 'Sitedeki güvenlik kameraları ile konaklamanız boyunca huzur içinde hissedin.' },
];
const Home = () => {
  return (

    <div>
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(img/hero-img.jpeg)', }}>
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className=" mt-12">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-5xl text-white">Villa Anahtarı Sizi<br></br> Bekliyor: Tatilinizi<br></br> Kilitleyin!</h1>
            <button type="button" class=" items-center  justify-center w-full bg-gray-600  text-white py-3 px-4 inline-flex gap-x-2 text-sm font-semibold rounded-full border border-transparent    hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none ">
              Hadi Tatilini Başlat
            </button>
          </div>
        </div>


      </section>

      <section >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div className="grid grid-cols-1 grid-rows-1 gap-1 sm:gap-6 lg:gap-8 relative">
            <img
              src="img/jakuzi-uzaktan.webp"
              alt="Üst resim"
              className="rounded-lg bg-gray-100"
              style={{ zIndex: 2 }}
            />
            <img
              src="img/jakuzi-yakından.webp"
              alt="Alt resim"
              className="rounded-lg bg-gray-100"
              style={{ zIndex: 1 }}
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Her Anı size Değer </h2>
            <p className="mt-4 text-gray-500">
              Hoş geldiniz! Tatilinizin keyfini çıkarmanız için özenle tasarlanmış Villa Karam'da  sizi
              ağırlamaktan mutluluk duyuyoruz. Modern konforun
              ve sıcak misafirperverliğin buluştuğu bu evde, unutulmaz anılar bir adım daha yakınınızda. Villa Karam size neler Sunmakta.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </section>

      <section className="bg-cover bg-center h-screen">
        <div>
          <Blockquote>
            <figure className="mx-auto max-w-screen-md text-center">
              <svg
                className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 14"
              >
                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
              </svg>
              <Blockquote>
                <p className="text-2xl font-medium italic text-gray-900 dark:text-black">
                 "The place is amazing, quit felt like an escape from 
                 all stress, the host is very helpful and friendly, 
                 i highly recommend the place and the host.
                  5 stars and even more. "</p>
              </Blockquote>
              <figcaption className="mt-6 flex items-center justify-center space-x-3">
                {/* Assuming Avatar is a component that accepts 'rounded', 'size', 'img', and 'alt' as props */}
                <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <cite className="pr-3 font-medium text-gray-900 dark:text-white">Rawan</cite>
                  <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Guest From Airbnb</cite>
                </div>
              </figcaption>
            </figure>
          </Blockquote>
        </div>
      </section>

      <section>
        <div>




        </div>


      </section>

    </div>
  );
};

export default Home;