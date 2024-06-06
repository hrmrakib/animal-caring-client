import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const navLinks = (
  <>
    <Link
      to='/dashboard/addPet'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      Add a Pet
    </Link>
    <Link
      to='/dashboard/myAddedPets'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      My Added Pets
    </Link>
    <Link
      to='/dashboard/adoptionRequests'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      Adoption Requests
    </Link>
    <Link
      to='/dashboard/createDonationCampaign'
      className='block py-2.5 px-4 hover:bg-gray-200'
    >
      Create Donation Campaign
    </Link>
    <Link
      className='block py-2.5 px-4 hover:bg-gray-200'
      to='/dashboard/myDonationCampaigns'
    >
      My Donation Campaigns
    </Link>
    <Link
      className='block py-2.5 px-4 hover:bg-gray-200'
      to='/dashboard/myDonations'
    >
      My Donations
    </Link>

    <div className='divider divider-neutral my-4'></div>

    <Link className='block py-2.5 px-4 hover:bg-gray-200' to='/'>
      Home
    </Link>
  </>
);

const Dashboard = ({ children }) => {
  const { user } = useAuth();

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* sidebar */}
      <div className='hidden lg:block w-64 bg-white shadow-md'>
        {/* large device menu */}
        <div className='p-6 text-center text-xl font-bold'>
          Pet Adoption Dashboard
        </div>
        <nav className='mt-10'>
          <Link
            to='/dashboard/addPet'
            className='block py-2.5 px-4 hover:bg-gray-200'
          >
            Add a Pet
          </Link>
          <Link
            to='/dashboard/myAddedPets'
            className='block py-2.5 px-4 hover:bg-gray-200'
          >
            My Added Pets
          </Link>
          <Link
            to='/dashboard/adoptionRequests'
            className='block py-2.5 px-4 hover:bg-gray-200'
          >
            Adoption Requests
          </Link>
          <Link
            to='/dashboard/createDonationCampaign'
            className='block py-2.5 px-4 hover:bg-gray-200'
          >
            Create Donation Campaign
          </Link>
          <Link
            className='block py-2.5 px-4 hover:bg-gray-200'
            to='/dashboard/myDonationCampaigns'
          >
            My Donation Campaigns
          </Link>
          <Link
            className='block py-2.5 px-4 hover:bg-gray-200'
            to='/dashboard/myDonations'
          >
            My Donations
          </Link>

          <div className='divider divider-neutral my-4'></div>

          <Link className='block py-2.5 px-4 hover:bg-gray-200' to='/'>
            Home
          </Link>
        </nav>
      </div>

      {/* main content */}
      <div className='flex-1 flex flex-col'>
        {/* top navbar */}
        <header className='bg-white shadow-md p-4'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            {/* small device menu */}
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content *:text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                {navLinks}
              </ul>
            </div>
            <h1 className='text-xl md:text-2xl font-bold'>Dashboard</h1>

            <div className='flex items-center gap-2'>
              <div className='dropdown dropdown-end'>
                <div tabIndex={0} role='button' className='m-1'>
                  <img
                    className='w-12 h-12 mr-3 rounded-full border'
                    src={user?.photoURL}
                    alt=''
                  />
                </div>
                <ul
                  tabIndex={0}
                  className='flex px-2 py-3 bg-white flex-col gap-2 dropdown-content z-[1] menu shadow rounded w-max'
                >
                  <button
                    onClick={handleLogOut}
                    type='button'
                    className='w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2'
                  >
                    Logout
                  </button>
                </ul>
              </div>
              <span className='hidden md:flex font-semibold'>
                {user?.displayName}
              </span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        {/* <main className='flex-1 p-6 bg-gray-100'>{children}</main>
         */}

        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
