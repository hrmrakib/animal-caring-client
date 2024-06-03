import { LuBird } from "react-icons/lu";
import { PiRabbitLight } from "react-icons/pi";
import { PiDog } from "react-icons/pi";
import { LuCat } from "react-icons/lu";

const HeroBanner = () => {
  return (
    <div className="bg-[url('/assets/banner.jpg')] bg-cover bg-no-repeat bg-center h-[600px]">
      <div className='w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30'>
        <div className='flex justify-center items-center h-full text-center'>
          <div>
            <h2 className='text-5xl font-bold mb-3 text-white'>
              Find your new best friend
            </h2>
            <p className='text-2xl font-semibold text-white'>
              Browse pets from our network of over 14,500 shelters and rescues.
            </p>
          </div>
        </div>

        <div className='flex justify-center items-center gap-10 -mt-28'>
          <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
            <LuBird className='text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Bird</h3>
          </div>
          <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
            <PiRabbitLight className='text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Rabbit</h3>
          </div>
          <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
            <PiDog className='text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Dog</h3>
          </div>
          <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
            <LuCat className='text-7xl mb-2 text-purple-600' />
            <h3 className='text-2xl font-semibold'>Cat</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
