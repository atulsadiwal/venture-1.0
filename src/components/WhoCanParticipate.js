"use client";

import React from 'react';
import { motion } from "framer-motion";

const WhoCanParticipate = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
                <div className="w-full max-w-7xl px-3 py-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
                            <span className="text-transparent font-caveatBold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                                Who Can Participate?
                            </span>
                        </h1>

                        <p className="mt-6 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                            Whether you're a{" "}
                            <span className="font-semibold text-pink-400">student entrepreneur</span>, a{" "}
                            <span className="font-semibold text-yellow-400">working professional with a dream</span>,
                            or someone with a <span className="font-semibold text-teal-400">passion for innovation</span>,
                            this event is your <span className="underline decoration-pink-500">launchpad</span>!
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 mt-8 text-lg font-semibold text-white transition-transform bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg shadow-lg hover:shadow-2xl"
                        >
                            Join the Event
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12 flex justify-center"
                    >
                        <img
                            src="/image/participate.webp"
                            alt="Participation Illustration"
                            className="w-full max-w-md sm:max-w-lg"
                        />

                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default WhoCanParticipate;
