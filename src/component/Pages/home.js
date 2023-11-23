import React from 'react';
import Carousel from '../carousel'; 


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


     <section>
      <Carousel/>
     </section>

    </div>
  );
};

export default Home;