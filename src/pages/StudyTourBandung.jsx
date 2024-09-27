import React from 'react'
import HeroBackground from '../assets/paket study tour.png'
import tripeoLogo from '../assets/tripeologo.png'
import Button from '../components/Button'
import HeroStudyTour from '../sections/HeroStudyTour'
import StudyTourPackage from '../sections/StudyTourPackage'
import { cardsDataBandung } from '../components/CardsData'
import StudyTourFasility from '../sections/StudyTourFasility'
import CTAStudyTour from '../sections/CTAStudyTour'
import ClientCarousel from '../sections/ClientCarousel'
import backgroundHero from '../assets/2. Bandung.jpg'

const StudyTourBandung = () => {
    return (
        <div>
            <HeroStudyTour
                background={backgroundHero}
                city={'Bandung'}
            />
            <StudyTourPackage
                city={'Bandung'}
                paragraf={'Bandung adalah tujuan wisata yang memiliki daya tarik tersendiri bagi wisatawan dikarenakan terdapat berbagai macam tujuan wisata yang terdapat di Bandung. Anda bisa melakukan wisata bersama keluarga, gathering, ada juga beberapa destinasi yang cocok untuk dikunjungi untuk berbelanja.'}
                cardsData={cardsDataBandung}
            />
            <StudyTourFasility title={'wisata bandung'} />
            <CTAStudyTour
            city={'Bandung'} />
            <ClientCarousel />
            
        </div>
    )
}

export default StudyTourBandung