import React from 'react'
import foto1 from '../assets/1. Ice Breaking.png'
import foto2 from '../assets/2. Fun Games.png'
import foto3 from '../assets/3. Sinergi.png'
import foto4 from '../assets/4. Penginapan.png'
import foto5 from '../assets/5. Music.png.png'
import foto6 from '../assets/6. Fasilitator.png'
import foto7 from '../assets/7. Dinner.png'
import foto8 from '../assets/8. Jeep Tour.png'
import foto9 from '../assets/9. Aula Gathering.png'
import foto10 from '../assets/10. panahan.png'
import foto11 from '../assets/11. Paint Ball.png'
import foto12 from '../assets/12. Rafting.png'

const OutboundEvent = () => {
  return (
    <section id="outbound" className="py-16">
        <div className="container">
            <div className="w-full">
                <h4 className='text-center font-extrabold text-4xl text-blue-500'>Pilihan Wisata Outbound</h4>
                <p className='text-center text-slate-400 text-base max-w-4xl mx-auto mt-4'>Tripeo menyediakan layanan wisata Outbound ke berbagai Kota destinasi wisata, beberapa diantaranya: Bogor, Bandung, Pangandaran, Jogja, Malang dan Bali. </p>
                <p className='text-center text-slate-400 text-base max-w-4xl mx-auto mt-1'>Temukan cara yang menyenangkan untuk mengembangkan keterampilan kepemimpinan, membangun solidaritas tim, atau sekadar menikmati keindahan alam sambil menantang diri? Dengan berbagai aktivitas menarik seperti, rafting, team building games, Fun Offroad dan Nikmati kebersamaan dan petualangan seru melalui Paket Wisata Outbound kami. </p>
            </div>
            <div className="flex flex-wrap justify-evenly mt-10 ">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto1} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto2} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto3} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto4} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto5} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto6} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto7} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto8} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto9} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto10} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto11} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-6">
                    <img src={foto12} alt="" className="w-[400px] mx-auto rounded-lg px-2" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default OutboundEvent