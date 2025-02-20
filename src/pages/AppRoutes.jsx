import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "./Home";
import Shop from "./Shop";
import Contact from "./Contact";
import About from "./About";
import Cart from "./cart";
import Checkout from "./Checkout";
import Order from "./Order";

const AppRoutes = () => {
  const [order, setOrder] = useState('');
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        { path: "/", element: <Home></Home> },
        {
          path: "/shop",
          element: <Shop></Shop>,
        },
        {
          path: "/contact",
          element: <Contact></Contact>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/checkout",
          element: <Checkout setOrder={setOrder}></Checkout>,
        },
        {
          path: "/order-confirmation",
          element: <Order order={order}></Order>,
        },
      ],
    },
  ]);
 

  return <RouterProvider router={router} />; // ✅ Providing the router here
};

export default AppRoutes;
