"use client";

import React, { useState, useEffect } from 'react'
import RegistrationForm from './RegistrationForm'

const HomePage = () => {
    const [registrationForm, setRegistrationForm] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleClose = () => {
        setRegistrationForm(false);
    };

    useEffect(() => {
        const storedStatus = localStorage.getItem("isRegistered");
        if (storedStatus === "true") {
            setIsRegistered(true);
        }
    }, []);

    const handleRegistrationSuccess = () => {
        setIsRegistered(true);
        setRegistrationForm(false);
        localStorage.setItem("isRegistered", "true");
    };

    return (
        <div className="w-full px-8 bg-gradient-to-br from-[#FFF3D9] via-[#FFD6E1] to-[#DDA0DD] max-sm:px-4 max-md:px-6">
            <div className="mx-auto max-w-7xl py-8">
                <div className="flex items-center gap-4 py-4">
                    <div className="w-10 h-10 rounded-full grid place-items-center">
                        <h2>Logo</h2>
                    </div>
                    <div className="bg-fuchsia-950/35 text-white font-novaSemi px-4 rounded-full text-sm py-1 hover:bg-fuchsia-950/30">
                        Venture-I 1.0 →
                    </div>
                </div>
                <div className="my-32 max-w-4xl max-sm:my-10">
                    <h1 className="text-7xl font-poppinsSemiBold max-lg:text-6xl max-md:text-5xl max-sm:text-4xl">
                        Unleash Your
                        <br />
                        Entrepreneurial Potential
                    </h1>
                    <p className="mt-6 text-xl text-black/80 max-w-3xl font-cursiveMedium max-sm:text-lg max-md:mt-5 max-sm:mt-4">
                        The Federation of Industrial Education (FIE), in collaboration with GIMS, Greater Noida/Delhi-NCR, proudly announces the launch of Venture-I 1.0, an Entrepreneurship Development Boot Camp.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 max-md:mt-6 max-sm:mt-5">
                        {!isRegistered && ( // Conditionally render the Register button
                            <button
                                onClick={() => setRegistrationForm(true)}
                                className="rounded-full px-8 py-2 bg-indigo-950 font-poppinsRegular text-white text-center hover:bg-primary-dark"
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
                        {/* <a
                    href="#"
                    className="rounded-full px-8 py-2 bg-white/15 font-poppinsRegular ring-[#D15052]/15 shadow-[inset_0_0_2px_1px_#ffffff4d] border-transparent text-black hover:bg-black/5"
                >
                    Know More
                </a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage