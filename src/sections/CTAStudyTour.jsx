import React from 'react'
import Button from '../components/Button'
import explore from "../assets/TripeoBanner2.png"

const CTAStudyTour = ({city}) => {
    return (
        <section id='calltoactionstudytour' className='py-4 bg-white'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 my-auto ">
                        <div className="px-5">
                            <h4 className='font-extrabold text-blue-500 uppercase text-center text-xl'>Yuk explore <span className='text-amber-600 text-3xl'>{city}</span> BERSAMA <span className='text-amber-600 text-3xl'>TRIPEO</span> sekarang !</h4>
                            <p className='mt-5 text-slate-500 font-medium'>Temukan pesona alam dan keindahan Kota {city} dengan paket wisata eksklusif dari Tripeo. Nikmati pengalaman tak terlupakan bersama teman dan keluarga di kota yang penuh dengan kejutan. 
                            <br/>
                            <br/>
                            Pesan sekarang dan biarkan kami yang mengurus semuanya untuk Anda!
                            </p>
                            <div className="w-full flex justify-center mt-10">
                            <Button tittle={'Hubungi Kami Sekarang'} />
                            </div>                          
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="px-5">
                            <img className='w-[400px] shadow-lg h-[400px] bg-cover object-cover mx-auto rounded-xl mt-10 lg:mt-0' src={explore} alt="exploreindonesia" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTAStudyTour