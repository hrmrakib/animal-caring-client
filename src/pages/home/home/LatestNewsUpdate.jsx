import news1 from "/assets/news1.jpeg";
import news2 from "/assets/news2.jpeg";
import news3 from "/assets/news3.jpeg";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";

const LatestNewsUpdate = () => {
  return (
    <div className='my-24'>
      <h2 className='text-4xl font-bold mb-14 text-[#002]'>
        Latest News Update
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 '>
        <div>
          <img className='w-full h-[280px] rounded-lg' src={news1} alt='' />

          <div className='flex items-center gap-5 mt-6 mb-2 *:text-[#b1b1b1]'>
            <p className='flex items-center gap-2'>
              <FaRegUser /> Adward Henrey
            </p>
            <p className='flex items-center gap-2'>
              <MdOutlineNotificationsActive /> Jun 12, 2024
            </p>
          </div>

          <h2 className='text-3xl font-semibold'>Working For Cat Adoption</h2>

          <p className='text-[#787878] my-2'>
            I adopted Saphie, the Evil Genius, World’s Smartest Cat, from a
            bookstore which was going out of business.
          </p>

          <h4 className='text-[#111175] cursor-pointer'>Read More</h4>
        </div>
        <div>
          <img className='w-full h-[280px] rounded-lg' src={news2} alt='' />

          <div className='flex items-center gap-5 mt-6 mb-2 *:text-[#b1b1b1]'>
            <p className='flex items-center gap-2'>
              <FaRegUser /> Charlie Luie
            </p>
            <p className='flex items-center gap-2'>
              <MdOutlineNotificationsActive /> Mar 29, 2024
            </p>
          </div>

          <h2 className='text-3xl font-semibold'>Working For Dog Adoption</h2>

          <p className='text-[#787878] my-2'>
            It's scientifically proven to reduce stress levels and improve blood
            pressure, and no one can offer the unconditional love.
          </p>

          <h4 className='text-[#111175] cursor-pointer'>Read More</h4>
        </div>
        <div>
          <img className='w-full h-[280px] rounded-lg' src={news3} alt='' />

          <div className='flex items-center gap-5 mt-6 mb-2 *:text-[#b1b1b1]'>
            <p className='flex items-center gap-2'>
              <FaRegUser /> Adward Henrey
            </p>
            <p className='flex items-center gap-2'>
              <MdOutlineNotificationsActive /> Feb 12, 2024
            </p>
          </div>

          <h2 className='text-3xl font-semibold'>
            Working For Rabbit Adoption
          </h2>

          <p className='text-[#787878] my-2'>
            With proper diet and medical care, rabbits can live eight-12 years
            or more—which is longer than many other small animal pets.
          </p>

          <h4 className='text-[#111175] cursor-pointer'>Read More</h4>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsUpdate;
