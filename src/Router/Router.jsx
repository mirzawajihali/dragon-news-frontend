import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NewsDetails from "../pages/NewsDetails";
import About from "../pages/Developer";
import Developer from "../pages/Developer";
import PrivateRouter from "./PrivateRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
   
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"} replace ></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: <PrivateRouter>
      <NewsDetails></NewsDetails>
    </PrivateRouter>,
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children :[
      {
        path : '/auth/login',
        element : <Login></Login>
      },
      {
        path : '/auth/register',
        element : <Register></Register>
      }
    ]
  },
  {
    path: "/developer",
    element: <Developer></Developer>,
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;