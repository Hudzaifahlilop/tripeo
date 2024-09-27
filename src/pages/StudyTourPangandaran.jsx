import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataPangandaran } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/9. Pangandaran.jpg'


const StudyTourPangandaran = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'Pangandaran'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Pangandaran'}
        paragraf={'Selain pantai, Pangandaran juga menawarkan wisata alam yang menakjubkan, seperti sungai-sungai yang ideal untuk body rafting, river tubing, dan canyoning.'}
        cardsData={cardsDataPangandaran}
      />
      <StudyTourFasility title={'wisata pangandaran'} />
      <CTAStudyTour
        city={'Pangandaran'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourPangandaran