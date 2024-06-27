import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyDonations = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const userEmail = user?.email;

  const { data: donations = [], refetch } = useQuery({
    queryKey: ["myDonations"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${userEmail}`);
      return res.data;
    },
  });

  const handleRefund = async (donation) => {
    const res = await axiosSecure.put(`/ask-for-refund/${donation._id}`);

    if (res.data?.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Ask for refund successfully!",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-semibold mb-8 dark:text-white'>
        My Donations
      </h1>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white border dark:bg-gray-900'>
          <thead>
            <tr>
              <th className='px-4 py-2 border dark:text-gray-100'>Pet Image</th>
              <th className='px-4 py-2 border dark:text-gray-100'>Pet Name</th>
              <th className='px-4 py-2 border dark:text-gray-100'>
                Donated Amount
              </th>
              <th className='px-4 py-2 border dark:text-gray-100'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation, index) => (
              <tr key={donation.id}>
                <td className='px-4 py-2 border'>
                  <img
                    src={donation?.image}
                    alt={donation?.name}
                    className='h-16 w-16 object-cover rounded'
                  />
                </td>
                <td className='px-4 py-2 border dark:text-gray-100'>
                  {donation?.name}
                </td>
                <td className='px-4 py-2 border dark:text-gray-100'>
                  ${donation?.donation}
                </td>
                <td className='px-4 py-2 border dark:text-gray-100'>
                  {donation?.refund ? (
                    <button className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600'>
                      Sent refund request ...
                    </button>
                  ) : (
                    <button
                      onClick={() => handleRefund(donation)}
                      className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                    >
                      Ask for Refund
                    </button>
                  )}
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
