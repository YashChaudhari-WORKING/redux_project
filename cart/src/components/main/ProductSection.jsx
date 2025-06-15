"use client";
import React, { useEffect, useState, useMemo } from "react";
import { fetchProduct } from "@/features/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { ProductCard } from "../utils/ProductCard";
import { CartProduct } from "../utils/cartProduct";
export const ProductSection = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { items, totalItem, totalPrize } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  console.log(items);

  const [selectedTab, setselectedTab] = useState("all");

  const filterProduct = useMemo(() => {
    if (selectedTab === "all") return data;
    return data.filter((p) => p.category === selectedTab);
  }, [selectedTab, data]);
  const category = useMemo(() => {
    const unique = new Set(data?.map((p) => p.category));
    return ["all", ...unique];
  }, [data]);

  return (
    <div>
      <div className="flex mb-10 gap-5 bg-gray-100 mx-auto px-[1%] max-w-5xl">
        {category.map((tab) => (
          <span
            className={`${
              selectedTab === tab ? "border-b-2 " : ""
            } cursor-pointer`}
            onClick={() => {
              setselectedTab(tab);
            }}
            key={tab}
          >
            {tab}
          </span>
        ))}
      </div>
      <div>
        {loading === false && (
          <div className="grid grid-cols-4">
            {filterProduct?.map((items) => (
              <ProductCard key={items.id} product={items} />
            ))}
          </div>
        )}
      </div>

      <h1>Cart</h1>
      <div className="flex gap-5">
        <p>Total Prize : {totalPrize}</p>
        <p>Total Prize : {totalPrize}</p>
        <button className="bg-red-200 p-2 rounded-[5px]">Clear Cart</button>
      </div>
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};
