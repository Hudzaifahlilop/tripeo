import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import { cardsDataYogyakarta } from '../components/CardsData'
import StudyTourPackage from '../sections/StudyTourPackage'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/3. jogja.jpg'


const StudyTourJogja = () => {
  return (
    <div>
      <HeroStudyTour
        background={backgroundHero}
        city={'Yogyakarta'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
      />
      <StudyTourPackage
        city={'Yogyakarta'}
        paragraf={'Selain keindahan alam dan budaya yang menarik, ramahnya masyarakat Jogja juga menjadi salah satu alasan mengapa kota ini selalu dirindukan untuk liburan. Masyarakat Jogja dikenal dengan keramah-tamahannya terhadap para wisatawan.'}
        cardsData={cardsDataYogyakarta}
      />
      <StudyTourFasility title={'wisata yogyakarta'} />
      <CTAStudyTour
        city={'Yogyakarta'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourJogja