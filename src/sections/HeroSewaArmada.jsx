import React from 'react'
import Button from '../components/Button'
import HeroBackground from '../assets/HeroArmada.jpg';

const HeroSewaArmada = () => {
    return (
        <section id='sewaarmada' className='py-36 bg-cover bg-center group h-screen'  style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${HeroBackground})`,
            // zIndex: 10, 
        }}>
            <div className="container">
                <div className="w-full inset-0 py-10 flex flex-col items-center">
                    <h4 className='text-amber-600 font-extrabold text-5xl uppercase text-center'>SEWA ARMADA</h4>
                    <p className='text-amber-600 font-medium text-base mt-4 mx-auto text-center max-w-xl'>Kami menyediakan berbagai macam armada: Big Bus, Medium Bus, Luxury Bus, Hiace, dan banyak lagi. Kami juga menawarkan layanan rental mobil, baik lepas kunci maupun dengan sopir..</p>
                    <a href='https://wa.me/6281234500382' className='flex justify-center mt-6'>
                        <Button tittle={'Pesan Sekarang'} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSewaArmada