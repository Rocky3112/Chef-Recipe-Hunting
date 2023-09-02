/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Login from "../Layouts/Login/Login";
import Register from "../Layouts/Register/Register";
import Home from "../Layouts/Home/Home";
import ErrorPage from "../Layouts/ErrorPage/ErrorPage";
import ChefDetails from "../Layouts/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "../Layouts/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ({params})=> fetch(`https://chef-recipe-hunting-server-rocky3112.vercel.app/chef`)
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "/chefdetails/:id",
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) =>fetch(`https://chef-recipe-hunting-server-rocky3112.vercel.app/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
