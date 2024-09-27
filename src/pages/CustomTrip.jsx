import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import CallToAction from '../sections/CallToAction'
import StudyTourFasility from '../sections/StudyTourFasility'
import Banner from '../sections/Banner'
import backgroundHero from '../assets/1. custom.jpg'


const CustomTrip = () => {
  return (
    <div>
        <HeroStudyTour
        background={backgroundHero}
        city={'Custom Trip'}
        quotes={'"Sesuaikan Kebuutuhan Tripmu Bersama Kami"'} />
        <CallToAction title={'Perlu KONSULTASI atau ingin CUSTOM PAKET TOUR ?'} />
        <StudyTourFasility title={'Wisata Custom'} />
    </div>
    
  )
}

export default CustomTrip