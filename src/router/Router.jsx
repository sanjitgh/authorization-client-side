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

// Detect subdomain (ignoring localhost and www)
const hostname = window.location.hostname;
const isLocalhost = hostname.endsWith("shop-auth");
const isSubdomain = (() => {
  const parts = hostname.split(".");
  if (isLocalhost) {
    return parts.length === 2 && parts[0] !== "shop-auth";
  } else {
    // On Netlify with custom domain like shop1.mydomain.com
    return parts.length > 2 && parts[0] !== "www";
  }
})();

// Subdomain-only routing
const routes = !isSubdomain
  ? [
      {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error404 />,
        children: [
          { index: true, element: <Home /> },
          { path: "/signup", element: <SignupForm /> },
          { path: "/signin", element: <SignInFrom /> },
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
    ]
  : [
      {
        path: "/",
        element: <SubDomainShopPage />,
        errorElement: <Error404 />,
      },
    ];

const router = createBrowserRouter(routes);

export default router;
