import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataCirebon } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/10. Cirebon.jpg'

const StudyTourCirebon = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'cirebon'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Cirebon'}
        paragraf={'Wisata Cirebon memiliki nilai budaya dan sejarah yang tinggi. Hal ini terlihat dari berbagai objek wisata yang ada, seperti Keraton Kanoman, Keraton Kasepuhan, Keraton Kacirebonan, dan Keraton Kaprabonan. Selain itu, terdapat juga Makam Sunan Gunung Jati, Goa Sunyaragi, serta wisata kuliner Cirebon yang merupakan salah satu daya tarik utama.'}
        cardsData={cardsDataCirebon}
      />
      <StudyTourFasility title={'wisata cirebon'}/>
      <CTAStudyTour
        city={'Cirebon'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourCirebon