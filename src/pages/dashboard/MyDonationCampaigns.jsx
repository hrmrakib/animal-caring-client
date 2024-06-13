import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyDonationCampaigns = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: donationCampaigns = [], refetch } = useQuery({
    queryKey: ["myDonationCamp"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-donation-campaign/${user?.email}`);
      return res.data;
    },
  });

  const handlePause = async (campaign) => {
    const res = await axiosSecure.put(
      `/my-donation-campaign-pause/${campaign._id}`
    );
    if (res.data?.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Pause your pet donation!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>My Donation Campaigns</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border'>
          <thead>
            <tr>
              <th className='px-4 py-2 border'>#</th>
              <th className='px-4 py-2 border'>Pet Name</th>
              <th className='px-4 py-2 border'>Pet Image</th>
              <th className='px-4 py-2 border'>Maximum Donation Amount</th>
              <th className='px-4 py-2 border'>Donation Progress</th>
              <th className='px-4 py-2 border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donationCampaigns.map((campaign, index) => (
              <tr key={campaign.id}>
                <td className='px-4 py-2 border'>{index + 1}</td>
                <td className='px-4 py-2 border'>{campaign?.name}</td>
                <td className='px-4 py-2 border-b border-gray-200'>
                  <img
                    src={campaign?.image}
                    alt={campaign?.name}
                    className='w-16 h-16 object-cover rounded'
                  />
                </td>
                <td className='px-4 py-2 border'>
                  ${campaign.maxDonationAmount}
                </td>
                <td className='px-4 py-2 border'>
                  <div className='relative pt-1'>
                    <div className='overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200'>
                      <div
                        style={{
                          width: `${
                            (campaign?.getDonationAmount /
                              campaign.maxDonationAmount) *
                            100
                          }%`,
                        }}
                        className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500'
                      ></div>
                    </div>
                    <span className='text-xs font-semibold inline-block text-blue-600'>
                      ${campaign.getDonationAmount} / $
                      {campaign.maxDonationAmount}
                    </span>
                  </div>
                </td>
                <td className='px-4 py-2 border'>
                  {campaign?.pause ? (
                    <button className='bg-red-500 text-white px-3 py-1 rounded mr-2 hover:bg-red-600'>
                      Paused
                    </button>
                  ) : (
                    <button
                      onClick={() => handlePause(campaign)}
                      className='bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600'
                    >
                      Pause
                    </button>
                  )}
                  <Link
                    to={`/dashboard/myDonationCampaignUpdate/${campaign._id}`}
                  >
                    <button className='bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600'>
                      Edit
                    </button>
                  </Link>
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
