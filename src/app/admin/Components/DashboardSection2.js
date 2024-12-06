import React from 'react'
import ApplicationTable from './ApplicationTable';

const DashboardSection2 = () => {
    return (
        <div className="mt-8 grid grid-cols-5 gap-8">
            <div className='col-span-5 bg-white border border-gray-200 p-6 shadow-md rounded-2xl'>
                <ApplicationTable />
            </div>
        </div>
    )
}

export default DashboardSection2