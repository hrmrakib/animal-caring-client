import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = ({ children }) => {
  return (
    <div className='flex h-screen bg-gray-100'>
      {/* sidebar */}
      <div className='w-64 bg-white shadow-md'>
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
        </nav>
      </div>

      {/* main content */}
      <div className='flex-1 flex flex-col'>
        {/* top navbar */}
        <header className='bg-white shadow-md p-4'>
          <div className='max-w-7xl mx-auto flex justify-between items-center'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
            <div className='flex items-center'>
              <img
                className='h-8 w-8 rounded-full'
                src='https://via.placeholder.com/150'
                alt='User Profile'
              />
              <span className='ml-2'>User Name</span>
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
