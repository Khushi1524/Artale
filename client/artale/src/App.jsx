import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/templates";
import { Gallery, MoodMap, Settings, Keeps } from "./components/pages";
// import { useState, useEffect } from "react";

const App = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   if (isDarkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [isDarkMode]);

  // function toggleDarkMode(){
  //   setIsDarkMode(prevMode => !prevMode)
  // }

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
      {
        path: "/keeps",
        element: <Keeps />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
    errorElement: <Error />,
  },
]);

export default App;
