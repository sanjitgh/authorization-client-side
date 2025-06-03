// src/routes/router.js
import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import DashboardHome from "../pages/DashboardHome";
import SignInFrom from "../pages/Signin";
import SignupForm from "../pages/SignUp";
import Error404 from "../pages/Error404";
import DashboardLayout from "../layout/DashboardLayout";
import PrivetRoute from "../privetRoute/PrivetRoute";
import SubDomainShopPage from "../pages/SubDomainShopPage";

// Get current hostname
const hostname = window.location.hostname;

// Determine if it's a subdomain like shopname.localhost
const isSubdomain = (() => {
  const parts = hostname.split(".");
  return (
    (hostname.includes("localhost") &&
      parts.length === 2 &&
      parts[0] !== "localhost") || 
    (parts.length > 2 && parts[0] !== "www") 
  );
})();

// Render SubDomainShopPage only for subdomains
const routes = !isSubdomain
  ? [
      {
        path: "/",
        element: <SubDomainShopPage />,
        errorElement: <Error404 />,
      },
    ]
  : [
      {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error404 />,
        children: [
          { index: true, element: <Home /> },
          { path: "signup", element: <SignupForm /> },
          { path: "signin", element: <SignInFrom /> },
        ],
      },
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
    ];

const router = createBrowserRouter(routes);

export default router;
