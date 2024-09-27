// ClientCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo1 from '../assets/Logo CSUL(M) 400 x 1058 Pix.jpg'
import Logo2 from '../assets/Logo_Official_SidoMuncul._Tbk.svg.png'
import Logo3 from '../assets/CAP CV 2 copy.png'
import Logo4 from '../assets/46103b5b-cb93-4cd6-97da-64570e73717e copy.png'
import Logo5 from '../assets/Layer 1.png'
import Logo7 from '../assets/Layer 0.png'
import Logo9 from '../assets/pngtree-letter-gk-initial-gk-logo-design-best-design-png-image_5582605.png'
import Logo10 from '../assets/pt-pharos.png'
import Logo11 from '../assets/logo darul ulum.png'
import Logo12 from '../assets/clientsekolah.jpeg'
import Logo13 from '../assets/clientBCA.jpeg'
import Logo8 from '../assets/png-clipart-bank-mandiri-logo-credit-card-bank-text-logo.png'
import Logo6 from '../assets/277560707_354565723354148_8981733929114114673_n copy.png'

const ClientCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 3000 ms = 3 seconds
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const clients = [
        {
            name: 'Client 2',
            logo: Logo2,
        },
        {
            name: 'Client 3',
            logo: Logo3,
        },
        {
            name: 'Client 4',
            logo: Logo5,
        },
        {
            name: 'Client 4',
            logo: Logo6,
        },
        {
            name: 'Client 4',
            logo: Logo7,
        },
        {
            name: 'Client 4',
            logo: Logo9,
        },
        {
            name: 'Client 4',
            logo: Logo4,
        },
        {
            name: 'Client 4',
            logo: Logo10,
        },
        {
            name: 'Client 4',
            logo: Logo11,
        },
        {
            name: 'Client 4',
            logo: Logo12,
        },
        {
            name: 'Client 4',
            logo: Logo13,
        },
    ];

    return (
        <section id='carousel' className='pb-16 bg-white'>
            <div className="container">
                <div className="max-w-7xl mx-auto py-8 px-2 sm:px-6 lg:px-4">
                    <h2 className="text-4xl uppercase font-extrabold text-blue-500 text-center mb-8">Thanks To</h2>
                    <Slider {...settings}>
                        {clients.map((client, index) => (
                            <div key={index} className="px-2">
                                <div className="flex justify-center items-center bg-white ">
                                    <img src={client.logo} alt={client.name} className="h-20" />
                                </div>
                                {/* <p className="text-center mt-4 text-lg font-semibold">{client.name}</p> */}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>

    );
};

export default ClientCarousel;
