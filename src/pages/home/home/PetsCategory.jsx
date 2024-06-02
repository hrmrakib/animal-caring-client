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
                <h5 class='text-3xl text-center my-3 text-blue-600 font-bold tracking-tight'>
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
