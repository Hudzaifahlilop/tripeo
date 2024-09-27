// src/components/StudyTourPackage.js
import React from 'react';

const StudyTourPackage = ({ city, paragraf, cardsData }) => {
    return (
        <section id='paketstuditour' className='py-16 bg-white'>
            <div className="container">
                <div className="w-full py-2 px-4">
                    <div className="px-2 text-center">
                        <h4 className='font-extrabold text-blue-500 uppercase text-2xl lg:text-3xl'>Pilihan Paket Wisata <span className='text-amber-600 lg:text-4xl'>{city}</span></h4>
                        <p className='max-w-4xl mx-auto mt-2 text-slate-400 text-base'>{paragraf}</p>
                        <p className='max-w-2xl mx-auto mt-2 text-slate-400 text-base'>Berikut Kami rekomendasikan pilihan paket wisata <span className='font-bold text-amber-600'>{city}</span> yang cocok untuk <span className='font-bold text-slate-700'>Grup, Sekolah. Instansi</span> atau <span className='font-bold text-slate-700'>Rombongan Wisata</span></p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-10 justify-evenly">
                    {cardsData.map((item, index) => (
                        <div key={index} className="group w-full md:w-1/2 lg:w-1/3  mb-4 px-2">
                            <a href="https://wa.me/6281234500382" target="_blank" rel="noopener noreferrer">
                                <div className=" flex flex-col h-full bg-slate-100 border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-hidden">
                                    <img
                                        className="w-full h-auto rounded-t-xl transform transition-transform duration-300 group-hover:scale-110"
                                        src={item.img}
                                        alt={item.title}
                                    />
                                    <h3 className="text-lg mt-4 mx-auto font-bold text-blue-500 dark:text-white group-hover:hidden">
                                        {item.paket}
                                    </h3>
                                    <div className="flex p-4 md:p-5 mx-auto">
                                        <h3 className="text-lg text-center font-bold text-blue-500 dark:text-white group-hover:hidden">
                                            {item.title}
                                        </h3>

                                        <div className="hidden mt-4 text-lg font-bold text-amber-600 dark:text-white group-hover:block">
                                            Hubungi KAMI
                                        </div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StudyTourPackage;
