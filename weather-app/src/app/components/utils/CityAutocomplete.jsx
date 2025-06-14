"use client";
import React, { useState, useEffect } from "react";
import { fetchWhether } from "@/app/features/weather/weatherSlice";
import { useDispatch } from "react-redux";

function CityAutocomplete() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.length > 2) {
        setLoading(true);
        fetch(
          `https://api.weatherapi.com/v1/search.json?key=52ae9122356643ffab091745240111&q=${query}`
        )
          .then((response) => response.json())
          .then((data) => setSuggestions(data))
          .catch((error) => console.error("Error fetching suggestions:", error))
          .finally(() => setLoading(false));
      } else {
        setSuggestions([]);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search city"
        className="w-full bg-[#1f2937] text-white placeholder-gray-400 px-4 py-2 rounded-2xl border border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-200 
                   transition duration-300 ease-in-out"
      />

      {/* 🔄 Loading indicator */}
      {loading && (
        <div className="absolute top-full mt-2 left-0 w-full flex justify-center py-2 text-sm text-gray-400">
          Loading...
        </div>
      )}

      {/* ✅ Suggestions */}
      {!loading && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-2 bg-[#1f2937] border border-gray-600 rounded-xl shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                setQuery(city.name);
                setSuggestions([]);
                dispatch(fetchWhether(query));
              }}
              className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer transition"
            >
              {city.name}, {city.region}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityAutocomplete;
