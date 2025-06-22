import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center">
            <h1 className="text-2xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-6">The page you are looking for does not exist.</p>
            <button
                className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
                onClick={handleRedirect}
            >
                Go to Home
            </button>
        </div>
    );
}

export default PageNotFound;
