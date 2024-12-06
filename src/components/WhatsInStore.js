"use client";

import React from "react";
import { motion } from "framer-motion";

const WhatsInStore = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-blue-900 to-gray-900 py-32 max-lg:py-20 max-md:py-16 max-sm:py-12">
                <div className="flex items-center justify-center text-white">
                    <div className="w-full max-w-5xl px-6 mx-auto max-md:px-5 max-sm:px-4">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center text-6xl max-md:text-5xl max-sm:text-4xl"
                        >
                            <span className="text-transparent font-poppinsSemiBold bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
                                What's in Store?
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-4 text-center text-2xl text-gray-300 font-poppinsRegular max-md:text-xl max-sm:text-lg"
                        >
                            Explore the exciting features of Venture-I 1.0:
                        </motion.p>

                        <div className="grid gap-6 mt-12 md:grid-cols-2 max-md:mt-8 max-sm:mt-6 max-md:gap-5 max-sm:gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer max-md:p-5 max-sm:p-4"
                            >
                                <h2 className="text-xl font-poppinsMedium text-white max-sm:text-base max-md:text-lg">Interactive Sessions</h2>
                                <p className="text-base mt-2 text-gray-200 max-sm:text-sm">
                                    Engage in live discussions and learn directly from experts.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-green-500 to-teal-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer max-md:p-5 max-sm:p-4"
                            >
                                <h2 className="text-xl font-poppinsMedium text-white max-sm:text-base max-md:text-lg">Workshop & Training</h2>
                                <p className="text-base mt-2 text-gray-200 max-sm:text-sm">
                                    Gain hands-on experience with exclusive training programs.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer max-md:p-5 max-sm:p-4"
                            >
                                <h2 className="text-xl font-poppinsMedium text-white max-sm:text-base max-md:text-lg">Networking Opportunities</h2>
                                <p className="text-base mt-2 text-gray-200 max-sm:text-sm">
                                    Build connections with industry leaders and peers.
                                </p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="p-6 bg-gradient-to-tr from-red-500 to-pink-500 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer"
                            >
                                <h2 className="text-xl font-poppinsMedium text-white max-sm:text-base max-md:text-lg">
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

            <section className='h-[40vh] bg-BG1 max-sm:bg-center bg-cover bg-no-repeat bg-fixed'></section>
        </>
    );
}

export default WhatsInStore;
