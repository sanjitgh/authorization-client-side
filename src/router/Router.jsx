import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import DashboardHome from "../pages/DashboardHome";
import SignInFrom from "../pages/Signin";
import SignupForm from "../pages/SignUp";
import Error404 from "../pages/Error404";
import DashboardLayout from "../layout/DashboardLayout";
import PrivetRoute from "../privetRoute/PrivetRoute";

const router = createBrowserRouter([
  // Home route
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignupForm />,
      },
      {
        path: "/signin",
        element: <SignInFrom />,
      },
    ],
  },

  //   Dashboard route
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashboardLayout />
      </PrivetRoute>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashboardHome />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
