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
              <MdOutlineNotificationsActive /> Feb 12, 2023
            </p>
          </div>

          <h2 className='text-3xl font-semibold'>Working For Cat Adoption</h2>

          <p className='text-[#b1b1b1] my-2'>
            I adopted Saphie, the Evil Genius, World’s Smartest Cat, from a
            bookstore which was going out of business.
          </p>

          <h4>Read More</h4>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsUpdate;
