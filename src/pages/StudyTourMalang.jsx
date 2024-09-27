import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import StudyTourFasility from '../sections/StudyTourFasility'
import { cardsDataMalang } from '../components/CardsData'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/5. Malang.jpg'


const StudyTourMalang = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'Malang'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Malang'}
        paragraf={'Malang, sebuah kota yang terletak di Jawa Timur, Indonesia, telah lama dijuluki sebagai "Kota Bunga". Julukan ini tidak lepas dari pesona dan keindahan alam yang dimiliki kota ini. Secara geografis, Malang dikelilingi oleh pegunungan yang subur dan memiliki iklim yang sejuk.'}
        cardsData={cardsDataMalang}
      />
      <StudyTourFasility title={'wisata malang'}/>
      <CTAStudyTour
        city={'Malang'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourMalang