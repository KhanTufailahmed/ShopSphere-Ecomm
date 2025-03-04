import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const order = useSelector((state) => (state.order.order));
  const navigate =useNavigate()
  if(!order){
    return (
      <p className="text-center text-red-500 font-semibold m-6">Loading....</p>
    );
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Thank you for your Order </h2>
      <p>
        Your Order have been placed successfully you will receive an email
        confirmation shortly
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-200">
        <h3>Order Summery</h3>
        <p>Order Number:{order.orderNumber}</p>
        <div className="mt-4">
          <h2 className="text-md font-semibold mb-2">Shipping Information</h2>
          <p>Address: {order.shippingInformation.address}</p>
          <p>City: {order.shippingInformation.city}</p>
          <p>ZIP Code: {order.shippingInformation.zip}</p>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Items Ordered</h4>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name}x{product.quantity}
              </p>
              <p>${(product.price * product.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">{order.totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-6 ">
        <button
          className="bg-green-500 text-white mr-2 py-2 px-4 hover:bg-green-600"
          onClick={() => navigate("/order-tracking")}
        >
          Order Trackin
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4  hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Order;
