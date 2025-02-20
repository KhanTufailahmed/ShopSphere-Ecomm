import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home.jsx";
import {Provider} from 'react-redux'
import store from "./redux/store.js";
// import Shop from "./pages/Shop.jsx";
// import Contact from "./pages/Contact.jsx";
// import About from "./pages/About.jsx";
// import Cart from "./pages/cart.jsx";
// import Checkout from "./pages/Checkout.jsx";
// import Order from "./pages/Order.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App></App>
    </Provider>
  </StrictMode>
);
