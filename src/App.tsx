import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import {ErrorPage, NavBar} from "./components";
import HomeLayout from "./layouts/Home";
import Storyboard from "./components/Storyboard";

import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom";


const NavbarWrapper =()=>{
  return (
  <div>
      <NavBar/>
      <Outlet/>
  </div>
  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarWrapper/>,
        children:[
             {
                 path: "/", // yes, again
                 element: <HomeLayout/>
             },
             {
                 path: "/storyboard",
                 element: <Storyboard/>
             },
             {
              path: "/create",
              element: <h1>Hello CREATE!</h1>
          },
        ]
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
