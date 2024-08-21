import review1 from "/assets/review1.jpeg";
import review2 from "/assets/review2.jpeg";
import review3 from "/assets/review3.jpeg";
import review4 from "/assets/review4.jpeg";

const Testimonial = () => {
  return (
    <div className='my-20'>
      <h2 className='text-4xl font-bold mb-14 text-[#002]'>Testimonials</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div className='bg-[#cb64ea78] border-b-[2.5px] border-b-transparent hover:border-b-[#000] px-10 py-12 rounded-lg'>
          <p className='text-black text-[17px]'>
            "In January of 2014 I started volunteering at ARF. It was the
            greatest decision of my life! I mentioned that if they ever got a
            tuxedo with a white-tipped tail, I would want him. Two weeks later,
            Piglet, now known as Roscoe, showed up. What a guy he turned out to
            be."
          </p>

          <div className='flex items-center gap-6 mt-6'>
            <img className='size-16 rounded-full' src={review1} alt='' />
            <div>
              <h3 className='text-3xl font-semibold'>Poul Morkez</h3>
              <p className='text-lg'>Adopted Roscoe in June 2014.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
