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
        loader: ({ params }) => fetch(`${baseURL}/pets/${params.id}`),
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
        path: "/donationDetails",
        element: <DonationDetails />,
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
            <h1 className='lg:text-5xl font-bold mb-3'>Welcome to Dashboard</h1>
            <p>👈 Navigate your tab</p>
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
        loader: ({ params }) => fetch(`${baseURL}/pets/${params.id}`),
      },
      {
        path: "/dashboard/createDonationCampaign",
        element: <CreateDonationCampaign />,
      },

      // testing
      {
        path: "/dashboard/infinityScroll",
        element: <TestInfiityScroll />,
      },

      // admin can access
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/petsByAdmin",
        element: <AllPets />,
      },
    ],
  },
]);

export default router;
