import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import PetListing from "../pages/petListing/PetListing";
import PetDetails from "../pages/petListing/PetDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import DonationCampaigns from "../pages/donation/DonationCampaigns";
import DonationDetails from "../pages/donation/DonationDetails";
import Dashboard from "../layouts/Dashboard";
import AddPet from "../pages/dashboard/AddPet";
import MyAddedPets from "../pages/dashboard/MyAddedPets";
import UpdatePet from "../pages/dashboard/UpdatePet";
import ErrorPage from "../pages/error/ErrorPage";
import Users from "../pages/dashboard/admin/Users";
import AllPets from "../pages/dashboard/admin/AllPets";
import TestInfiityScroll from "../pages/dashboard/TestInfiityScroll";
import { baseURL } from "../utils/baseURL";
import CreateDonationCampaign from "../pages/dashboard/CreateDonationCampaign";
import AdoptRequests from "../pages/dashboard/AdoptRequests";
import AdminRoute from "./AdminRoute";
import MyDonationCampaigns from "../pages/dashboard/MyDonationCampaigns";
import MyDonations from "../pages/dashboard/MyDonations";
import AllDonations from "../pages/dashboard/admin/AllDonations";
import UpdateDonation from "../pages/dashboard/admin/UpdateDonation";
import PrivateRoute from "./PrivateRoute";
import MyDonationCampUpdate from "../pages/donation/MyDonationCampUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petListing",
        element: <PetListing />,
      },
      {
        path: "/petDetails/:id",
        element: <PetDetails />,
        loader: async ({ params }) =>
          await fetch(`${baseURL}/pets/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/donation",
        element: <DonationCampaigns />,
      },
      {
        path: "/donationDetails/:id",
        element: (
          <PrivateRoute>
            <DonationDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${baseURL}/donations/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: (
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <h1 className='lg:text-5xl font-bold mb-3 dark:text-gray-100'>
              Welcome to Dashboard
            </h1>
            <p className='dark:text-gray-100'>👈 Navigate your tab</p>
          </div>
        ),
      },
      {
        path: "/dashboard/addPet",
        element: <AddPet />,
      },

      {
        path: "/dashboard/myAddedPets",
        element: <MyAddedPets />,
      },
      {
        path: "/dashboard/adoptionRequests",
        element: <AdoptRequests />,
      },
      {
        path: "/dashboard/updatePet/:id",
        element: <UpdatePet />,
        loader: async ({ params }) =>
          await fetch(`${baseURL}/pets/${params.id}`),
      },
      {
        path: "/dashboard/createDonationCampaign",
        element: <CreateDonationCampaign />,
      },
      {
        path: "/dashboard/myDonationCampaigns",
        element: <MyDonationCampaigns />,
      },
      {
        path: "/dashboard/myDonationCampaignUpdate/:id",
        element: <MyDonationCampUpdate />,
        loader: async ({ params }) =>
          fetch(`${baseURL}/my-donation-single-item/${params.id}`),
      },
      {
        path: "/dashboard/myDonations",
        element: <MyDonations />,
      },

      // testing
      {
        path: "/dashboard/infinityScroll",
        element: <TestInfiityScroll />,
      },

      // admin can access
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <Users />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateDonation/:id",
        element: <UpdateDonation />,
        loader: async ({ params }) =>
          await fetch(`${baseURL}/get-signle-donation-by-admin/${params.id}`),
      },
      {
        path: "/dashboard/petsByAdmin",
        element: (
          <AdminRoute>
            <AllPets />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allDonations",
        element: (
          <AdminRoute>
            <AllDonations />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
