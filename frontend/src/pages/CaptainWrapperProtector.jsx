import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainWrapperProtector = ({ children }) => {
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // Track error state
    const navigate = useNavigate();

    useEffect(() => {
        // If there is no token, redirect to login page
        if (!token) {
            navigate('/captain-login');
            return;
        }

        // Define a function to fetch captain data
        const fetchCaptainData = async () => {
            try {
                // Axios request inside try-catch
                const response = await axios.get('http://localhost:4000/captains/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    const data = response.data;
                    setCaptain(data.captain); // Update the captain context
                } else {
                    throw new Error(`Failed to fetch captain profile: ${response.statusText}`);
                }
            } catch (error) {
                // Handle the error
                console.error('Error fetching captain profile:', error);
                setError('Failed to fetch captain data. Please try again later.');
                localStorage.removeItem('token'); // Remove the token if the request fails
                navigate('/captain-login'); // Redirect to login
            } finally {
                setIsLoading(false); // Set loading state to false after request completes
            }
        };

        // Call the function to fetch captain data
        fetchCaptainData();
    }, [token, navigate, setCaptain]);

    // If the component is still loading, display a loading state
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // If there's an error, display an error message
    if (error) {
        return <h1>{error}</h1>;
    }

    return <>{children}</>;
};

export default CaptainWrapperProtector;
