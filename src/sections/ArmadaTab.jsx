import React, { useState, useEffect } from 'react';

const ArmadaTab = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
        scrollToTab(tabIndex);
    };

    const scrollToTab = (tabIndex) => {
        const tabElement = document.getElementById(`basic-tabs-${tabIndex}`);
        if (tabElement) {
            tabElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with id basic-tabs-${tabIndex} not found.`);
        }
    };

    useEffect(() => {
        // Scroll to the active tab on initial load
        scrollToTab(activeTab);
    }, [activeTab]);

    return (
        <div>
            <div className="w-full bg-white rounded-lg shadow-md dark:bg-neutral-800">
                <div className="border-b border-gray-200 px-4 dark:border-neutral-700">
                    <nav className="flex gap-x-2" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                        {['Specifications', 'Facilities', 'Price Details'].map((tab, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-slate-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 dark:focus:text-blue-500 ${activeTab === index + 1 ? 'font-semibold border-blue-600 text-blue-600' : ''}`}
                                onClick={() => handleTabClick(index + 1)}
                                id={`basic-tabs-item-${index + 1}`}
                                aria-selected={activeTab === index + 1}
                                data-hs-tab={`#basic-tabs-${index + 1}`}
                                aria-controls={`basic-tabs-${index + 1}`}
                                role="tab"
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="mt-3 p-4">
                    <div id="basic-tabs-1" role="tabpanel" aria-labelledby="basic-tabs-item-1" className={activeTab === 1 ? '' : 'hidden'}>
                        <p className="text-slate-600 text-sm dark:text-neutral-400">
                            A large tourist bus with a capacity of 59 passengers is ready to serve your journey with a large group.
                        </p>
                    </div>
                    <div id="basic-tabs-2" role="tabpanel" aria-labelledby="basic-tabs-item-2" className={activeTab === 2 ? '' : 'hidden'}>
                        <ul className="text-sm text-slate-600 mb-3 list-disc list-outside">
                            <li>Full AC</li>
                            <li>Reclining Seat</li>
                            <li>LED TV</li>
                            <li>Microphone</li>
                            <li>Karaoke</li>
                            <li>Charging Port</li>
                            <li>Luggage</li>
                        </ul>
                    </div>
                    <div id="basic-tabs-3" role="tabpanel" aria-labelledby="basic-tabs-item-3" className={activeTab === 3 ? '' : 'hidden'}>
                        <h1 className='text-sm text-slate-600 font-bold mb-3'>Price Details and Conditions for Renting a 59-Seat Tourist Bus</h1>
                        <ul className="text-sm text-slate-600 mb-3 list-disc list-outside">
                            <li>Options for tourist buses based on the number of seats range from 14 seats to 59 seats.</li>
                            <li>The listed rental prices are valid for pick-up in the Jakarta area and surroundings.</li>
                            <li>Rental prices include fuel, driver, and driver's assistant.</li>
                            <li>Prices do not include toll fees, parking fees, meals/tips for the driver and driver's assistant, ferry fees, and other retribution fees.</li>
                        </ul>

                        <h2 className='text-sm text-slate-600 font-bold mb-3'>Notes:</h2>
                        <ul className="text-sm text-slate-600 mb-3 list-disc list-outside">
                            <li>Adjustments to the tourist bus rental prices may occur at any time without prior notice.</li>
                            <li>Advance payment/deposit is at least 30% of the total rental price.</li>
                            <li>The usage time limit within Jakarta city is until 20:00 WIB, if it exceeds the specified time limit, an additional fee of Rp. 250,000/hour will be charged.</li>
                            <li>The usage time limit outside the city is until 23:00 WIB, if it exceeds the specified time limit, an additional fee of Rp. 250,000/hour will be charged.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArmadaTab;
