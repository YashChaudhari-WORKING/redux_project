"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "@/features/productCart";
export const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg shadow-md p-4 bg-white flex flex-col">
      {/* Image */}

      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />

      {/* Category */}
      <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
        {product.category}
      </span>

      {/* Title */}
      <h2 className="font-semibold text-sm mb-2 line-clamp-2">
        {product.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-xs mb-2 line-clamp-2">
        {product.description}
      </p>

      {/* Price & Rating */}
      <div className="flex justify-between items-center text-sm mb-4">
        <span className="text-blue-600 font-bold">${product.price}</span>
        <span className="text-yellow-500">
          ⭐ {product.rating?.rate} ({product.rating?.count})
        </span>
      </div>
      <div className="text-sm flex justify-between">
        <p>Quantity : {product.quantity} </p>
        <p>itemTotalPrize : {product.itemTotalPrize}</p>
      </div>

      <div className="text-sm mt-2 flex justify-between">
        <button
          onClick={() => dispatch(addItem(product))}
          className="p-2 bg-gray-200 rounded-[5px]"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeItem(product.id))}
          className="p-2 bg-gray-200 rounded-[5px]"
        >
          -
        </button>
      </div>
    </div>
  );
};
