import * as React from "react";
import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
// import {
//   CampaignTable,
//   CreateCampaignForm,
//   LinkInputForm,
//   CampaignCard,
//   BasicModal,
// } from "./components";
// import SimpleSnackbar from "./components/SnackBar";
import {ErrorPage} from "./components";
import HomeLayout from "./layouts/Home";
import Storyboard from "./components/Storyboard";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/storyboard",
    element: <Storyboard />,
  },
  {
    path: "/help",
    element: <div>Help</div>,
  },
  {
    path: "/error",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  }
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
