import React from 'react'
import { cardsDataArmada } from '../components/CardsData'

const ArmadaPilihan = () => {
  return (
    <section id="pilihanarmada" className="py-16">
      <div className="container">
        <div className="w-full">
          <h4 className='uppercase text-blue-500 text-center font-extrabold text-2xl'>Pilihan Armada Terbaik Kami</h4>
        </div>
        <div className="flex flex-wrap justify-evenly mt-8">
          {cardsDataArmada.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mt-4 hover:opacity-90" >
              <div className="px-4">
                <img src={item.img} alt="armada" className='w-300 rounded-lg' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArmadaPilihan