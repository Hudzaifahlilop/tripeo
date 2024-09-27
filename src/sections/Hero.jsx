import React from 'react'
import HeroBackground from '../assets/hero_compress.jpg'
import tripeoLogo from '../assets/tripeologo.png'
import Button from '../components/Button'
import Custom from "../assets/custom.png"

const Hero = () => {
    return (
        <section id="hero" class="bg-cover bg-center group h-screen"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBackground})`,
                // zIndex: 10, 
            }}>
            <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
                {/* <!-- Announcement Banner --> */}
                {/* <div class="flex justify-center">
                    <a class="group inline-block bg-white/10 hover:bg-white/10 border border-white/10 p-1 ps-4 rounded-full shadow-md focus:outline-none focus:ring-1 focus:ring-gray-600" href="../figma.html">
                        <p class="me-2 inline-block text-white text-sm">
                            Our Package is Live.
                        </p>
                        <span class="group-hover:bg-white/10 py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/10 font-semibold text-white text-sm">
                            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </span>
                    </a>
                </div> */}
                {/* <!-- End Announcement Banner --> */}

                {/* <!-- Title --> */}
                <div class="max-w-3xl text-center mx-auto">
                    <div class="block">
                        <img src={tripeoLogo} alt="tipeologo" width={400} height={400} className='mx-auto' />
                    </div>
                </div>
                {/* <!-- End Title --> */}

                <div class="max-w-3xl text-center mx-auto">
                    <p class="text-lg text-gray-200 font-bold">Biro & Event Organizer Perjalanan Pariwisata
                    </p>
                    <p class="text-lg text-gray-200 mt-4"> 
                        TRIPEO hadir sebagai solusi berwisata dengan Menyediakan layanan wisata domestik yang terjangkau, pelayanan prima, fasilitas yang nyaman, dan dipandu dengan TIM Profesional yang mendampingi perjalanan anda.</p>
                </div>

                {/* <!-- Buttons --> */}
                <div className='flex justify-center'>
                    {/* <Button tittle={'Custom Tripmu'}/> */}
                    <a href="https://wa.me/6281234500382">
                        <img src={Custom} className='w-80 transition-transform duration-100 hover:scale-125' alt="" />
                    </a>

                </div>
                {/* <!-- End Buttons --> */}
            </div>
        </section>
    )
}

export default Hero