import React from 'react'
import Galleries from '../sections/Galleries'

const Gallery = () => {
  return (
    <section id="gallery" className="py-36">
        <div className="container">
            <div className="w-full px-4">
                <h4 className='font-extrabold text-blue-500 text-center text-4xl'>SEE OUR GALLERIES</h4>
            </div>
            <Galleries />
        </div>
    </section>
  )
}

export default Gallery