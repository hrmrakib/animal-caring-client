import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../../utils/stripeConfig";
import DonationForm from "./DonationForm";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DonationDetails = ({ campaign }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [recommendedCampaigns, setRecommendedCampaigns] = useState([]);

  //   useEffect(() => {
  //     // Fetch recommended campaigns (mocked here)
  //     const fetchRecommendedCampaigns = () => {
  //       const campaigns = [
  //         {
  //           id: 3,
  //           petName: "Whiskers",
  //           petImage: "https://via.placeholder.com/150",
  //           maxDonation: 400,
  //           donatedAmount: 100,
  //           date: "2024-06-03",
  //         },
  //         {
  //           id: 4,
  //           petName: "Charlie",
  //           petImage: "https://via.placeholder.com/150",
  //           maxDonation: 600,
  //           donatedAmount: 250,
  //           date: "2024-06-04",
  //         },
  //         {
  //           id: 5,
  //           petName: "Bella",
  //           petImage: "https://via.placeholder.com/150",
  //           maxDonation: 700,
  //           donatedAmount: 300,
  //           date: "2024-06-05",
  //         },
  //       ];
  //       setRecommendedCampaigns(campaigns);
  //     };

  //     fetchRecommendedCampaigns();
  //   }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='p-10 min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
        <img
          src={"campaign.petImage"}
          alt={"campaign.petName"}
          className='w-full h-64 object-cover rounded-t-lg'
        />
        <h2 className='text-3xl font-bold mt-4'>{"campaign.petName"}</h2>
        <p className='text-gray-700 mt-2'>
          Max Donation: ${"campaign.maxDonation"}
        </p>
        <p className='text-gray-700 mt-2'>
          Donated Amount: ${"campaign.donatedAmount"}
        </p>
        <button
          onClick={openModal}
          className='mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200'
        >
          Donate Now
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'
        overlayClassName='fixed inset-0 bg-black bg-opacity-30'
      >
        <div className='bg-white p-6 rounded-lg shadow-lg max-w-md w-full'>
          <h2 className='text-2xl font-bold mb-4'>
            Donate to {"campaign.petName"}
          </h2>
          <Elements stripe={stripePromise}>
            <DonationForm campaignId={"campaign.id"} closeModal={closeModal} />
          </Elements>
          <button
            onClick={closeModal}
            className='mt-4 w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-200'
          >
            Close
          </button>
        </div>
      </Modal>

      <div className='mt-10'>
        <h3 className='text-2xl font-bold mb-6'>Recommended Donations</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {recommendedCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className='bg-white p-6 rounded-lg shadow-lg'
            >
              <img
                src={campaign.petImage}
                alt={campaign.petName}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='pt-6 pb-4'>
                <h3 className='text-2xl font-bold mb-2'>{campaign.petName}</h3>
                <p className='text-gray-700 mb-1'>
                  Max Donation: ${campaign.maxDonation}
                </p>
                <p className='text-gray-700 mb-1'>
                  Donated Amount: ${campaign.donatedAmount}
                </p>
                <button className='mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200'>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
