import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoTripeo from '../assets/STEMPEL copy.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu open/closed
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };
    

    return (
        <header className="inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-blue-500 bg-opacity-100 fixed">
            <nav className="relative max-w-[66rem] w-full ps-0 pe-0 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto" aria-label="Global">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80" aria-label="Preline">
                        <img className="w-16 h-auto py-1" width="116" height="32" src={logoTripeo} alt="" />
                    </Link>
                    {/* End Logo */}

                    <div className="md:hidden">
                        <button
                            type="button"
                            className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
                            onClick={handleMenuToggle}
                            aria-controls="navbar-collapse"
                            aria-label="Toggle navigation"
                        >
                            <svg className={`hs-collapse-open:hidden flex-shrink-0 size-4 ${isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg className={`hs-collapse-open:block flex-shrink-0 size-4 ${!isMenuOpen ? 'hidden' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Collapse */}
                <div id="navbar-collapse" className={`hs-collapse ${isMenuOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow md:block`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                        <Link to="/" className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-neutral-300" onClick={handleLinkClick}>Home</Link>
                        {/* Paket Tour */}
                        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] py-3 ps-px sm:px-3 md:py-4">
                            <button type="button" className="flex items-center w-full text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400">
                                Paket Tour
                                <svg className="flex-shrink-0 ms-1 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>
                            <div className="hs-dropdown-menu md:duration-[150ms] opacity-95 md:w-48 hidden z-10 bg-blue-500 md:shadow-md rounded-lg p-2">
                                <Link to="/custom-trip" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>Custom Trip</Link>
                                <Link to="/studytour-bandung" className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>Bandung</Link>
                                <Link to={'/studytour-yogyakarta'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Yogyakarta
                                </Link>
                                <Link to={'/studytour-bali'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Bali
                                </Link>
                                <Link to={'/studytour-malang'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Malang
                                </Link>
                                <Link to={'/studytour-dieng'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Dieng
                                </Link>
                                <Link to={'/studytour-semarang'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Semarang
                                </Link>
                                <Link to={'/studytour-tegal'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Guci Tegal
                                </Link>
                                <Link to={'/studytour-pangandaran'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Pangandaran
                                </Link>
                                <Link to={'/studytour-cirebon'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Cirebon
                                </Link>
                                <Link to={'/studytour-garut'} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>
                                    Garut
                                </Link>
                                {/* More links */}
                            </div>
                        </div>
                        {/* Studi Tour End */}

                        <Link to="/outbound" className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>Outbound</Link>
                        <Link to="/sewa-armada" className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>Sewa Armada</Link>
                        <Link to="/gallery" className="py-3 ps-px sm:px-3 md:py-4 text-sm text-white font-bold hover:text-amber-400 focus:outline-none focus:text-amber-400" onClick={handleLinkClick}>Gallery</Link>

                        <div>
                            <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-slate-100 font-bold text-sm text-neutral-800 rounded-full focus:outline-none" href="https://wa.me/6281234500382">
                                Contact us
                            </a>
                        </div>
                    </div>
                </div>
                {/* End Collapse */}
            </nav>
        </header>
    );
};

export default Navbar;
