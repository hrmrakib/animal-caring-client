import React from "react";

const MyDonations = () => {
  // Sample data, this should come from the API in a real application
  const donations = [
    {
      id: 1,
      petName: "Buddy",
      petImage: "https://i.ibb.co/QkrxHTn/pexels-mnannapaneni-20436462.jpg",
      donatedAmount: 50,
    },
    {
      id: 2,
      petName: "Mittens",
      petImage: "https://i.ibb.co/JQnq9yT/pexels-rdne-7516109.jpg",
      donatedAmount: 75,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>My Donations</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border'>
          <thead>
            <tr>
              <th className='px-4 py-2 border'>Pet Image</th>
              <th className='px-4 py-2 border'>Pet Name</th>
              <th className='px-4 py-2 border'>Donated Amount</th>
              <th className='px-4 py-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={donation.id}>
                <td className='px-4 py-2 border'>
                  <img
                    src={donation.petImage}
                    alt={donation.petName}
                    className='h-16 w-16 object-cover rounded'
                  />
                </td>
                <td className='px-4 py-2 border'>{donation.petName}</td>
                <td className='px-4 py-2 border'>${donation.donatedAmount}</td>
                <td className='px-4 py-2 border'>
                  <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
                    Ask for Refund
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

export default MyDonations;
