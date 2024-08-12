import React from "react";
import { Link } from "react-router-dom";

const img = "/assets/kitten-nature.jpg";

const CallToAction = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center bg-orange-100 dark:bg-gray-900 p-12 my-5 rounded-lg'>
      <div className='max-w-lg mr-5 order-2 md:order-1'>
        <h2 className='text-2xl md:text-4xl dark:text-white font-bold mb-5'>
          Adopt a Pet, Save a Life
        </h2>
        <p className='text-lg dark:text-white mb-5'>
          Every pet deserves a loving home. By adopting, you are not only giving
          a pet a better life, but also opening up space for another pet in
          need.
        </p>
        <Link to='/petListing'>
          <button className='bg-orange-500 text-white border-none py-2 px-6 text-lg rounded hover:bg-orange-600 transition duration-200'>
            Adopt Now
          </button>
        </Link>
      </div>
      <div className='max-w-xs order-1 md:order-2 mb-3 md:mb-0'>
        <img className='max-w-full rounded-lg' src={img} alt='Adopt a Pet' />
      </div>
    </div>
  );
};

export default CallToAction;
