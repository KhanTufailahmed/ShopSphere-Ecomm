import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Model from "./Model";
import Login from "./Login";
import Register from "./Register";
import { productAction } from "../redux/productSlice";

const Navbar = () => {
  const [isModelOpen,setIsModelOpen]=useState(false);
  const [isLogin,setIsLogin]=useState(true)
  const navigatee=useNavigate()
  const [search,setSearch]=useState()
  const dispatch=useDispatch()
  const handleSearch =(e)=>{
    e.preventDefault();
    dispatch(productAction.setSearchTerm(search))
    navigatee('/filter-data')
  }
  const navigate = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Contact", href: "/contact" },
    { label: "About", href: "/about" },
  ];
  const products = useSelector((store) => store.cart.products);
  return (
    <nav className="bg-white shadow-md ">
      <div className="flex justify-between container mx-auto px-4 md:px-16 lg:px-24 py-4 items-center">
        <div className="text-lg font-bold pb-1">
          <Link to={"/"}>ShopSphere  </Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-2   border"
              onChange={(e)=>setSearch(e.target.value)}
            ></input>
            <IoSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block cursor-pointer"
            onClick={() => setIsModelOpen(true)}
          >
            Login | Register
          </button>
          <button className="block md:hidden">
            <FaUserCircle />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-10 justify-center py-4 text-sm font-bold">
        {navigate.map((nav) => {
          return (
            <NavLink
              to={nav.href}
              key={nav.label}
              className={`hover:underline gap-4`}
            >
              {nav.label}
            </NavLink>
          );
        })}
      </div>
      <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login setIsLogin={setIsLogin}></Login>
        ) : (
          <Register setIsLogin={setIsLogin}></Register>
        )}
      </Model>
    </nav>
  );
};

export default Navbar;
