import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/UserPages/RegisterPage";
import ContactPage from "./pages/ContactPage";

import App from "./App";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/map",
        element: <MapPage />,
        loader: () => fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork/`),
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
