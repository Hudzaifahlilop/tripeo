import React from 'react'
import trusted from '../assets/1.png'
import experienced from "../assets/2.png"
import excellent from "../assets/3.png"
import murah from "../assets/4.png"
import mudah from "../assets/5.png"
import costumable from "../assets/6.png"


const Cards = [
    {
        img: trusted,
        title: 'Terpercaya',
        paragraph: 'Sejak 2017 Tripeo dipercaya menangani perjalanan rombongan wisata domestik baik instansi, swasta, maupun sekolah sampai dengan saat ini.',
    },
    {
        img: experienced,
        title: 'Berpengalaman',
        paragraph: 'Dengan Tim yang berpengalaman lebih dari 10 tahun dibidangnya, kami terus mengembangkan diri memberikan pelayanan terbaik.',
    },
    {
        img: excellent,
        title: 'Excellent Service',
        paragraph: 'Kepuasan pelanggan menjadi tanggung jawab dan prioritas kami, dengan pelayanan yang ramah, cepat, dan flexibel kami persembahkan untukmu.',
    },
    {
        img: murah,
        title: 'Murah',
        paragraph: 'Murah bukan berarti murahan, selalu ada opsi terbaik untuk berwisata sesuai budget.',
    },
    {
        img: mudah,
        title: 'Mudah',
        paragraph: 'Tidak perlu repot menyiapkan segalanya dalam perjalanan wisata seperti: menyiapkan makan, biaya parkir, Tips Crew, Biaya tol, Kordinasi peserta dll. kami siapkan paket perjalanan wisatamu.',
    },
    {
        img: costumable,
        title: 'Costumable',
        paragraph: 'Pastikan kamu mendapatkan goals dari perjalananmu bersama kami dengan pilihan variasi paket perjalanan wisata',
    },
];

const WhyChooseUs = () => {
    return (
        <section id='chooseUs' className='py-16 bg-amber-600'>
            <div className="container">
                <div className="w-full px-4 mb-10">
                    <div className="max-w-4xl mx-auto">
                        <div class="max-w-3xl mx-auto text-center mb-2">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                                <span className="bg-clip-text font-extrabold text-white">Kenapa Memilih Tripeo ?</span>
                                {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-white"></span> */}
                            </h1>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-wrap px-2 justify-center">
                    {Cards.map((item, index) => (
                        <div className="w-1/2 lg:w-1/6 mb-4 px-2">
                            <div key={index} class="flex flex-col h-full">
                                <img class="w-20 rounded-t-xl mx-auto mt-5" src={item.img} alt="Image Description" />
                                <div class="py-2 md:py-2">
                                    <h3 class="text-base text-center font-bold text-slate-100 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p class="mt-2 text-sm text-center text-slate-100 dark:text-slate-100">
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs