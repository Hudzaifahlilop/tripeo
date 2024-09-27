import React from 'react'
import Hero from '../sections/Hero'
import WhyChooseUs from '../sections/WhyChooseUs'
import KotaTujuan from '../sections/KotaTujuan'
import CTA from '../sections/CTA'
import TentangKami from '../sections/TentangKami'
import Carapemesanan from '../sections/Carapemesanan'
import Footer from '../sections/Footer'
import ClientCarousel from '../sections/ClientCarousel'
import StudyTourBandung from './StudyTourBandung'
import Navbar from '../sections/Navbar'
import StudyTourFasility from '../sections/StudyTourFasility'
import CallToAction from '../sections/CallToAction'

const Home = () => {
  return (
    <div>
        <Hero />
        <WhyChooseUs />
        <StudyTourFasility />
        <KotaTujuan />
        {/* <CTA /> */}
        <Carapemesanan />
        <TentangKami />
        <CallToAction title={'Perlu KONSULTASI atau ingin CUSTOM PAKET TOUR ?'} />
        <ClientCarousel />
    </div>
  )
}

export default Home