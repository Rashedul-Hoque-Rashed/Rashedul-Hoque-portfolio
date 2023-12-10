import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../Pages/Home/Home";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <></>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
  ]);