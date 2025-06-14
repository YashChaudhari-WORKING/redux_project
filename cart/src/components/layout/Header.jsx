import React from "react";

export const Header = () => {
  return (
    <div className="p-4 px-[3%] flex justify-between border-b-1 border-gray-200">
      <span className="font-bold text-2xl">Shop Cart</span>
      <input
        type="text"
        placeholder="Search Product Name"
        className="p-1 rounded-[10px]  border-gray-50 bg-gray-100"
      />
      <button className="p-2 bg-red-200 rounded-2xl">Cart</button>
    </div>
  );
};
