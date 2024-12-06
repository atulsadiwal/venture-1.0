"use client";

import React, { useState, useEffect } from 'react'
import RegistrationForm from './RegistrationForm'

const HomePage = () => {
    const [registrationForm, setRegistrationForm] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleClose = () => {
        setRegistrationForm(false);
    };

    // useEffect(() => {
    //     const storedStatus = localStorage.getItem("isRegistered");
    //     if (storedStatus === "true") {
    //         setIsRegistered(true);
    //     }
    // }, []);

    const handleRegistrationSuccess = () => {
        setIsRegistered(true);
        setRegistrationForm(false);
        localStorage.setItem("isRegistered", "true");
    };

    const handleOpenRegistrationForm = () => {
        setRegistrationForm(false); // Close if open
        setTimeout(() => setRegistrationForm(true), 0); // Open after resetting
    };

    return (
        <div className="w-full px-8 bg-gradient-to-br from-[#FFF3D9] via-[#FFD6E1] to-[#DDA0DD] max-sm:px-4 max-md:px-6">
            <div className="mx-auto max-w-[1400px] py-8">
                <div className="flex max-[500px]:flex-wrap items-center gap-4 py-4">
                    <div className="w-72 h-16 rounded-full grid place-items-center">
                        <img
                            src='/image/collab-logo.png'
                            alt='logo-of-fie-and-gims-collaboration'
                            className='w-full h-16'
                        />
                    </div>
                    <div className="bg-fuchsia-950/35 text-white font-novaSemi px-4 rounded-full text-base py-1 hover:bg-fuchsia-950/30 max-sm:text-sm">
                        Venture-I 1.0 →
                    </div>
                </div>

                <div className='flex justify-between items-center max-lg:flex-col max-md:flex-col max-sm:flex-col'>
                    <div className="my-32 max-w-4xl max-lg:my-16 max-md:my-12 max-sm:my-10">
                        <h1 className="text-7xl font-poppinsSemiBold max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
                            Unleash Your
                            <br />
                            Entrepreneurial Potential
                        </h1>
                        <p className="mt-6 text-xl text-black/80 max-w-3xl font-poppinsMedium max-md:text-lg max-sm:text-base max-md:mt-5 max-sm:mt-4">
                            The Federation of Industrial Education (FIE), in collaboration with GIMS, Greater Noida/Delhi-NCR, proudly announces the launch of Venture-I 1.0, an Entrepreneurship Development Boot Camp.
                        </p>
                        <div className="mt-8 flex gap-4 max-md:mt-6 max-sm:mt-5">
                            {!isRegistered && ( // Conditionally render the Register button
                                <button
                                    onClick={handleOpenRegistrationForm}
                                    className="rounded-full text-lg px-8 py-2 bg-indigo-950 font-poppinsRegular max-sm:text-sm max-md:text-base text-white text-center hover:bg-primary-dark max-sm:px-4 max-md:px-6"
                                >
                                    Register Now
                                </button>
                            )}
                            {registrationForm && (
                                <RegistrationForm
                                    onClose={handleClose}
                                    onSuccess={handleRegistrationSuccess} // Pass success handler
                                />
                            )}
                            <a
                                href="/pdf/schedule-creative.pdf"
                                className="rounded-full px-8 text-lg py-2 bg-white/15 font-poppinsRegular max-sm:text-sm max-md:text-base ring-[#D15052]/15 shadow-[inset_0_0_2px_1px_#ffffff4d] border-transparent text-black hover:bg-black/5 max-md:px-6 max-sm:px-4"
                                target='_blank'
                            >
                                Schedule
                            </a>
                        </div>
                    </div>
                    <div className='max-w-3xl'>
                        <img
                            src='/image/about-venture.jpeg'
                            alt='about-event'
                            className='w-full h-[500px] max-sm:h-[350px]'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage