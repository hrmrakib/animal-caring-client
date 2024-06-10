import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllDonations = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allDonations = [], refetch } = useQuery({
    queryKey: ["allDonation"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-all-donation-by-admin");
      return res.data;
    },
  });

  const handleDelete = (pet) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/delete-donation/${pet._id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8'>All Donations</h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white shadow-md rounded-lg'>
          <thead>
            <tr>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Pet Image
              </th>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Pet Name
              </th>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Max Donation
              </th>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Current Donation
              </th>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Status
              </th>
              <th className='px-6 py-4 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 uppercase'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allDonations.map((campaign, index) => (
              <tr key={campaign._id}>
                <td className='px-6 py-4 border-b border-gray-300'>
                  <img
                    src={campaign?.image}
                    alt={campaign?.name}
                    className='w-16 h-16 object-cover rounded-full'
                  />
                </td>
                <td className='px-6 py-4 border-b border-gray-300'>
                  {campaign?.name}
                </td>
                <td className='px-6 py-4 border-b border-gray-300'>
                  ${campaign.maxDonationAmount}
                </td>
                <td className='px-6 py-4 border-b border-gray-300'>
                  ${campaign.getDonationAmount}
                </td>
                <td className='px-6 py-4 border-b border-gray-300'>
                  {campaign.isPaused ? (
                    <span className='text-red-500'>Paused</span>
                  ) : (
                    <span className='text-green-500'>Active</span>
                  )}
                </td>
                <td className='px-6 py-4 border-b border-gray-300'>
                  <Link to={`/dashboard/updateDonation/${campaign._id}`}>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2'>
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign)}
                    className='bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 mr-2'
                  >
                    Delete
                  </button>
                  <button className='bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600'>
                    {campaign.isPaused ? "Unpause" : "Pause"}
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

export default AllDonations;
