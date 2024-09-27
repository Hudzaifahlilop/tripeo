import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import { cardsDataBali } from '../components/CardsData'
import backgroundHero from '../assets/4. Bali.jpg'


const StudyTourBali = () => {
  return (
    <div>
      <HeroStudyTour
        background={backgroundHero}
        city={'Bali'}
        quotes={'"The streets of Bali are a symphony sung by vehicles and the laughter of youth."'}
      />
      <StudyTourPackage
        city={'Bali'}
        paragraf={'Selain keragaman budaya dan keunikan seni yang ada di Bali, pemandangan alam yang indah dan khas juga menjadi salah satu daya tarik utama yang membuat Bali menarik untuk dikunjungi oleh para turis.'}
        cardsData={cardsDataBali}
      />
      <StudyTourFasility title={'wisata Bali'} />
      <CTAStudyTour
        city={'Bali'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourBali