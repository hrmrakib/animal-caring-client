import { FaBirthdayCake, FaCat, FaDog } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="bg-black bg-opacity-90 bg-[url('/assets/banner.jpg')] bg-cover bg-no-repeat bg-center h-96 ">
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

      <div className='flex justify-center items-center gap-10 -mt-32 '>
        <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
          <FaCat className='text-7xl mb-2 text-purple-600' />
          <h3 className='text-2xl font-semibold'>Cats</h3>
        </div>
        <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
          <FaDog className='text-7xl mb-2 text-purple-600' />
          <h3 className='text-2xl font-semibold'>Cats</h3>
        </div>
        <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
          <FaCat className='text-7xl mb-2 text-purple-600' />
          <h3 className='text-2xl font-semibold'>Cats</h3>
        </div>
        <div className='px-11 py-6 border bg-white rounded-lg flex flex-col justify-center items-center'>
          <FaBirthdayCake className='text-7xl mb-2 text-purple-600' />
          <h3 className='text-2xl font-semibold'>Cats</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
