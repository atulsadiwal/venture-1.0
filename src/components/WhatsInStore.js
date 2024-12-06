"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsInStore = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-blue-900 to-gray-900 py-32">
                <div className="flex items-center justify-center text-white">
                    <div className="w-full max-w-5xl px-6 mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center text-4xl font-bold sm:text-5xl lg:text-6xl"
                        >
                            <span className="text-transparent font-caveatBold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                                What's in Store?
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-4 text-center text-lg sm:text-xl md:text-2xl text-gray-300 font-poppinsRegular"
                        >
                            Explore the exciting features of Venture-I 1.0:
                        </motion.p>

                        <div className="grid gap-6 mt-12 md:grid-cols-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                            >
                                <h2 className="text-xl font-semibold text-white">Interactive Sessions</h2>
                                <p className="mt-2 text-gray-200">
                                    Engage in live discussions and learn directly from experts.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-green-500 to-teal-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                            >
                                <h2 className="text-xl font-semibold text-white">Workshop & Training</h2>
                                <p className="mt-2 text-gray-200">
                                    Gain hands-on experience with exclusive training programs.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                            >
                                <h2 className="text-xl font-semibold text-white">Networking Opportunities</h2>
                                <p className="mt-2 text-gray-200">
                                    Build connections with industry leaders and peers.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-red-500 to-pink-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                            >
                                <h2 className="text-xl font-semibold text-white">
                                    National Level Business Plan Competition
                                </h2>
                                <p className="mt-2 text-gray-200">
                                    Compete with the best minds across the country.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-[40vh] bg-BG1 bg-cover bg-no-repeat bg-fixed'></section>
        </>
    );
}

export default WhatsInStore;
