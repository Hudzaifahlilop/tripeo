import React from 'react';
import IconKota from './IconKota';

const HeroStudyTour = ({ city, quotes, background, icon }) => {
    return (
        <section
            id="hero"
            className="relative bg-cover bg-center group h-screen"
            style={{
                backgroundImage: `url(${background})`,
                backgroundAttachment: 'fixed', // Agar background tetap diam saat discroll
                backgroundRepeat: 'no-repeat', // Agar gambar tidak diulang
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-4 ">
                {/* Announcement Banner */}
                <div className="flex justify-center mb-10 lg:mb-7">
                    <p className="uppercase p-2 font-bold inline-block text-white text-sm bg-blue-500">
                        Let's Explore
                    </p>
                </div>
                {/* End Announcement Banner */}

                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                    <h1 className="font-extrabold text-4xl lg:text-8xl uppercase text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                        {city}
                    </h1>
                </div>
                {/* End Title */}

                {/* Quote */}
                {/* <div className="max-w-2xl text-center mx-auto">
                    <p className="rounded-xl py-1 text-xs lg:text-sm font-bold text-slate-100 bg-amber-600 italic overflow-hidden max-w-full">
                        {quotes}
                    </p>
                </div> */}
                <div className="px-4 mx-auto">
                    {icon}
                </div>
            </div>
        </section>
    );
};

export default HeroStudyTour;
