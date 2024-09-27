import React from 'react';
import HeroBanner from '../assets/MK UMUM OK COMPRESS_021.jpg';
import StudyTourFasility from './StudyTourFasility';

const Banner = () => {
  return (
    <section
      id='banner'
      className="bg-cover bg-center group h-screen"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Menambahkan properti ini agar background tetap diam saat discroll
      }}
    >
      <div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-4">
                {/* Announcement Banner */}
                <div className="flex justify-center mb-10 lg:mb-7">
                    <p className="uppercase p-2 font-bold inline-block text-white text-sm bg-blue-500">
                        Let's Explore
                    </p>
                </div>
                {/* End Announcement Banner */}

                {/* Title */}
                <div className="max-w-3xl text-center mx-auto">
                    <div className="block">
                        <h1 className="font-extrabold text-4xl lg:text-8xl uppercase text-white">
                            Lorem, ipsum.
                        </h1>
                    </div>
                </div>
                {/* End Title */}

                {/* Quote */}
                <div className="max-w-2xl text-center mx-auto">
                    <p className="rounded-xl py-1 text-xs lg:text-sm font-bold text-black bg-amber-600 italic overflow-hidden max-w-full">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et incidunt officiis doloremque in qui vitae libero! Vero iure quae minima, asperiores aliquam iste mollitia veniam ratione ipsum illum laudantium corporis!
                    </p>
                </div>
            </div>
    </section>
  );
};

export default Banner;
