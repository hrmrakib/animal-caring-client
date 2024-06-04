const UpdatePet = () => {
  const categories = [
    { value: "Dog", label: "Dog" },
    { value: "Cat", label: "Cat" },
    { value: "Rabbit", label: "Rabbit" },
    { value: "Fish", label: "Fish" },
  ];

  return (
    <div className='max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>Update Pet</h2>
      <form>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='image'
          >
            Pet Image
          </label>
          <input
            type='file'
            id='image'
            name='image'
            className='block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Pet Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='age'
          >
            Pet Age
          </label>
          <input
            type='number'
            id='age'
            name='age'
            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='category'
          >
            Pet Category
          </label>
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='location'
          >
            Pet Location
          </label>
          <input
            type='text'
            id='location'
            name='location'
            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='shortDescription'
          >
            Short Description
          </label>
          <input
            type='text'
            id='shortDescription'
            name='shortDescription'
            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-gray-700 text-sm font-bold mb-2'
            htmlFor='longDescription'
          >
            Long Description
          </label>
          <textarea
            id='longDescription'
            name='longDescription'
            className='block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
            rows='5'
          />
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300'
        >
          Update Pet
        </button>
      </form>
    </div>
  );
};

export default UpdatePet;
