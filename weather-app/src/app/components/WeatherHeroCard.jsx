"use client";
import { useSelector, useDispatch } from "react-redux";
import { fetchWhether, addCity } from "../features/weather/weatherSlice";
export default function WeatherHeroCard() {
  const { data, loading, error, markedCity } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center">
        <h1 className="text-5xl font-bold mt-32 ">
          {data.location?.name}, {data.location?.region},{" "}
          {data.location?.country}
        </h1>
        <p className="text-2xl mt-3 text-gray-400 ">
          {new Date(data.location?.localtime).toLocaleString("en-US", {
            weekday: "long",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
        <div className="flex items-center mt-3   justify-center space-x-5 text-5xl font-semibold">
          <img
            src={data.current?.condition.icon}
            alt={data.current?.condition.text}
            className="w-16 h-16"
          />
          {data.current?.temp_c}°C
        </div>
        <p className="text-lg text-gray-300 mt-1">
          {data.current?.condition.text}
        </p>
        <p className="text-md text-gray-400 flex mt-1 items-center justify-center space-x-1">
          💨 Wind: {data.current?.wind_kph} km/h
        </p>
        <button
          onClick={() => dispatch(addCity(data.location?.name))}
          className={`${
            markedCity.includes(data.location?.name)
              ? "text-amber-500"
              : "text-amber-950"
          }  text-2xl`}
        >
          ★
        </button>
      </div>

      <div className="w-full">
        <h2 class="mt-10 text-lg font-semibold text-white text-left ">
          Favorite Cities
        </h2>
        <div class="bg-[#2c2c2e] rounded-lg p-4 flex flex-col space-y-1">
          <h3 class="text-white font-medium">Los Angeles, CA</h3>
          <p class="text-gray-300 text-sm">25°C</p>
          <p class="text-sm text-yellow-400 flex items-center space-x-1">
            <span>☀️</span>
            <span>Sunny</span>
          </p>
        </div>
      </div>
    </>
  );
}
