import React, { Children } from "react";

const Model = ({children,isModelOpen,setIsModelOpen}) => {
    if (!isModelOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-400/55  flex items-center justify-center z-56">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <button
          className="absolute top-4 right-4 text-gray-800 text-3xl cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Model;
