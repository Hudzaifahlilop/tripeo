import React from 'react'
import {cardsDataTujuan} from '../components/CardsData';
import { Link } from 'react-router-dom';

const KotaTujuan = () => {

    return (
        <section className='py-16 bg-slate-100'>
            <div className="container">
                <div className="w-full ">
                    <div className="max-w-4xl mx-auto">
                        <div class="max-w-3xl mx-auto text-center mb-5">
                            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                                <span className="bg-clip-text text-blue-500 uppercase">Paket Wisata Favorit</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mt-10 justify-evenly">
                    {cardsDataTujuan.map((item, index) => (
                        <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-2">
                            <Link to={item.link} >
                                <div className="group flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 overflow-hidden">
                                    <img
                                        className="w-full h-auto rounded-t-xl transform transition-transform duration-300 group-hover:scale-110"
                                        src={item.img}
                                        alt="Image Description"
                                    />
                                    <div className="flex p-4 md:p-5">
                                        <h3 className="text-lg mx-auto font-bold text-blue-500 dark:text-white group-hover:hidden">
                                            {item.title}
                                        </h3>
                                        <h3 className="hidden mx-auto text-lg font-bold text-blue-500 dark:text-white group-hover:block">
                                            Lihat Selengkapnya
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default KotaTujuan