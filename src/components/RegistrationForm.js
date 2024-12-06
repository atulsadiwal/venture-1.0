import React, { useState, useRef, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Step1 from './Step1';
import Step2 from './Step2';
import OTPVerification from './OTPVerification';
import { API_NODE_URL } from '../../config';

const RegistrationForm = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
    const [showOTPVerification, setShowOTPVerification] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [sid, setSid] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        gender: '',
        sid: '',
        dob: '',
        city: '',
        collegeName: '',
        highestQualification: ''
    });

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose(); // Close the modal when clicking outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const handleStep1Submit = async (data) => {
        try {
            const response = await fetch(`${API_NODE_URL}register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (result?.data?.sid) {
                setFormData({ ...formData, ...data, sid: result?.data?.sid });
                setSid(result?.data?.sid);
                setShowOTPVerification(true);
            } else {
                throw new Error('SID not received');
            }
        } catch (error) {
            console.error('Error in step 1:', error);
            alert('An error occurred. Please try again.');
        }
    };

    const handleOTPVerification = () => {
        setShowOTPVerification(false);
        setStep(2);
    };

    const handleOTPCancel = () => {
        setShowOTPVerification(false);
    };

    const handleStep2Submit = async (data) => {
        try {
            const finalData = { ...formData, ...data };
            const response = await fetch(`${API_NODE_URL}register/update`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finalData),
            });
            const result = await response.json();

            if (result?.status) {
                setIsSuccessPopupOpen(true);
                // onSuccess();
            } else {
                console.error('Registration failed!');
                throw new Error('Registration failed');
            }
        } catch (error) {
            console.error('Error in registration:', error);
            toast.error('Registration failed. Please try again.');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center px-2">
            <div ref={modalRef} className="relative bg-white p-8 max-sm:p-5 rounded-lg shadow-md w-full max-w-md">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-200"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Registration</h1>
                {step === 1 && <Step1 onSubmit={handleStep1Submit} />}
                {step === 2 && <Step2 onSubmit={handleStep2Submit} />}
                {showOTPVerification && (
                    <OTPVerification mobile={formData.mobile} onVerify={handleOTPVerification} onCancel={handleOTPCancel} />
                )}
                <ToastContainer position="top-center" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
            </div>
            {isSuccessPopupOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-3">
                    <div className="bg-white p-8 max-sm:p-4 rounded-lg shadow-md w-full max-w-sm flex flex-col justify-center items-center text-center">
                        <img src="/image/emoji.gif" alt="Emoji" />
                        <h2 className="mt-5 text-2xl font-poppinsBold text-green-600 mb-4">Registration Successful!</h2>
                        <p className="text-gray-600 font-poppinsMedium mb-6">Thank you for registering. You can now proceed to explore.</p>
                        <button
                            onClick={() => setIsSuccessPopupOpen(false)}
                            className="bg-green-500 text-white px-4 py-1.5 font-poppinsSemiBold rounded-lg hover:bg-green-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;