import React from 'react'
import Button from '../components/Button'
import CTAimage from '../assets/dummy.png'

const CTA = () => {
    return (
        <section id='calltoaction' className='py-16 bg-white'>
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-5">
                        <img src={CTAimage} alt="tripeo" />
                    </div>
                    <div className="w-full lg:w-1/2 px-5">
                        <h3 className='font-bold text-lg lg:text-3xl mb-2'>Tingkatkan Kenyamanan Perjalanan Bisnis Anda Bersama <span className='text-blue-500'>Tripeo</span></h3>
                        <p className='font-medium text-slate-500 text-base mb-5'>Ciptakan perjalanan impian perusahaan Anda dengan kami! Mulai dari penjadwalan harian hingga urusan administrasi, tim kami siap mendukung setiap detail perjalanan Anda dengan mudah. Percayakan kepada kami untuk membuat pengalaman perjalanan bisnis Anda menjadi lebih lancar.
                        <br/>
                        <br/>
                            Pesan tiket pesawat, hotel, sewa mobil, hingga pengaturan perjalanan lainnya untuk melengkapi kebutuhan bisnis Anda bersama agen perjalanan yang terpercaya!</p>
                        <Button tittle={'Hubungi Kami Sekarang'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA