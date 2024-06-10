import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLoaderData } from "react-router-dom";

const DonationDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const donationDetails = useLoaderData();
  console.log({ donationDetails });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const recommendedDonations = [
    {
      id: 1,
      petName: "Mittens",
      petImage: "https://i.ibb.co/JQnq9yT/pexels-rdne-7516109.jpg",
    },
    {
      id: 2,
      petName: "Charlie",
      petImage: "https://i.ibb.co/7JM1P2r/pexels-7.jpg",
    },
    {
      id: 3,
      petName: "Max",
      petImage: "https://i.ibb.co/8mLhz1H/pexels-8.jpg",
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>Donation Details</h1>

      <div className='bg-white shadow-md rounded-lg overflow-hidden'>
        <img
          src={donationDetails?.image}
          alt={donationDetails?.name}
          className='w-full h-64 object-cover'
        />
        <div className='p-6'>
          <h2 className='text-2xl font-semibold mb-4'>
            {donationDetails?.name}
          </h2>
          <p className='text-gray-700 mb-4'>
            {donationDetails?.shortDescription}
          </p>
          <p className='text-gray-700 mb-6'>
            {donationDetails.longDescription}
          </p>
          <div className='mb-4'>
            <div className='relative pt-1'>
              <div className='overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200'>
                <div
                  style={{
                    width: `${
                      (donationDetails?.getDonationAmount /
                        donationDetails?.maxDonationAmount) *
                      100
                    }%`,
                  }}
                  className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                ></div>
              </div>
              <span className='text-xs font-semibold inline-block text-blue-600'>
                ${donationDetails?.getDonationAmount} / $
                {donationDetails.maxDonationAmount}
              </span>
            </div>
          </div>
          <button
            onClick={openModal}
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          >
            Donate Now
          </button>
        </div>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Recommended Donations</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {recommendedDonations.map((donation) => (
            <div
              key={donation.id}
              className='bg-white shadow-md rounded-lg overflow-hidden'
            >
              <img
                src={donation.petImage}
                alt={donation.petName}
                className='w-full h-48 object-cover'
              />
              <div className='p-4'>
                <h4 className='text-lg font-semibold mb-2'>
                  {donation.petName}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog
          onClose={closeModal}
          className='fixed inset-0 flex items-center justify-center z-50'
        >
          <div className='bg-black bg-opacity-50 fixed inset-0' />
          <div className='bg-white rounded-lg p-6 w-full max-w-lg mx-auto z-10'>
            <Dialog.Title className='text-xl font-semibold mb-4'>
              Donate to {donationDetails.petName}
            </Dialog.Title>
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700'>Donation Amount</label>
                <input
                  type='number'
                  className='w-full px-3 py-2 border rounded'
                />
              </div>
              <div className='mb-4'>
                <label className='block text-gray-700'>
                  Credit Card Details
                </label>
                <div className='w-full px-3 py-2 border rounded'>
                  {" "}
                  {/* Stripe Credit Card Element Placeholder */}{" "}
                </div>
              </div>
              <button
                type='submit'
                className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
              >
                Submit Donation
              </button>
            </form>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default DonationDetails;
