"use client";

import { API_NODE_URL } from '../../../../config';
import useRegistrationData from '@/hooks/useRegistrationData';

const RegistrationList = () => {
  const { registrationData, loading, error } = useRegistrationData(API_NODE_URL);

  if (error) return <p>Error: {error}</p>;

  const ShimmerTable = () => {
    return (
      <div className="animate-pulse">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="h-8 bg-gray-200 my-2 rounded"></div>
        ))}
      </div>
    );
  };

  return (
    <div className='w-full'>
      <div className="bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg p-4 mb-5 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex text-white items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list"> <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><circle cx="4" cy="6" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="18" r="1" /></svg>
            <h2 className="font-poppinsBold text-xl text-white tracking-wide">
              Registration List
            </h2>
          </div>
        </div>
      </div>
      <div className='overflow-y-auto h-[85vh] bg-white rounded-lg shadow-md p-6'>
        {loading ? (
          <ShimmerTable />
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Email</th>
                <th className="border px-4 py-2 text-left">City</th>
                <th className="border px-4 py-2 text-left">Gender</th>
                <th className="border px-4 py-2 text-left">DOB</th>
                <th className="border px-4 py-2 text-left">Qualification</th>
                <th className="border px-4 py-2 text-left">Mobile</th>
                <th className="border px-4 py-2 text-left">Verified</th>
              </tr>
            </thead>
            <tbody>
              {registrationData.length > 0 ? (
                registrationData.map((event) => (
                  <tr key={event._id}>
                    <td className="border px-4 py-2">{event.name}</td>
                    <td className="border px-4 py-2">{event.email}</td>
                    <td className="border px-4 py-2">{event.city}</td>
                    <td className="border px-4 py-2">{event.gender}</td>
                    <td className="border px-4 py-2">
                      {event?.dob?.split("T")[0]}
                    </td>
                    <td className="border px-4 py-2">
                      {event.highestQualification}
                    </td>
                    <td className="border px-4 py-2">
                      {event.mobile}
                    </td>
                    <td className="border px-4 py-2">
                      {event.isVerified ? "🟢 Verified" : "🔴 Not Verified"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center p-4">
                    No registration data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default RegistrationList