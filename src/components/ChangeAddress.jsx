import React, { useState } from "react";

const ChangeAddress = ({ setIsModelOpen, setAddress }) => {
  const [newAdd, setNewAdd] = useState("");
  const onClose = () => {
    setAddress(newAdd), setIsModelOpen(false);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter new Address.."
        className="border p-2 w-full mb-4"
        onChange={(e) => setNewAdd(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2 cursor-pointer"
          onClick={() => setIsModelOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer"
          onClick={onClose}
        >
          Change Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
