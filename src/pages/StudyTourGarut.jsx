import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataGarut } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/11. Garut.jpg'


const StudyTourGarut = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'Garut'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Garut'}
        paragraf={'Garut, sebuah kota yang terletak di Provinsi Jawa Barat, Indonesia, menawarkan berbagai daya tarik yang memikat pengunjung dari dalam dan luar negeri. Dengan keindahan alamnya, kekayaan budayanya, serta warisan sejarah yang melimpah, Garut memiliki daya tarik yang istimewa.'}
        cardsData={cardsDataGarut}
      />
      <StudyTourFasility title={'wisata garut'}/>
      <CTAStudyTour
        city={'Garut'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourGarut