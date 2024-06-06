import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-md shadow-md text-center'>
        <h1 className='text-6xl font-bold text-red-500 mb-4'>404</h1>
        <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
        <p className='text-gray-600 mb-6'>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <div className='space-x-4'>
          <button
            onClick={handleGoBack}
            className='inline-block px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition'
          >
            Go Back
          </button>
          <a
            href='/'
            className='inline-block px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition'
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
