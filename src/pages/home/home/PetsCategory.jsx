import { useEffect, useState } from "react";

const PetsCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className='my-24'>
      <h2 className='text-4xl max-w-lg mx-auto font-bold text-center mb-10'>
        Share your love with the pets in need of a home
      </h2>
      <div className='grid grid-cols-4 items-end gap-12'>
        {category.map((item) => (
          <div class='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <img class='rounded-lg' src={item.image} alt='product image' />
            </a>
            <div class='px-5 pb-5'>
              <a href='#'>
                <h5 class='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
                  {item.name}
                </h5>
              </a>

              <div class='flex items-center justify-between'>
                <span class='text-3xl font-bold text-gray-900 dark:text-white'>
                  $599
                </span>
                <a
                  href='#'
                  class='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsCategory;
