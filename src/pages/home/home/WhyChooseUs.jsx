import { FaTrain } from "react-icons/fa6";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const img = "https://i.ibb.co/DrJKt1w/cats.png";

const WhyChooseUs = () => {
  return (
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <div>
        <img className='w-full h-full p-6' src={img} alt='' />
      </div>

      <div>
        <h4 className='text-blue-600 text-sm'>WHY CHOOSE US</h4>
        <h2 className='text-5xl font-bold my-5'>
          Our team of volunteers is truly committed
        </h2>
        <p className='mb-5'>
          Our community is filled with heartwarming success stories of pets
          finding their forever homes. From playful and Join our mission and
          become a part of these happy endings.
        </p>

        <div className='mb-6 flex item-center gap-10'>
          <div className='bg-red-400 mt-1 p-5 rounded-lg flex items-center justify-center'>
            <FaTrain className='text-4xl text-white' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Professional Trainer</h2>
            <p className='text-gray-700 font-medium'>
              Rescuing a pet is a noble and rewarding experience. When you adopt
              a rescue pet, love and care can transform their lives.
            </p>
          </div>
        </div>
        <div className='mb-6 flex item-center gap-10'>
          <div className='bg-red-400 mt-1 p-5 rounded-lg flex items-center justify-center'>
            <IoChatbubbleEllipsesOutline className='text-4xl text-white' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>Free Consultations</h2>
            <p className='text-gray-700 font-medium'>
              Rescuing a pet is a noble and rewarding experience. When you adopt
              a rescue pet, love and care their lives.
            </p>
          </div>
        </div>
        <div className='flex item-center gap-10'>
          <div className='bg-red-400 mt-1 p-5 rounded-lg flex items-center justify-center'>
            <MdOutlinePhoneInTalk className='text-4xl text-white' />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>24/7 Premium Support</h2>
            <p className='text-gray-700 font-medium'>
              Rescuing a pet is a noble and experience. When you adopt a rescue
              pet, love and care can transform their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
