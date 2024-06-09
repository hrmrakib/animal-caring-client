import { useEffect, useState } from "react";

const PetsCategory = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className='my-36'>
      <h2 className='text-2xl md:text-4xl dark:text-white leading-tight max-w-lg mx-auto font-bold text-center mb-10'>
        Share your love with the pets in need of a home
      </h2>
      <div className='grid lg:grid-cols-4 items-end gap-12'>
        {category.map((item) => (
          <div
            key={item.name}
            className='w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <a href='#'>
              <img
                className='rounded-lg'
                src={item.image}
                alt='product image'
              />
            </a>
            <div className='px-5 pb-5'>
              <a href='#'>
                <h5 className='text-2xl md:text-3xl text-center my-3 text-purple-600 dark:text-white font-bold tracking-tight'>
                  {item.name}
                </h5>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsCategory;
