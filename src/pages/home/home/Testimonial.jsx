import review1 from "/assets/review1.jpeg";
import review2 from "/assets/review2.jpeg";
import review3 from "/assets/review3.jpeg";
import review4 from "/assets/review4.jpeg";

const Testimonial = () => {
  return (
    <div className='my-20'>
      <h2 className='text-4xl font-bold mb-14 text-[#002]'>Testimonials</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        <div
          data-aos='zoom-in'
          className='bg-[#cb64ea49] border-b-[2.5px] border-b-transparent hover:border-b-[#3a32d2] px-10 py-12 rounded-lg'
        >
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
        <div
          data-aos='zoom-in'
          className='bg-[#64eac646] border-b-[2.5px] border-b-transparent hover:border-b-[#c232d2] px-10 py-12 rounded-lg'
        >
          <p className='text-black text-[17px]'>
            "I had the most wonderful experience adopting a dog from ARF this
            summer. Biscuit is a year-old terrier mix and the absolute sweetest
            girl, and she came house-trained, too. Everyone who sees her loves
            her, and she has settled in perfectly to New York City life with
            weekends in the country."
          </p>

          <div className='flex items-center gap-6 mt-6'>
            <img className='size-16 rounded-full' src={review2} alt='' />
            <div>
              <h3 className='text-3xl font-semibold'>Denial Mofiz</h3>
              <p className='text-lg'>Adopted Biscuit in June 2015.</p>
            </div>
          </div>
        </div>
        <div
          data-aos='zoom-in'
          className='bg-[#ea64a046] border-b-[2.5px] border-b-transparent hover:border-b-[#c7d232] px-10 py-12 rounded-lg'
        >
          <p className='text-black text-[17px]'>
            "Thank you for the wonderful experience of adopting Daisy. She has
            been wonderful. She settled into our journey across the States like
            a pro, as if she were part of us from the very beginning. Just
            wanted to let you know that we are truly grateful for how well cared
            for she was and how much she will be loved here."
          </p>

          <div className='flex items-center gap-6 mt-6'>
            <img className='size-16 rounded-full' src={review3} alt='' />
            <div>
              <h3 className='text-3xl font-semibold'>Louella Voegeli</h3>
              <p className='text-lg'>Adopted Daisy in August 2015.</p>
            </div>
          </div>
        </div>
        <div
          data-aos='zoom-in'
          className='bg-[#eac66443] border-b-[2.5px] border-b-transparent hover:border-b-[#37d232] px-10 py-12 rounded-lg'
        >
          <p className='text-black text-[17px]'>
            "Over the last two years we have learned a lot from Beaker (like why
            he was named Rocket while at ARF!). We have certainly had some
            challenges, but he has made tremendous progress and has taught us to
            be more patient and to enjoy the small things in life. We could not
            be happier!"
          </p>

          <div className='flex items-center gap-6 mt-6'>
            <img className='size-16 rounded-full' src={review4} alt='' />
            <div>
              <h3 className='text-3xl font-semibold'>Ben Rubinstei</h3>
              <p className='text-lg'>Adopted Beaker in September 2013.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
