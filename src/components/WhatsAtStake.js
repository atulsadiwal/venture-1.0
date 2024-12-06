const WhatsAtStake = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-20 max-md:px-5 max-sm:px-4 max-md:py-10 max-sm:py-16">
                <h1 className="text-6xl font-poppinsSemiBold text-center mb-10 max-md:text-5xl max-sm:text-4xl max-md:mb-8 max-sm:mb-5">What's at Stake?</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-md:gap-6 max-sm:gap-4">
                    <div className="p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-md:p-5 max-sm:p-4">
                        <div className="flex justify-center mb-4 max-md:mb-3 max-sm:mb-2">
                            <i className="text-yellow-500 fa-solid fa-cash-register text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-poppinsSemiBold text-center text-yellow-600 max-md:text-lg max-sm:text-base">Cash Prizes for Winners</h2>
                        <p className="text-base font-poppinsRegular text-gray-700 mt-2 text-center max-sm:text-sm">Win exciting cash rewards for the top performers in the challenge.</p>
                    </div>

                    <div className="p-6 bg-blue-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-md:p-5 max-sm:p-4">
                        <div className="flex justify-center mb-4">
                            <i className="text-blue-500 fa-solid fa-certificate text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-poppinsSemiBold text-center text-blue-600 max-md:text-lg max-sm:text-base">Certificates of Participation</h2>
                        <p className="text-base font-poppinsRegular text-gray-700 mt-2 text-center max-sm:text-sm">Receive a certificate to acknowledge your participation in this prestigious event.</p>
                    </div>

                    <div className="p-6 bg-green-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-md:p-5 max-sm:p-4">
                        <div className="flex justify-center mb-4">
                            <i className="text-green-500 fa-solid fa-user-tie text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-poppinsSemiBold text-center text-green-600 max-md:text-lg max-sm:text-base">Mentorship from Top Entrepreneurs</h2>
                        <p className="text-base font-poppinsRegular text-gray-700 mt-2 text-center max-sm:text-sm">Get valuable mentorship and insights from successful entrepreneurs in the field.</p>
                    </div>

                    <div className="p-6 bg-purple-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow max-md:p-5 max-sm:p-4">
                        <div className="flex justify-center mb-4">
                            <i className="text-purple-500 fa-solid fa-briefcase text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-poppinsSemiBold text-center text-purple-600 max-md:text-lg max-sm:text-base">Opportunities to Pitch to Investors</h2>
                        <p className="text-base font-poppinsRegular text-gray-700 mt-2 text-center max-sm:text-sm">Present your idea to potential investors and secure funding opportunities.</p>
                    </div>
                </div>

                <div className="mt-12 text-center max-lg:mt-10 max-md:mt-8 max-sm:mt-6">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors max-md:px-5 max-sm:px-4">
                        Join Now and Start Competing!
                    </button>
                </div>
            </div>
        </>
    );
}

export default WhatsAtStake;
