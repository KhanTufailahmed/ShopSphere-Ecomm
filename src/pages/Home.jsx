import React, { useEffect } from "react";
import { Categories } from "../assets/mockData";
import { mockData } from "../assets/mockData";
import heropage from "../assets/Images/hero-page.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import productSlice, { productAction } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";
import Model from "../components/Model";
const Home = () => {
  const disPatch = useDispatch();
  const products = useSelector((store) => (store.product));
  useEffect(() => {
    disPatch(productAction.setProduct(mockData));
  }, []);
  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12 mr-2">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES:{" "}
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border border-gray-300 ">
              {Categories.map((cat, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border bg-red-500 border-red-500 rounded-full mr-2"></div>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img className="h-full w-full " src={heropage}></img>
            <div className="absolute top-16 left-8">
              <p className="text-gray-600 mb-4">ShopSphere </p>
              <h2 className="text-3xl font-bold ">WELCOME TO ShopSphere </h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS+ PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSection></InfoSection>
        <CategorySection></CategorySection>
        <div className="mx-auto py-12">
          <h2 className="text-2xl font-bold mb-4 text-center">TOP PRODUCTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer ">
            {products.products.slice(0, 5).map((product) => (
              <ProductCard product={product}></ProductCard>
            ))}
          </div>
        </div>
      </div>
      <Shop></Shop>
    </div>
  );
};

export default Home;
