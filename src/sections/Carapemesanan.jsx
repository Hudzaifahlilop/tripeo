import React from 'react'
import Cara1 from '../assets/A7.png'
import Cara2 from '../assets/a8.png'
import Cara3 from '../assets/a9.png'

const Carapemesanan = () => {
    return (
        <section id='carapemesanan' className='bg-amber-600 py-10'>
            <div className="container">
                <div className="w-full">
                    <div class="max-w-3xl mx-auto text-center mb-5">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                            <span className="bg-clip-text text-slate-100 uppercase">Ambil Paketmu</span>
                        </h1>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/3 mb-5'>
                            <img src={Cara1} className='mx-auto' width={150} height={150} alt="" />
                            <h4 className='font-bold text-slate-100 text-center'>Pilih Destinasi Wisata</h4>
                            <p className='text-slate-100 text-center mt-2'>hubungi kami untuk mendapatkan pilihan wisata yang tepat untukmu</p>
                        </div>
                        <div className='w-full lg:w-1/3 mb-5'>
                            <img src={Cara2} className='mx-auto' width={150} height={150} alt="" />
                            <h4 className='font-bold text-slate-100 text-center'>Lakukan Pembayaran</h4>
                            <p className='text-slate-100 text-center mt-2'>Lakukan pembayaran Hanya ke rekening perusahaan</p>
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <img src={Cara3} className='mx-auto' width={150} height={150} alt="" />
                            <h4 className='font-bold text-slate-100 text-center'>Nikmati Perjalanan</h4>
                            <p className='text-slate-100 text-center mt-2'>Dapatkan perjalanan yang aman, nyaman didampingi tim professional kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Carapemesanan