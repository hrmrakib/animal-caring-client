import React from "react";

const AddPet = () => {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Add a Pet</h2>

      <form>
        <div className='mb-4'>
          <label htmlFor='image' className='block text-gray-700'>
            Pet Image
          </label>
          <input type='file' className='mt-2' />
        </div>
        <div className='mb-4'>
          <label htmlFor='name' className='block text-gray-700'>
            Pet Name
          </label>
          <input
            name='name'
            type='text'
            className='mt-2 p-2 w-full border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='age' className='block text-gray-700'>
            Pet Age
          </label>
          <input
            name='age'
            type='number'
            className='mt-2 p-2 w-full border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='category' className='block text-gray-700'>
            Pet Category
          </label>
        </div>
        <div className='mb-4'>
          <label htmlFor='location' className='block text-gray-700'>
            Pet Location
          </label>
          <input
            name='location'
            type='text'
            className='mt-2 p-2 w-full border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='shortDescription' className='block text-gray-700'>
            Short Description
          </label>
          <input
            name='shortDescription'
            type='text'
            className='mt-2 p-2 w-full border rounded'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='longDescription' className='block text-gray-700'>
            Long Description
          </label>
          <input
            name='longDescription'
            type='textarea'
            className='mt-2 p-2 w-full border rounded'
          />
        </div>
        <div className='mb-4'>
          <button
            type='submit'
            // disabled
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200'
          >
            Add Pet
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPet;
