import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/templates";
import { Gallery, MoodMap } from "./components/pages";

const App = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MoodMap />,
      },
        {
        path: "/home",
        element: <MoodMap />,
      },
      {
        path: "/moodmap",
        element: <MoodMap />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      // {
      //   path: "/keeps",
      //   element: <Keeps />,
      // },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      //   {
      //   path: "/setting",
      //   element: <Setting />,
      // },
    ],
    errorElement: <Error />,
  },
]);

export default App;
