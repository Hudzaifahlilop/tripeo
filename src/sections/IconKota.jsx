import React from 'react'
import icon1 from '../assets/A.png'
import icon2 from '../assets/B.png'
import icon3 from '../assets/C.png'
import icon4 from '../assets/D.png'
import icon5 from '../assets/E.png'

const IconKota = () => {
  return (
    <section id="iconkota" className="py-4">
        <div className="container">
            <div className="flex flex-wrap px-4 justify-center gap-4">
                <img src={icon1} alt="ikonkota" className='w-[70px] bg-center rounded-xl'/>
                <img src={icon2} alt="ikonkota" className='w-[70px] bg-center rounded-xl'/>
                <img src={icon3} alt="ikonkota" className='w-[70px] bg-center rounded-xl'/>
                <img src={icon4} alt="ikonkota" className='w-[70px] bg-center rounded-xl'/>
                <img src={icon5} alt="ikonkota" className='w-[70px] bg-center rounded-xl'/>
            </div>
        </div>
    </section>
  )
}

export default IconKota