import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import notFound from '../assets/Images/not_found.png'
const FilterData = () => {
  const filterProduct = useSelector((state) => state.product.filteredData);
//check
  
  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {filterProduct.length > 0 ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-center">SHOP</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer ">
            {filterProduct.map((product) => (
              <ProductCard product={product}></ProductCard>
            ))}
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <img src={notFound} alt="Not Found" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
