import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataTegal } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/8.guci tegal.jpg'


const StudyTourTegal = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'Guci tegal'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Tegal'}
        paragraf={'Kawasan Wisata Guci di Tegal menyuguhkan spot wisata alam yang menawan dan beragam, sehingga banyak diminati. Wisata ini terletak di Desa Guci, Kecamatan Bumijawa, tepatnya di kaki Gunung Slamet, Jawa Tengah.'}
        cardsData={cardsDataTegal}
      />
      <StudyTourFasility title={'wisata tegal'} />
      <CTAStudyTour
        city={'Tegal'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourTegal