import React from 'react'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataDieng } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/6. Dieng.jpg'


const StudyTourDieng = () => {
  return (
    <div>
        <HeroStudyTour 
        background={backgroundHero}
        city={'Dieng'}
        quotes={'"The streets of Bandung are a symphony sung by vehicles and the laughter of youth."'}
        />
        <StudyTourPackage
        city={'Dieng'}
        paragraf={'Daya tarik wisata di Dataran Tinggi Dieng mencakup wisata alam seperti Bukit Sunrise dan Telaga Warna, atraksi budaya berupa tradisi masyarakat seperti ritual/upacara Ujungan dan Ruwat Rambut Gembel, serta pariwisata budaya berupa situs purbakala kompleks candi Hindu yang menjadi ikon pariwisata di Dieng.'}
        cardsData={cardsDataDieng}
      />
      <StudyTourFasility title={'wisata dieng'} />
      <CTAStudyTour
        city={'Dieng'} />
      <ClientCarousel />
    </div>
  )
}

export default StudyTourDieng