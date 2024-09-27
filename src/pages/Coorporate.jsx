import React from 'react'
import HeroBackground from '../assets/underconstruction.png';

const Coorporate = () => {
  return (
    <section
            id="hero"
            className="bg-cover bg-center group h-screen flex items-center"
            style={{
                backgroundImage: `url(${HeroBackground})`,
            }}
        >
            <div className="max-w-[80rem]  mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-4">               
                <div className="max-w-3xl text-center mx-auto">
                    <div className="block">
                        <p className='text-base font-medium text-center text-white uppercase'>this page is</p>
                        <h1 className="font-extrabold text-4xl lg:text-8xl uppercase text-white">
                            Under construction
                        </h1>
                    </div>
                </div>
               
            </div>
        </section>
  )
}

export default Coorporate