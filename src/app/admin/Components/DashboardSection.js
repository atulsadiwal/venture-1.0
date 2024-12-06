import useRegistrationData from "@/hooks/useRegistrationData";
import { ArrowUp, BookOpen, GraduationCap, LayoutDashboard, Users } from "lucide-react";
import { API_NODE_URL } from "../../../../config";

const DashboardSection = () => {
    const { registrationData } = useRegistrationData(API_NODE_URL);

    console.log(registrationData);
    
    return (
        <div className="grid grid-cols-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
            <div className="bg-white border border-gray-200 p-6 shadow-md rounded-2xl">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg font-poppinsMedium">Total Students</span>
                    <span className="flex items-center min-h-12 min-w-12 bg-gray-200 rounded-full">
                        <Users className="p-3 w-full h-full text-blue-600" />
                    </span>
                </div>
                <h2 className="mt-5 text-2xl font-poppinsSemiBold">{registrationData?.length}</h2>
                <div className="flex justify-between">
                    <span className="text-green-600 text-sm flex items-center">+2% from last month <ArrowUp className="w-4 h-4 text-green-600" /></span>
                </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 shadow-md rounded-2xl">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg font-poppinsMedium">New Applications</span>
                    <span className="flex items-center min-h-12 min-w-12 bg-gray-200 rounded-full">
                        <GraduationCap className="p-3 w-full h-full text-blue-600" />
                    </span>
                </div>
                <h2 className="mt-5 text-2xl font-poppinsSemiBold">173</h2>
                <div className="flex justify-between">
                    <span className="text-green-600 text-sm flex items-center">+12% from last week <ArrowUp className="w-4 h-4 text-green-600" /></span>
                </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 shadow-md rounded-2xl">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg font-poppinsMedium">Course Completion Rate</span>
                    <span className="flex items-center min-h-12 min-w-12 bg-gray-200 rounded-full">
                        <BookOpen className="p-3 w-full h-full text-blue-600" />
                    </span>
                </div>
                <h2 className="mt-5 text-2xl font-poppinsSemiBold">89%</h2>
                <div className="flex justify-between">
                    <span className="text-green-600 text-sm flex items-center">+4% from last semester <ArrowUp className="w-4 h-4 text-green-600" /></span>
                </div>
            </div>
            <div className="bg-white border border-gray-200 p-6 shadow-md rounded-2xl">
                <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-lg font-poppinsMedium">Active Courses</span>
                    <span className="flex items-center min-h-12 min-w-12 bg-gray-200 rounded-full">
                        <LayoutDashboard className="p-3 w-full h-full text-blue-600" />
                    </span>
                </div>
                <h2 className="mt-5 text-2xl font-poppinsSemiBold">320</h2>
                <div className="flex justify-between">
                    <span className="text-green-600 text-sm flex items-center">+7 new courses this month <ArrowUp className="w-4 h-4 text-green-600" /></span>
                </div>
            </div>
        </div>
    )
}

export default DashboardSection