import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { ErrorPage, NavBar } from "./components";
import HomeLayout from "./layouts/Home";
import Storyboard from "./components/Storyboard";

import { initializeApp } from "firebase/app";
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG) || null;
initializeApp(firebaseConfig);

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
  Navigate,
} from "react-router-dom";

// import { AuthProvider } from "./contexts/AuthContext";

const NavbarWrapper = () => {
  const location = useLocation();
  // const { authLogin } = /* some auth state provider */
  // const authLogin = undefined;
  const authLogin = { user: "user"};

  // if (authLogin === undefined) {
  //   throw Error("No Auth Login Available"); // or loading indicator/spinner/etc
  // }
   // return authLogin ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/login" replace state={{ from: location }} />
  // );

  if (authLogin) {
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
  } else {
    console.log('location', location)

    return <Navigate to="/" replace/>;
  }
  // return (
  // <div>
  //     <NavBar/>
  //     <Outlet/>
  // </div>
  // )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/", // yes, again
        element: <HomeLayout />,
      },
      {
        path: "/storyboard",
        element: <Storyboard />,
      },
      {
        path: "/create",
        element: <h1>Hello CREATE!</h1>,
      },
    ],
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/storyboard",
  //   element: <Storyboard />,
  // },
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
        <RouterProvider router={router} />
      </StyledEngineProvider>
    </React.StrictMode>
  );
}

export default App;
