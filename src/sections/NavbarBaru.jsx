import React, { useState } from 'react';
import Logo from '../assets/STEMPEL copy.png';
import { Link } from 'react-router-dom';

const NavbarBaru = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setOpenDropdown(null); // Close dropdowns when the main menu is toggled
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
        setOpenDropdown(null); // Close dropdowns when a link is clicked
    };

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <header className="flex lg:px-10 bg-blue-500 shadow-md w-full font-sans min-h-[70px] tracking-wide fixed z-50 bg-opacity-100" >
            <div className="flex flex-wrap items-center justify-between px-10 py-1 gap-4 w-full">
                <Link to="/">
                    <img src={Logo} alt="logo" className="w-16" />
                </Link>

                <div id="collapseMenu" className={`${isMenuOpen ? 'block' : 'hidden'} lg:block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50`}>
                    <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-blue-500 p-3" onClick={handleToggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-white" viewBox="0 0 320.591 320.591">
                            <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                            <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                        </svg>
                    </button>

                    <ul className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-blue-500 max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 ${isMenuOpen ? '' : 'hidden'}`}>
                        <li className="hidden max-lg:block">
                            <a href="#">
                                <img src={Logo} alt="logo" className="w-28" />
                            </a>
                        </li>
                        <li className=" max-lg:py-3">
                            <Link to="/" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                Home
                            </Link>
                        </li>
                        
                        <li className="group  max-lg:py-3 relative">
                            <Link
                                to="#"
                                className="hover:text-secondary text-white text-[15px] font-bold lg:hover:fill-secondary block"
                                onClick={() => handleDropdownToggle('digitalAds')}
                            >
                                Paket Tour
                                <svg width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </Link>
                            <ul
                                className={`absolute shadow-lg bg-blue-500 space-y-3 ms-5 mt-3 py-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 ${openDropdown === 'digitalAds' ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden px-6 transition-all duration-500`}
                            >
                                <li className=" ">
                                    <Link to="/custom-trip" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Kustom Trip
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-bandung" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Bandung
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-yogyakarta" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Yogyakarta
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-bali" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Bali
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-malang" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Malang
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-dieng" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Dieng
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-semarang" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Semarang
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-tegal" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Guci
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-pangandaran" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Pangandaran
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-cirebon" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Cirebon
                                    </Link>
                                </li>
                                <li className=" ">
                                    <Link to="/studytour-garut" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                        Garut
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="max-lg: max-lg:py-3">
                            <Link to="/outbound" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                Outbound
                            </Link>
                        </li>
                        <li className="max-lg: max-lg:py-3">
                            <Link to="/sewa-armada" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                Sewa Armada
                            </Link>
                        </li>
                        <li className="max-lg: max-lg:py-3">
                            <Link to="/gallery" className="hover:text-secondary text-white text-[15px] font-bold block" onClick={handleLinkClick}>
                                Galleri
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* whatsappnavbar */}
                <a href="https://wa.me/6281234500382" target="_blank" rel="noopener noreferrer" aria-label="Hubungi kami">
                    <div className="hidden lg:block">
                        <div className="hover:scale-75">
                            <svg viewBox="0 0 24 24" width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#FFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#FFF"></path> </g></svg>
                        </div>
                    </div>
                </a>

                <button id="toggleOpen" className={`lg:hidden z-[100] rounded-full p-3 ${isMenuOpen ? 'hidden' : ''}`} onClick={handleToggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-white" viewBox="0 0 384.97 384.97">
                        <path d="M12.408 92.84h360.153c6.87 0 12.408-5.537 12.408-12.408V12.408C384.97 5.537 379.433 0 372.561 0H12.408C5.537 0 0 5.537 0 12.408v68.024c0 6.87 5.537 12.408 12.408 12.408zM372.561 155.726H12.408C5.537 155.726 0 161.264 0 168.134v68.023c0 6.87 5.537 12.408 12.408 12.408h360.153c6.87 0 12.408-5.537 12.408-12.408v-68.023c0-6.87-5.537-12.408-12.408-12.408zM372.561 292.115H12.408C5.537 292.115 0 297.653 0 304.523v68.024c0 6.87 5.537 12.408 12.408 12.408h360.153c6.87 0 12.408-5.537 12.408-12.408v-68.024c0-6.87-5.537-12.408-12.408-12.408z" data-original="#000000"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default NavbarBaru;
