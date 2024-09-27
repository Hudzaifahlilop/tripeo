import React from 'react'
import Button from '../components/Button'

const CallToAction = ({ title }) => {
  return (
    <section id='calltoaction' className='py-16 bg-blue-500'>
      <div className="container">
        <div className="flex justify-center items-center">
          <h4 className='font-bold text-slate-100 me-4 text-xl lg:text-2xl'>{title}</h4>
          <a href="https://wa.me/6281234500382">
            <Button tittle={'Tanya Kami'} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction