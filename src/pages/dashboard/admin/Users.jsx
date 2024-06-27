import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const makeAdmin = async (user) => {
    const res = await axiosSecure.patch(`/make-admin/${user._id}`);

    if (res.data.modifiedCount > 0) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user?.name} is an admin now!`,
        showConfirmButton: false,
        timer: 1999,
      });
    }
  };

  return (
    <div className='mt-5 max-w-7xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 dark:text-white'>All Users </h2>
      <table className='min-w-full bg-white dark:bg-gray-900'>
        <thead>
          <tr>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              #
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              Name
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              Email
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              Image
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              Status
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 dark:text-gray-900 uppercase tracking-wider'>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className='hover:bg-gray-100 dark:hover:bg-slate-700'
            >
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {index + 1}
              </td>
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {user?.name}
              </td>
              <td className='px-4 py-2 border-b border-gray-200 dark:text-gray-100'>
                {user?.email}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <img
                  src={user?.image}
                  alt='Pet'
                  className='w-16 h-16 object-cover rounded'
                />
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                {user?.role === "admin" ? (
                  <MdAdminPanelSettings
                    title='Admin'
                    className='text-2xl text-red-600'
                  />
                ) : (
                  <FaUsers title='User' className='text-xl text-green-600' />
                )}
              </td>
              <td className='px-4 py-2 border-b border-gray-200'>
                <div className='flex space-x-2 dark:text-gray-100'>
                  {user?.role === "admin" ? null : (
                    <button
                      onClick={() => makeAdmin(user)}
                      className='bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600'
                    >
                      Make Admin
                    </button>
                  )}
                  {
                    user?.mainAdmin ? (
                      <span className='lg:text-2xl font-semibold'>
                        Main Admin
                      </span>
                    ) : null

                    // TODO: implement user ban functionality

                    // <button className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
                    //   Ban
                    // </button>
                  }

                  {user?.role === "admin" && !user?.mainAdmin && "Admin"}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
