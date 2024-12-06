import React from 'react';

const Top = () => {
    return (
        <section className='max-w-7xl mx-auto px-6 py-16 h-fit max-lg:py-12 max-md:px-5 max-md:py-10 max-sm:px-4 max-sm:py-8'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-12 max-sm:gap-5 max-md:gap-7'>
                <div className='lg:w-1/2'>
                    <h3 className='text-5xl font-caveatBold text-gray-800 leading-tight mb-4 max-md:text-4xl max-sm:text-3xl'>
                        About Venture-I 1.0
                    </h3>
                    <p className='text-base text-gray-600 font-poppinsRegular leading-relaxed max-sm:text-sm'>
                        Venture-I 1.0 brings together industry experts, successful entrepreneurs, and innovation enthusiasts to mentor and guide the participants, helping them to transform ideas into impactful ventures. This mega-event is more than a competition, it's a platform to foster innovation, refine strategies, and develop business models that can disrupt industries and create real-world impact.
                    </p>
                </div>
                <div className='lg:w-1/2'>
                    <img
                        src='/image/top-image.jpeg'
                        alt='about-event'
                        className='w-96 object-cover rounded-lg shadow-lg'
                    />
                </div>
            </div>
        </section>
    );
}

export default Top;
