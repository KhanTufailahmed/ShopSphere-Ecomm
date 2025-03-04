import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Tracking = () => {
  const order = useSelector((state) => state.order.order);
  const navigate = useNavigate();

  if (!order) {
    return (
      <p className="text-center text-red-500 font-semibold m-6">Loading...</p>
    );
  }

  const trackingSteps = [
    "Order Placed",
    "Processing",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
      <p className="mb-4">Track your order status below.</p>

      <div className="mt-6 p-4 border rounded-lg bg-gray-200">
        <h3 className="text-lg font-semibold mb-2">Order Details</h3>
        <p>Order Number: {order.orderNumber}</p>
        <p>Total Price: ${order.totalPrice.toFixed(2)}</p>
      </div>

      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Tracking Progress</h3>
        <div className="relative w-full">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            {trackingSteps.map((step, index) => (
              <div
                key={index}
                className="flex-1 text-center py-2 px-2 rounded-md" 
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          className="bg-blue-500 text-white py-2 px-4 mr-2 hover:bg-blue-600"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Tracking
