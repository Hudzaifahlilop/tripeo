import React, { useState } from 'react';


const TabArmada = ({ bus, title, spesifikasi, seat }) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <div className="rounded-2xl overflow-hidden p-0 max-w-7xl mx-auto shadow-lg">
                    <div className="flex flex-col lg:flex-row">
                        <div className="relative h-64 sm:h-80 w-full lg:h-auto lg:w-1/3 xl:w-2/5 flex-none">
                            <img
                                src={bus}
                                alt="bus"
                                className="absolute inset-0 h-full w-full max-w-[80%] lg:w-3/4 object-cover mx-auto lg:mx-0"
                            />
                            <span className="absolute block inset-x-0 bottom-0 lg:hidden lg:inset-y-0 lg:right-auto bg-gradient-to-t lg:bg-gradient-to-r from-white to-transparent w-full h-16 lg:h-full lg:w-16"></span>
                            <div className="relative flex justify-end lg:justify-start flex-wrap text-white text-sm lg:text-xl font-bold me-9 mt-2 lg:m-4">
                                <div className="bg-green-500 px-2 py-1 rounded">Special Offer</div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="p-2 lg:pe-8">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-blue-500 mb-8">
                                        {title}
                                    </h3>
                                    {/* <a href="#" className="text-gray-400 hover:text-gray-800 p-1">
                                        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </a> */}
                                </div>
                                <div className="relative">
                                    <header className="flex items-end text-sm">
                                        <button
                                            className={`border border-b-0 px-3 py-1 text-sm text-blue-500 focus:outline-none rounded-tl-md ${activeTab === 1 ? 'font-semibold' : ''}`}
                                            onClick={() => setActiveTab(1)}
                                        >
                                            Spesifikasi
                                        </button>
                                        <button
                                            className={`border border-b-0 px-3 py-1 text-blue-500 focus:outline-none ${activeTab === 2 ? 'font-semibold' : ''}`}
                                            onClick={() => setActiveTab(2)}
                                        >
                                            Fasilitas
                                        </button>
                                        <button
                                            className={`border border-b-0 px-3 py-1 text-blue-500 focus:outline-none rounded-tr-md ${activeTab === 3 ? 'font-semibold' : ''}`}
                                            onClick={() => setActiveTab(3)}
                                        >
                                            Detail harga
                                        </button>
                                    </header>
                                    <div className="border p-2 h-48 overflow-y-auto rounded-b-xl rounded-tr-xl" id="tabs-contents">
                                        {activeTab === 1 && (
                                            <div>
                                                <p className="text-slate-600 text-sm dark:text-neutral-400">
                                                    {spesifikasi}
                                                </p>
                                            </div>
                                        )}
                                        {activeTab === 2 && (
                                            <div>
                                                <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                                                    <li>Full AC</li>
                                                    <li>Reclining Seat</li>
                                                    <li>LED TV</li>
                                                    <li>Microphone</li>
                                                    <li>Karaoke</li>
                                                    <li>Charging Port</li>
                                                    <li>Bagasi</li>
                                                </ul>
                                            </div>
                                        )}
                                        {activeTab === 3 && (
                                            <div>
                                                <h1 className='text-sm text-slate-600 font-bold mb-3'>Rincian Harga dan Syarat Penyewaan Bus Wisata {seat} seat</h1>
                                                <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                                                    <li>Opsi bus wisata berdasarkan jumlah kursi berkisar antara 14 kursi hingga 59 kursi.</li>
                                                    <li>Harga sewa yang terdaftar berlaku untuk penjemputan di area Jakarta dan sekitarnya.</li>
                                                    <li>Harga sewa sudah termasuk bahan bakar, sopir, dan asisten sopir.</li>
                                                    <li>Harga belum termasuk biaya tol, biaya parkir, makan/uang tips untuk sopir dan asisten sopir, biaya ferry, serta biaya retribusi lainnya.</li>
                                                </ul>

                                                <h2 className='text-sm text-slate-600 font-bold mb-3'>Catatan:</h2>
                                                <ul className="text-sm text-slate-600 mb-3 list-disc list-inside">
                                                    <li>Penyesuaian harga sewa bus wisata dapat terjadi kapan saja tanpa pemberitahuan sebelumnya.</li>
                                                    <li>Uang muka/deposit minimal adalah 30% dari total harga sewa.</li>
                                                    <li>Waktu batas penggunaan di dalam kota Jakarta adalah sampai pukul 20:00 WIB. Jika melebihi batas waktu yang ditentukan, biaya tambahan sebesar Rp. 250.000/jam akan dikenakan.</li>
                                                    <li>Waktu batas penggunaan di luar kota adalah sampai pukul 23:00 WIB. Jika melebihi batas waktu yang ditentukan, biaya tambahan sebesar Rp. 250.000/jam akan dikenakan.</li>
                                                </ul>
                                            </div>

                                        )}
                                    </div>
                                </div>
                                <div className="flex justify-end items-center text-sm font-bold mt-8 gap-4">
                                    <a className="text-blue-700 border border-blue-300 hover:border-blue-700 px-4 py-1 rounded" href="https://wa.me/6281234500382">Hubungi Kami</a>
                                    {/* <div className="text-red-500 font-normal text-xs px-4 py-1 rounded">Report</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabArmada;
