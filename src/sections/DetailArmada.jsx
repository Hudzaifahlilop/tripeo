import React from 'react'
import bus from '../assets/bus-pariwisata-59-seat-termurah.webp'
import ArmadaTab from './ArmadaTab'

const DetailArmada = () => {
  return (
    <section id="detailarmada" className="py-16">
        <div className="container">
            <div className="flex flex-wrap  justify-center">
                <div className="w-full lg:w-1/2 border-4 border-blue-100 rounded-xl p-6">
                    <p className='uppercase font-bold text-center mb-2 text-blue-500 text-xl'>Big Bus 59 Seat</p>
                    <img src={bus}  alt="bus" className='w-[500px] mx-auto rounded-xl shadow-lg' />
                </div>
                <div className="w-full lg:w-1/2 px-6 mx-auto">
                    <ArmadaTab />
                </div>
            </div>
        </div>
    </section>
  )
}

export default DetailArmada