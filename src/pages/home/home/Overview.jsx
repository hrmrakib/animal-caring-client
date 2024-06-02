const bgImg =
  "https://i.ibb.co/7t6b8Np/woman-playing-with-rescue-dogs-shelter.jpg";

const Overview = () => {
  return (
    <div
      className={`relative w-full flex justify-center items-center bg-black bg-opacity-30 bg-[url('https://i.ibb.co/PzWKkbT/man-his-dog-outdoors.jpg')] bg-cover bg-center h-[600px]`}
    >
      <div className='flex flex-col justify-center items-center bg-black bg-opacity-35'>
        <div className='border-2 w-[90%] mx-auto flex flex-col justify-center'>
          <div>
            <h4 className='mb-3 text-orange-300'>
              --- FUN FACT YOU MUST KNOW! ---
            </h4>
          </div>

          <div>
            <h2 className='text-5xl font-bold text-white max-w-[660px]'>
              Share your love with the pets in need of a home
            </h2>
            <h2>WHERE CAN I GET SOME?</h2>
            <div>
              <p className='text-gray-200 text-lg max-w-[600px] border-2'>
                Every year, millions of pets are abandoned or surrendered to
                shelters. These animals are in desperate need of a second chance
                at life and a loving home. At PetAdopt, we are committed to
                connecting these wonderful pets with compassionate individuals
                and families who can provide them the care and love they
                deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
