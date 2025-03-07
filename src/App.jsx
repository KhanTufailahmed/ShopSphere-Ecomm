import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout";
import Footer from './components/Footer'
import About from "./pages/About";
import Contact from "./pages/Contact";
import Order from "./pages/Order";
import Login from "./components/Login";
import FilterData from "./pages/FilterData";
import PrdoductDetails from "./pages/PrdoductDetails";
import { ToastContainer } from "react-toastify";
import Tracking from "./pages/Tracking.jsx";

function App() {
  const [order, setOrder] = useState('');

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/order-tracking" element={<Tracking />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          {/* <Route path="/product/:id" element={<PrdoductDetails></PrdoductDetails>}></Route> */}
          <Route
            path="/filter-data"
            element={<FilterData></FilterData>}
          ></Route>
          <Route
            path="/order-confirmation"
            element={<Order order={order}></Order>}
          ></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
