
import './App.css'
import React, { useEffect } from "react";
import HomePage from './pages/Home/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"


import SinglePage from './pages/singlePage/SinglePage'
import Layout from './pages/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import ProfilePage from './component/profilePage/ProfilePage';
import Footer from './component/Footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './component/contact/Contact';

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/contact",
          element: <Contact />
        },

      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
