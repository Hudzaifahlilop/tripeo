import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import CallToAction from '../sections/CallToAction'
import StudyTourFasility from '../sections/StudyTourFasility'
import backgroundHero from '../assets/PAKET OUTBOND COMPRESS.jpg'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataGarut } from '../components/CardsData'
import OutboundEvent from '../sections/OutboundEvent'
import ClientCarousel from '../sections/ClientCarousel'
import IconKota from '../sections/IconKota'

const Outbound = () => {
  return (
    <div>
        <HeroStudyTour
        background={backgroundHero}
        city={'OUTBOuND Trip'}
        icon={<IconKota />}
        quotes={'Sesuaikan Kebutuhan Tripmu Bersama Kami'} />
        <CallToAction title={'Perlu KONSULTASI atau ingin CUSTOM PAKET OUTBOUND ?'} />
        <OutboundEvent />
        {/* <IconKota /> */}
        <ClientCarousel />
    </div>
  )
}

export default Outbound