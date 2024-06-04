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
        loader: ({ params }) =>
          fetch(`http://localhost:8000/pets/${params.id}`),
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
        path: "/dashboard/addPet",
        element: <AddPet />,
      },
      {
        path: "/dashboard/myAddedPets",
        element: <MyAddedPets />,
      },
      {
        path: "/dashboard/updatePet",
        element: <UpdatePet />,
      },
    ],
  },
]);

export default router;
