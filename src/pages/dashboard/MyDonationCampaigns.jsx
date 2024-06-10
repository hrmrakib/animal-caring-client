import React from "react";

const MyDonationCampaigns = () => {
  // Sample data, this should come from the API in a real application
  const donationCampaigns = [
    {
      id: 1,
      petName: "Buddy",
      maxDonationAmount: 1000,
      currentDonationAmount: 500,
    },
    {
      id: 2,
      petName: "Mittens",
      maxDonationAmount: 2000,
      currentDonationAmount: 1500,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>My Donation Campaigns</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border'>
          <thead>
            <tr>
              <th className='px-4 py-2 border'>#</th>
              <th className='px-4 py-2 border'>Pet Name</th>
              <th className='px-4 py-2 border'>Maximum Donation Amount</th>
              <th className='px-4 py-2 border'>Donation Progress</th>
              <th className='px-4 py-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donationCampaigns.map((campaign, index) => (
              <tr key={campaign.id}>
                <td className='px-4 py-2 border'>{index + 1}</td>
                <td className='px-4 py-2 border'>{campaign.petName}</td>
                <td className='px-4 py-2 border'>
                  ${campaign.maxDonationAmount}
                </td>
                <td className='px-4 py-2 border'>
                  <div className='relative pt-1'>
                    <div className='overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200'>
                      <div
                        style={{
                          width: `${
                            (campaign.currentDonationAmount /
                              campaign.maxDonationAmount) *
                            100
                          }%`,
                        }}
                        className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                      ></div>
                    </div>
                    <span className='text-xs font-semibold inline-block text-blue-600'>
                      ${campaign.currentDonationAmount} / $
                      {campaign.maxDonationAmount}
                    </span>
                  </div>
                </td>
                <td className='px-4 py-2 border'>
                  <button className='bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600'>
                    Pause
                  </button>
                  <button className='bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600'>
                    Edit
                  </button>
                  <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                    View Donators
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDonationCampaigns;
