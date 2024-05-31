import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <h2 className='text-3xl text-center font-bold'>404</h2>,
  },
]);

export default router;
