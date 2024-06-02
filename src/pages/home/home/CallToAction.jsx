import React from "react";
import "./CallToAction.css"; // Assuming you have some basic styling here
const img = "https://i.ibb.co/gST08Sj/readhead-cat-sitting.jpg";
const CallToAction = () => {
  return (
    <div className='call-to-action'>
      <div className='cta-content'>
        <h2>Adopt a Pet, Save a Life</h2>
        <p>
          Every pet deserves a loving home. By adopting, you are not only giving
          a pet a better life, but also opening up space for another pet in
          need.
        </p>
        <button className='cta-button'>Adopt Now</button>
      </div>
      <div className='cta-image'>
        <img src={img} alt='Adopt a Pet' />
      </div>
    </div>
  );
};

export default CallToAction;
