const WhatsAtStake = () => {
    return (
        <>
            <div className="container mx-auto px-6 py-32">
                <h1 className="text-4xl font-caveatBold text-center mb-10">What's at Stake?</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 bg-yellow-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex justify-center mb-4">
                            <i className="text-yellow-500 fa-solid fa-cash-register text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-yellow-600">Cash Prizes for Winners</h2>
                        <p className="text-gray-700 mt-2 text-center">Win exciting cash rewards for the top performers in the challenge.</p>
                    </div>

                    <div className="p-6 bg-blue-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex justify-center mb-4">
                            <i className="text-blue-500 fa-solid fa-certificate text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-blue-600">Certificates of Participation</h2>
                        <p className="text-gray-700 mt-2 text-center">Receive a certificate to acknowledge your participation in this prestigious event.</p>
                    </div>

                    <div className="p-6 bg-green-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex justify-center mb-4">
                            <i className="text-green-500 fa-solid fa-user-tie text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-green-600">Mentorship from Top Entrepreneurs</h2>
                        <p className="text-gray-700 mt-2 text-center">Get valuable mentorship and insights from successful entrepreneurs in the field.</p>
                    </div>
                    
                    <div className="p-6 bg-purple-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex justify-center mb-4">
                            <i className="text-purple-500 fa-solid fa-briefcase text-4xl"></i>
                        </div>
                        <h2 className="text-xl font-semibold text-center text-purple-600">Opportunities to Pitch to Investors</h2>
                        <p className="text-gray-700 mt-2 text-center">Present your idea to potential investors and secure funding opportunities.</p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Join Now and Start Competing!
                    </button>
                </div>
            </div>
        </>
    );
}

export default WhatsAtStake;
