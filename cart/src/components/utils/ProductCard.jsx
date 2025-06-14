import React from "react";

export const ProductCard = ({ product }) => {
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

      {/* Add to Cart Button */}
      <button className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
};
