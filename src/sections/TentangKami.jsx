import React from 'react'
import profilImage from '../assets/dummy2.png'
import Button from '../components/Button'

const TentangKami = () => {
    return (
        <section id='tentangtripeo' className='py-16 bg-white'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-5">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/f7UHB3oL2a8"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="w-full lg:w-1/2 px-5 my-auto">
                        <h3 className='font-bold text-lg lg:text-3xl mb-2'>Tentang <span className='text-blue-500'>Tripeo</span></h3>
                        <p className='font-medium text-slate-500 text-justify text-base mb-10'>
                            TRIPEO merupakan tour & event organizer profesional dan berpengalaman sejak tahun 2017. Kami telah membantu banyak perusahaan dan traveler dengan memberikan pelayanan terbaik untuk semua tour & event mereka. Menyediakan berbagai pilihan paket mulai dari family tour, corporate gathering, meeting, outbound, study tour dan berbagai pilihan paket menarik lainnya.
                        </p>
                        <a href="https://wa.me/6281234500382">
                            <Button tittle={'Hubungi Kami'} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TentangKami