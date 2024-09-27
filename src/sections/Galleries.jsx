import React from 'react'
import galleri1 from '../assets/gal1.jpeg'
import galleri2 from '../assets/gal2.jpeg'
import galleri3 from '../assets/gal3.jpeg'
import galleri4 from '../assets/gal4.jpeg'
import galleri5 from '../assets/gal5.jpeg'
import galleri6 from '../assets/gal6.jpeg'
import galleri7 from '../assets/gal7.jpeg'
import galleri8 from '../assets/gal8.jpeg'
import galleri9 from '../assets/gal9.jpeg'
import galleri10 from '../assets/gal10.jpeg'
import galleri11 from '../assets/gal11.jpeg'
import galleri12 from '../assets/gal12.jpeg'
import galleri13 from '../assets/gal13.jpeg'
import galleri14 from '../assets/gal14.jpeg'
import galleri15 from '../assets/gal15.jpeg'
import galleri16 from '../assets/gal16.jpeg'

const Galleries = () => {
    return (
        <section id="gallery" className='py-8 bg-white'>
            <div className="container">
                {/* <h2 className="text-2xl uppercase font-extrabold text-black text-start ms-4 lg:ms-8 mb-4">Gallery</h2> */}
                <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 justify-center">
                        <img class="w-full h-40 object-cover" src={galleri1} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri2} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri3} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri4} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri5} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri6} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri7} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri8} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri9} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri10} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri11} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri12} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri13} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri14} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri15} alt="Gallery Image" />
                        <img class="w-full h-40 object-cover" src={galleri16} alt="Gallery Image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Galleries