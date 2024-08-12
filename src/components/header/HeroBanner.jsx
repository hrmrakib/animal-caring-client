import { LuBird } from "react-icons/lu";
import { PiRabbitLight } from "react-icons/pi";
import { PiDog } from "react-icons/pi";
import { LuCat } from "react-icons/lu";

const HeroBanner = () => {
  return (
    <div className="bg-[url('/assets/banner.jpg')] w-full bg-cover bg-no-repeat bg-center h-[600px]">
      <div className='relative w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30'>
        <div className='flex justify-center items-center h-full text-center'>
          <div>
            <h2 className='text-3xl lg:text-5xl font-bold mb-3 text-white'>
              Find your new <span className='text-[#ea0bea]'>best</span> friend
            </h2>
            <p className='text-xl lg:text-2xl font-semibold text-white'>
              Browse pets from our network of{" "}
              <span className='text-[#14e849]'>over 14,500</span> shelters and
              rescues.
            </p>
          </div>
        </div>

        <div className='absolute grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10 -bottom-16 lg:-bottom-7'>
          <div className='px-7 lg:px-11 py-4 lg:py-6 border dark:border-gray-900 bg-white dark:bg-gray-900 dark:text-white rounded-lg flex flex-col justify-center items-center'>
            <LuBird className='text-4xl lg:text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Bird</h3>
          </div>
          <div className='px-7 lg:px-11 py-4 lg:py-6 border dark:border-gray-900 dark:bg-gray-900 dark:text-white bg-white rounded-lg flex flex-col justify-center items-center'>
            <PiRabbitLight className='text-4xl lg:text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Rabbit</h3>
          </div>
          <div className='px-7 lg:px-11 py-4 lg:py-6 border dark:border-gray-900 dark:bg-gray-900 dark:text-white bg-white rounded-lg flex flex-col justify-center items-center'>
            <PiDog className='text-4xl lg:text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Dog</h3>
          </div>
          <div className='px-7 lg:px-11 py-4 lg:py-6 border dark:border-gray-900 dark:bg-gray-900 dark:text-white bg-white rounded-lg flex flex-col justify-center items-center'>
            <LuCat className='text-4xl lg:text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Cat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
