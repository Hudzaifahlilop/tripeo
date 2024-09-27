import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataSemarang } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/7. Semarang.jpg'


const StudyTourSemarang = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'semarang'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Semarang'}
        paragraf={'Salah satu ciri khas Kota Semarang adalah banyaknya kuliner khas yang menjadi daya tarik para wisatawan. Selain itu, Semarang juga dikenal sebagai kota wisata karena memiliki berbagai keindahan alam dan tempat rekreasi. Banyak bangunan ikonik di Semarang yang membedakannya dari daerah lainnya. Selain Lawang Sewu, Kota Semarang terkenal dengan beragam wisata sejarah lainnya, seperti Kota Lama Semarang, Tugu Muda, Simpang Lima, Museum Kereta Api Ambarawa, dan Candi Gedong Songo.'}
        cardsData={cardsDataSemarang}
      />
      <StudyTourFasility title={'wisata semarang'} />
      <CTAStudyTour
        city={'Semarang'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourSemarang