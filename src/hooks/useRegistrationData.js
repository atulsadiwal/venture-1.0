import { useState, useEffect } from "react";

const useRegistrationData = (API_NODE_URL) => {
    const [registrationData, setRegistrationData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRegistrationData = async () => {
            const API_URL = `${API_NODE_URL}register/getAll`;
            setLoading(true);
            try {
                const response = await fetch(API_URL);
                const result = await response.json();
                if (result.status) {
                    setRegistrationData(result?.data);
                } else {
                    throw new Error(result.message || "Failed to fetch data.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRegistrationData();
    }, [API_NODE_URL]);

    return { registrationData, loading, error };
};

export default useRegistrationData;