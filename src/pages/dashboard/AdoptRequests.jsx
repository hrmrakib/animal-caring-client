import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AdoptRequests = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: adpotReqs = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["adoptReq"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/adopt-request`);
      return result.data;
    },
  });

  const handleReject = (pet) => {
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
        const res = await axiosSecure.delete(`/adopt-request/${pet._id}`);
        console.log(res);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} adopt request rejected!`,
            showConfirmButton: false,
            timer: 1999,
          });
        }
      }
    });
  };

  const handleAccept = async (pet) => {
    const res = await axiosSecure.put(`/accept-adopt-req/${pet._id}`);
    console.log(res.data);

    if (res.data?.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${pet?.userName}'s - request accepted!`,
        showConfirmButton: false,
        timer: 1200,
      });
    }
  };

  return (
    <div className='mt-5 max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 dark:text-gray-100'>
        Adoption Requests
      </h2>
      <table className='min-w-full bg-white dark:bg-gray-900'>
        <thead>
          <tr>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              #
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              User Name
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              User Email
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              User Phone
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              User Address
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {adpotReqs.map((pet, index) => (
            <tr
              key={index}
              className='hover:bg-gray-100 dark:hover:bg-gray-700'
            >
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {index + 1}
              </td>
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {pet?.userName}
              </td>
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {pet?.userEmail}
              </td>

              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {pet?.phoneNumber}
              </td>
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {pet?.address}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <div className='flex space-x-2'>
                  <button
                    onClick={() => handleAccept(pet)}
                    className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
                  >
                    {pet?.accept ? "Accepted" : "Accept"}
                  </button>
                  <button
                    onClick={() => handleReject(pet)}
                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className='pagination flex items-center justify-between py-3'>
    <button className='px-3 py-1 border rounded bg-gray-200 text-gray-700'>
      {"<<"}
    </button>
    <button className='px-3 py-1 border rounded bg-gray-200 text-gray-700'>
      {"<"}
    </button>
    <span>
      Page <strong>1 of 1</strong>
    </span>
    <button className='px-3 py-1 border rounded bg-gray-200 text-gray-700'>
      {">"}
    </button>
    <button className='px-3 py-1 border rounded bg-gray-200 text-gray-700'>
      {">>"}
    </button>
    <select className='ml-2 border rounded bg-gray-200 text-gray-700'>
      {[10, 20, 30, 40, 50].map((pageSize) => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </div> */}
    </div>
  );
};

export default AdoptRequests;
