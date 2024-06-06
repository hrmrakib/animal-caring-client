import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const MyAddedPets = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: myPets = [],
    refetch,
    isLoading: loading,
  } = useQuery({
    queryKey: ["myPets"],
    queryFn: async () => {
      // TODO:  include user email for getting his data only
      const result = await axiosSecure.get(`/my-added-pets`);
      return result.data;
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
        const res = await axiosSecure.delete(`/pets/${pet._id}`);
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

  if (loading) {
    return <span>Loading ...</span>;
  }

  return (
    <div className='mt-5 max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6'>My Added Pets</h2>
      <table className='min-w-full bg-white'>
        <thead>
          <tr>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              #
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Pet Name
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Pet Category
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Pet Image
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Adoption Status
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {myPets.map((pet, index) => (
            <tr key={index} className='hover:bg-gray-100'>
              <td className='px-4 py-2 border-b border-gray-200'>
                {index + 1}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>{pet.name}</td>
              <td className='px-4 py-2 border-b border-gray-200'>
                {pet.category}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <img
                  src={pet.image}
                  alt='Pet'
                  className='w-16 h-16 object-cover rounded'
                />
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                {pet.adopted ? "Adopted" : "Not Adopted"}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <div className='flex space-x-2'>
                  <button className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'>
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(pet)}
                    className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
                  >
                    Delete
                  </button>
                  <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'>
                    Mark Adopted
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

export default MyAddedPets;
