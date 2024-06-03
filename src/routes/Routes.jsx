import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import PetListing from "../pages/petListing/PetListing";
import PetDetails from "../pages/petListing/PetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2 className='text-3xl text-center font-bold'>404</h2>,
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
        path: "/petDetails",
        element: <PetDetails />,
      },
    ],
  },
]);

export default router;
