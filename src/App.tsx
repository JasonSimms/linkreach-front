import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ErrorPage, NavBar, LogInForm } from "./components";
// import HomeLayout from "./layouts/Home";
import LinksLayout from "./layouts/Links";
import LandingLayout from "./layouts/Landing";
import Storyboard from "./components/Storyboard";

import { AuthProvider, useAuth } from "./context/AuthContext";

import { SnackbarProvider } from "./context/SnackbarContext";
import { AppDataProvider } from "./context/DataContext";
import { UIProvider } from "./context/UIContext";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomeLayout from "./layouts/Home";

//Redirect to /login when protected routes are accessed.
const NavbarWrapper = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    const protectedRoutes = ["/dashboard", "/links"];
    if (!currentUser && protectedRoutes.includes(location.pathname)) {
      navigate("/login");
    }
  }, [currentUser, location.pathname, navigate]);

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/",
        element: <LandingLayout />,
      },
      {
        path: "/dashboard",
        element: <HomeLayout />,
      },
      {
        path: "/storyboard",
        element: <Storyboard />,
      },
      {
        path: "/links",
        element: <LinksLayout />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LogInForm />,
  },
  // {
  //   path: "/help",
  //   element: <DumbBar/>,
  // },
  // {
  //   path: "/error",
  //   element: <ErrorPage />,
  //   errorElement: <ErrorPage />,
  // }
]);

function App() {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
        <SnackbarProvider>
          <AuthProvider>
            <AppDataProvider>
              <UIProvider>
                <RouterProvider router={router} />
              </UIProvider>
            </AppDataProvider>
          </AuthProvider>
        </SnackbarProvider>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
