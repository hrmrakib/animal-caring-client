import review1 from "/assets/review1.jpeg";
import review2 from "/assets/review2.jpeg";
import review3 from "/assets/review3.jpeg";
import review4 from "/assets/review4.jpeg";

const Testimonial = () => {
  return (
    <div>
      <h2>Testimonials</h2>

      <div>
        <div className=''>
          <p>
            "In January of 2014 I started volunteering at ARF. It was the
            greatest decision of my life! I mentioned that if they ever got a
            tuxedo with a white-tipped tail, I would want him. Two weeks later,
            Piglet, now known as Roscoe, showed up. What a guy he turned out to
            be."
          </p>

          <div>
            <img src={review1} alt='' />
            <div>
              <h3>Poul Morkez</h3>
              <p>Adopted Roscoe in June 2014.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
