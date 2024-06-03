import React from "react";

const img = "https://i.ibb.co/NyFdZpk/close-up-gray-kitten-nature.jpg";

const CallToAction = () => {
  return (
    <div className='flex items-center justify-center bg-orange-100 p-12 my-5 rounded-lg'>
      <div className='max-w-lg mr-5'>
        <h2 className='text-4xl font-bold mb-5'>Adopt a Pet, Save a Life</h2>
        <p className='text-lg mb-5'>
          Every pet deserves a loving home. By adopting, you are not only giving
          a pet a better life, but also opening up space for another pet in
          need.
        </p>
        <button className='bg-orange-500 text-white border-none py-2 px-6 text-lg rounded hover:bg-orange-600 transition duration-200'>
          Adopt Now
        </button>
      </div>
      <div className='max-w-xs'>
        <img className='max-w-full rounded-lg' src={img} alt='Adopt a Pet' />
      </div>
    </div>
  );
};

export default CallToAction;
