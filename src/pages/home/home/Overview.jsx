const bgImg =
  "https://i.ibb.co/7t6b8Np/woman-playing-with-rescue-dogs-shelter.jpg";

const Overview = () => {
  return (
    <div
      className={`relative w-full flex justify-center items-center bg-black bg-opacity-30 bg-[url('https://i.ibb.co/PzWKkbT/man-his-dog-outdoors.jpg')] bg-cover bg-center h-[600px]`}
    >
      <div className='w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-35'>
        <div className='w-[90%] mx-auto flex flex-col justify-center'>
          <div>
            <h4 className='mb-3 text-sm md:text-base text-orange-300'>
              --- FUN FACT YOU MUST KNOW! ---
            </h4>
          </div>

          <div>
            <h2 className='text-3xl md:text-5xl font-bold text-white dark:text-white max-w-[660px] mb-2 md:mb-6'>
              Share your love with the pets in need of a home
            </h2>

            <p className='text-gray-200 dark:text-white text-sm md:text-lg max-w-[700px]'>
              Every year, millions of pets are abandoned or surrendered to
              shelters. These animals are in desperate need of a second chance
              at life and a loving home. At PetAdopt, we are committed to
              connecting these wonderful pets with compassionate individuals and
              families who can provide them the care and love they deserve.
            </p>
          </div>

          <div className='mt-6 flex items-center gap-16 flex-wrap'>
            <div>
              <h2 className='text-3xl md:text-6xl font-bold text-purple-600 mb-2'>
                97%
              </h2>
              <p className='text-gray-300 md:text-lg'>
                SUCCESSFUL <br /> RESCUE
              </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-6xl font-bold text-purple-600 mb-2'>
                325+
              </h2>
              <p className='text-gray-300 md:text-lg'>
                DEDICATED <br /> VOLUNTEER
              </p>
            </div>
            <div>
              <h2 className='text-3xl md:text-6xl font-bold text-purple-600 mb-2'>
                $14M+
              </h2>
              <p className='text-gray-300 md:text-lg'>
                FOOD & PRODUCT <br /> DONATIONS
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
